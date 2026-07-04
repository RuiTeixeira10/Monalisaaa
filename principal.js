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

function montarFaixa(elementoId, listaFotos) {
    const faixa = document.getElementById(elementoId);
    const listaCompleta = [...listaFotos, ...listaFotos]; // duplicada, para loop contínuo

    listaCompleta.forEach(src => {
        const card = document.createElement("div");
        card.className = "foto-carrossel";

        const img = document.createElement("img");
        img.src = src;

        card.appendChild(img);
        faixa.appendChild(card);
    });
}

function iniciarCarrosseis() {
    // faixa de cima: ordem normal
    montarFaixa("carrosselTopo", fotos);

    // faixa de baixo: ordem invertida — a última foto de cima é a primeira aqui
    montarFaixa("carrosselFundo", [...fotos].reverse());
}

iniciarCarrosseis();