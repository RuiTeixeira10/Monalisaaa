const canvas = document.getElementById("jogo");
const ctx = canvas.getContext("2d");

// IMAGENS
let stopImg = new Image();
stopImg.src = "imagens/stop.webp";

let framboesaImg = new Image();
framboesaImg.src = "imagens/framboesa.png";

let esmagadaImg = new Image();
esmagadaImg.src = "imagens/esmagada.jpg";

// DEBUG DAS IMAGENS (se aparecer algum "ERRO AO CARREGAR", o caminho/ficheiro está errado)
stopImg.onerror = () => console.error("ERRO AO CARREGAR stop.webp — verifica o caminho");
framboesaImg.onerror = () => console.error("ERRO AO CARREGAR framboesa.png — verifica o caminho");
esmagadaImg.onload = () => console.log("ESMAGADA CARREGADA");
esmagadaImg.onerror = () => console.error("ERRO AO CARREGAR esmagada.png — verifica o caminho");

// Só é seguro desenhar a imagem se ela tiver mesmo carregado.
// Sem isto, uma imagem partida faz o drawImage() rebentar e o jogo
// congela em silêncio (o requestAnimationFrame nunca mais é chamado).
function imagemPronta(img) {
    return img.complete && img.naturalWidth !== 0;
}

// VARIÁVEIS
let alvos = [];
let framboesa = null;

let pontos = 0;
let tempo = 40;
let jogoAtivo = false;

let dificuldade = 9000; // tempo (ms) que um stop demora a desaparecer
const dificuldadeMinima = 1100; // no fim do jogo desaparecem quase instantaneamente
let intervaloAlvos;
let intervaloTempo;

let ritmoSpawn = 1400; // ms entre o aparecimento de cada stop
const ritmoSpawnMinimo = 450; // no fim aparecem quase sem parar

let tamanhoAlvo = 60; // px, vai encolhendo
const tamanhoAlvoMinimo = 30;

// HUD
const pontuacaoEl = document.getElementById("pontuacao");
const tempoEl = document.getElementById("tempo");
const btnStart = document.getElementById("btnStart");

// MIRA
let mouseX = null;
let mouseY = null;

// ------------------------------
// CRIAR ALVO
// ------------------------------
function criarAlvo() {
    const alvo = {
        x: Math.random() * (330 - tamanhoAlvo + 60), // ajusta para não sair do canvas conforme encolhe
        y: Math.random() * 200,
        tamanho: tamanhoAlvo,
        esmagado: false
    };

    alvos.push(alvo);

    setTimeout(() => {
        const index = alvos.indexOf(alvo);
        if (index !== -1 && !alvo.esmagado) alvos.splice(index, 1);
    }, dificuldade);

    // progressão de dificuldade: alvos cada vez mais rápidos a desaparecer...
    if (dificuldade > dificuldadeMinima) {
        dificuldade -= 260;
        if (dificuldade < dificuldadeMinima) dificuldade = dificuldadeMinima;
    }

    // ...e cada vez mais pequenos
    if (tamanhoAlvo > tamanhoAlvoMinimo) {
        tamanhoAlvo -= 1.2;
        if (tamanhoAlvo < tamanhoAlvoMinimo) tamanhoAlvo = tamanhoAlvoMinimo;
    }
}

// ------------------------------
// LANÇAR FRAMBOESA COM ÂNGULO
// ------------------------------
function lançarFramboesa(mx, my) {
    if (!jogoAtivo) return;

    if (!framboesa) {
        console.log("FRAMBOESA LANÇADA");

        const startX = canvas.width / 2;
        const startY = canvas.height - 50;

        const dx = mx - startX;
        const dy = my - startY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        framboesa = {
            x: startX,
            y: startY,
            dx: dx / dist * 8,
            dy: dy / dist * 8
        };
    }
}

// CLICK → LANÇAR
canvas.addEventListener("click", (e) => {
    if (!jogoAtivo) return;

    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    lançarFramboesa(mx, my);
});

// MOUSEMOVE → MIRA
canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

// Desenha uma seta a sério (linha tracejada + ponta triangular), em vez
// de uma linha simples — do ponto de lançamento até à posição do rato.
function desenharMira(startX, startY, mx, my) {
    const angulo = Math.atan2(my - startY, mx - startX);
    const dist = Math.hypot(mx - startX, my - startY);
    if (dist < 5) return;

    ctx.save();

    // corpo da seta, tracejado
    ctx.strokeStyle = "rgba(230, 57, 80, 0.55)";
    ctx.lineWidth = 3;
    ctx.setLineDash([9, 7]);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(mx, my);
    ctx.stroke();
    ctx.setLineDash([]);

    // ponta da seta (triângulo), orientada para onde vais lançar
    const pontaComprimento = 16;
    const pontaLargura = 10;
    ctx.translate(mx, my);
    ctx.rotate(angulo);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-pontaComprimento, -pontaLargura);
    ctx.lineTo(-pontaComprimento, pontaLargura);
    ctx.closePath();
    ctx.fillStyle = "#e63950";
    ctx.fill();

    ctx.restore();

    // pequeno círculo no ponto de lançamento (base do lançador)
    ctx.beginPath();
    ctx.arc(startX, startY, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#e63950";
    ctx.fill();
}

