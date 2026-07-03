const calendarioGrid = document.getElementById("calendarioGrid");
const mesAno = document.getElementById("mesAno");
const diasEspeciais = {
    "2026-05-24": "Festa no Tahi",
    "2026-05-27": "Primeira mensagem",
    "2026-05-31": "Primeiro date",
    "2026-06-01": "Primeiro beijo",
    "2026-06-03": "Primeiras flores",
    "2026-06-06": "Primeira vêz em Paiva",
    "2026-06-10": "Primeiro Sushi",
    "2026-06-12": "Amo-te",
    "2026-06-13": "Melhores 8 horas",
    "2026-06-17": "Primeiro jogo juntos",
    "2026-06-21": "Primeira vez a ser convidado",
    "2026-06-23": "São João",
    "2026-06-27": "O nosso dia ❤️",
    "2026-06-29": "Primeira vez com o Salvador"
};
const descricoesEspeciais = {
    "2026-05-24": "Fui á procura de um artista falso e encontrei um amor verdadeiro.",
    "2026-05-27": "Perdido nas nossas conversas , encontrei o que sempre procurei.",
    "2026-05-31": "A fome de te ter era tanta que jantei duas vezes ahahah",
    "2026-06-01": "Uma sensação inexplicavel, nunca me tinha perdido nos olhos de alguém como me perdi nos teus, quando te beijei descobri que o paraíso é real.",
    "2026-06-03": "Tinha a certeza de que algo estaria a florescer.",
    "2026-06-06": "Confiaste em mim e visitas te a minha terra , essa mesma vila que nunca esteve tão bela como nesse dia. ",
    "2026-06-10": "Senti-me encantado , estava perfeita , maravilhosa e gostosa , já o sushi até estava bom.",
    "2026-06-12": "A minha felicidade a ir embora é algo que só conseguiria transmitir através de uma gravação, absurdamente apaixonado, a mulher da minha vida a dizer-me 'amo-te' , uau.",
    "2026-06-13": "Como amei passar 8 horas a ver-te sorrir , confusa , admirada, pensativa, cansada, trabalhadora, exemplar, de qualquer forma amei te ver e passaria muitas mais horas.",
    "2026-06-17": " 'Comeeeeeeeça o mundial , Portugal toca na bola pela primeira vez neste campeonato do mundo de 2026' , mal sabem eles que antes de começar já me sentia vencedor.",
    "2026-06-21": "Quando me convidaste pela primeira vez, não consegui esconder o sorriso para a minha família toda.",
    "2026-06-23": "Ver o fogo de artifício contigo foi das melhores sensações, estar agarrado a ti enquanto o mundo festejava o primeiro mês desde o Tahi , foi mágico.",
    "2026-06-27": "Já tinha certezas de tudo, ansiava por uma data , um orgulho que não cabe no peito de poder dizer que sou teu namorado , amo-te imenso namorada.",
    "2026-06-29": "Primeira vez com um dos amores do meu amor , senti-me casa , o desafio de o tentar fazer rir acabou por se tornar uma alegria para mim, amei estar com ele e com o amor da minha vida ao lado , foi um momento único."
};



let dataAtual = new Date();

function gerarCalendario() {
    calendarioGrid.innerHTML = "";

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    const primeiroDia = new Date(ano, mes, 1).getDay();
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();

    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    mesAno.textContent = `${nomesMeses[mes]} ${ano}`;

    // espaços vazios antes do dia 1
    for (let i = 0; i < primeiroDia; i++) {
        const vazio = document.createElement("div");
        calendarioGrid.appendChild(vazio);
    }

    // dias do mês
    for (let dia = 1; dia <= diasNoMes; dia++) {
        const diaEl = document.createElement("div");
        diaEl.className = "dia";
        diaEl.textContent = dia;

        const chave = `${ano}-${String(mes+1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;

if (diasEspeciais[chave]) {
    diaEl.classList.add("dia-especial");
    diaEl.onclick = () => abrirNotaEspecial(chave);
} else {
    diaEl.classList.add("dia-normal");
}


        calendarioGrid.appendChild(diaEl);
    }
}

document.getElementById("prevMes").onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    gerarCalendario();
};

document.getElementById("nextMes").onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    gerarCalendario();
};

function abrirNota(dia, mes, ano) {
    alert(`Dia ${dia}/${mes+1}/${ano} — aqui vamos pôr a nota ❤️`);
}

gerarCalendario();

function abrirNota(dia, mes, ano) {
    const nomesMeses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const titulo = document.getElementById("tituloData");
    const popup = document.getElementById("popupData");

    titulo.textContent = `${dia} de ${nomesMeses[mes]} de ${ano}`;

    popup.style.display = "flex";
}

function fecharPopupData() {
    document.getElementById("popupData").style.display = "none";
}

document.getElementById("popupData").addEventListener("click", (e) => {
    if (e.target.id === "popupData") fecharPopupData();
});

function abrirNotaEspecial(chave) {
    const popup = document.getElementById("popupData");
    const titulo = document.getElementById("tituloData");
    const descricao = document.getElementById("descricaoData");

    titulo.textContent = diasEspeciais[chave];
    descricao.textContent = descricoesEspeciais[chave] || "";

    popup.style.display = "flex";
}

function voltarPagina() {
    window.location.href = "principal.html"; 
}


