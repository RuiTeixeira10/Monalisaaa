function irPara(pagina) {
    window.location.href = pagina;
}

const fotos = [
    "imagens/foto1.jpeg",
    "imagens/foto2.jpeg",
    "imagens/foto3.jpeg",
    "imagens/foto4.jpeg",
    "imagens/foto5.jpeg",
];

function criarFotoAleatoria() {
    const bg = document.getElementById("bg-fotos");
    const container = document.querySelector(".container");

    const img = document.createElement("img");
    img.className = "bg-foto";
    img.src = escolherFotoAleatoria();

    const larguraFoto = 250;
    const alturaFoto = 250;
    const margemSeguranca = 20; // espaço extra à volta do container, para não ficar colado

    const maxLeft = window.innerWidth - larguraFoto - 10;
    const maxTop = window.innerHeight - alturaFoto - 10;

    const containerRect = container.getBoundingClientRect();

    let posX, posY, tentativas = 0;
    const maxTentativas = 30;

    do {
        posX = Math.max(10, Math.random() * maxLeft);
        posY = Math.max(10, Math.random() * maxTop);
        tentativas++;
    } while (
        sobrepoeContainer(posX, posY, larguraFoto, alturaFoto, containerRect, margemSeguranca) &&
        tentativas < maxTentativas
    );

    // se não encontrou posição livre em 30 tentativas, não mostra esta foto
    if (tentativas >= maxTentativas) return;

    img.style.left = posX + "px";
    img.style.top = posY + "px";

    bg.appendChild(img);

    setTimeout(() => {
        img.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        img.style.opacity = 0;
        setTimeout(() => img.remove(), 2000);
    }, 5000);
}

// verifica se o retângulo da foto colide com o retângulo do container
function sobrepoeContainer(x, y, largura, altura, containerRect, margem) {
    const fotoLeft = x;
    const fotoRight = x + largura;
    const fotoTop = y;
    const fotoBottom = y + altura;

    const contLeft = containerRect.left - margem;
    const contRight = containerRect.right + margem;
    const contTop = containerRect.top - margem;
    const contBottom = containerRect.bottom + margem;

    return !(
        fotoRight < contLeft ||
        fotoLeft > contRight ||
        fotoBottom < contTop ||
        fotoTop > contBottom
    );
}

setInterval(criarFotoAleatoria, 3000);

let ultimaFotoIndex = -1;

function escolherFotoAleatoria() {
    let indice;
    do {
        indice = Math.floor(Math.random() * fotos.length);
    } while (indice === ultimaFotoIndex && fotos.length > 1);

    ultimaFotoIndex = indice;
    return fotos[indice];
}