// ------------------------------
// LOOP DO JOGO
// ------------------------------
function atualizar() {
  try {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // desenhar mira (só faz sentido enquanto não há framboesa no ar)
    if (mouseX !== null && mouseY !== null && !framboesa) {
        const startX = canvas.width / 2;
        const startY = canvas.height - 50;
        desenharMira(startX, startY, mouseX, mouseY);
    }

    // desenhar alvos (só se a imagem estiver mesmo carregada)
    alvos.forEach(a => {
        if (a.esmagado) {
            if (imagemPronta(esmagadaImg)) {
                ctx.drawImage(esmagadaImg, a.x, a.y, a.tamanho, a.tamanho);
            }
        } else {
            if (imagemPronta(stopImg)) {
                ctx.drawImage(stopImg, a.x, a.y, a.tamanho, a.tamanho);
            }
        }
    });

    // desenhar framboesa
    if (framboesa) {
        framboesa.x += framboesa.dx;
        framboesa.y += framboesa.dy;

        if (imagemPronta(framboesaImg)) {
            ctx.drawImage(framboesaImg, framboesa.x, framboesa.y, 40, 40);
        }

        // colisão (ignora alvos já esmagados, para não voltar a acertar neles)
        for (let i = 0; i < alvos.length; i++) {
            const a = alvos[i];
            if (a.esmagado) continue;

            if (
                framboesa.x < a.x + a.tamanho &&
                framboesa.x + 40 > a.x &&
                framboesa.y < a.y + a.tamanho &&
                framboesa.y + 40 > a.y
            ) {
                console.log("ACERTOU STOP");

                a.esmagado = true;

                setTimeout(() => {
                    const index = alvos.indexOf(a);
                    if (index !== -1) alvos.splice(index, 1);
                }, 300);

                framboesa = null;
                pontos++;
                pontuacaoEl.textContent = "Pontos: " + pontos;

                break; // já acertou, não precisa de verificar mais alvos
            }
        }

        // framboesa sai do ecrã
        if (
            framboesa &&
            (framboesa.y < -40 ||
            framboesa.x < -40 ||
            framboesa.x > canvas.width + 40)
        ) {
            framboesa = null;
        }
    }
  } catch (erro) {
    // Nunca deixar o jogo congelar em silêncio: mostra o erro no console
    // e continua o loop na próxima frame.
    console.error("Erro no loop do jogo:", erro);
  }

    requestAnimationFrame(atualizar);
}

// ------------------------------
// AGENDAR SPAWN DE ALVOS (ritmo cada vez mais rápido)
// ------------------------------
function agendarProximoAlvo() {
    intervaloAlvos = setTimeout(() => {
        if (!jogoAtivo) return;
        criarAlvo();

        if (ritmoSpawn > ritmoSpawnMinimo) {
            ritmoSpawn -= 45;
            if (ritmoSpawn < ritmoSpawnMinimo) ritmoSpawn = ritmoSpawnMinimo;
        }

        agendarProximoAlvo();
    }, ritmoSpawn);
}

// ------------------------------
// TIMER
// ------------------------------
function atualizarTempo() {
    tempo--;
    tempoEl.textContent = "Tempo: " + tempo + "s";

    if (tempo <= 0) terminarJogo();
}

// ------------------------------
// COMEÇAR JOGO
// ------------------------------
btnStart.onclick = () => {
    pontos = 0;
    tempo = 40;
    dificuldade = 9000;
    ritmoSpawn = 1400;
    tamanhoAlvo = 60;
    alvos = [];
    framboesa = null;
    jogoAtivo = true;

    pontuacaoEl.textContent = "Pontos: 0";
    tempoEl.textContent = "Tempo: 40s";

    criarAlvo();
    agendarProximoAlvo();
    intervaloTempo = setInterval(atualizarTempo, 1000);

    btnStart.style.display = "none";
};

// ------------------------------
// TERMINAR JOGO
// ------------------------------
function terminarJogo() {
    jogoAtivo = false;
    clearTimeout(intervaloAlvos);
    clearInterval(intervaloTempo);

    // mostrar popup
    const popup = document.getElementById("popupFinal");
    const msg = document.getElementById("popupMensagem");

    msg.textContent = `Fico te a dever ${pontos} beijinhos`;

    popup.style.display = "flex";

    // botão fechar
    document.getElementById("popupFechar").onclick = () => {
        popup.style.display = "none";
        btnStart.style.display = "inline-block";
    };
}

atualizar();