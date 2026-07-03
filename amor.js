const btnFoge = document.getElementById("btnFoge");
const card = document.querySelector(".card");
const popupTopo = document.getElementById("popupTopo");

// mensagens aleatórias
const mensagens = [
    "Nem penses em dizer isso",
    "Não adianta clicares mais",
    "Podes estar aqui o tempo que quiseres , porque nao vou deixar isso avançar",
    "Eu é que te amo mais lalalala",
    "Acredita que se me amares o mesmo que te amo , não há valor possível para demonstrar",
    "You are my fiiiiireeeeee"
];

// função para mostrar o pop-up
function mostrarPopup() {
    const msg = mensagens[Math.floor(Math.random() * mensagens.length)];
    popupTopo.textContent = msg;

    popupTopo.classList.add("show");

    setTimeout(() => {
        popupTopo.classList.remove("show");
    }, 3000);
}

btnFoge.addEventListener("click", () => {

    // mostrar pop-up
    mostrarPopup();

    btnFoge.classList.add("foge");
    btnFoge.style.opacity = "0";

    setTimeout(() => {
        const cardRect = card.getBoundingClientRect();
        const btnWidth = btnFoge.offsetWidth;
        const btnHeight = btnFoge.offsetHeight;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        let randomX, randomY;

        const borda = Math.floor(Math.random() * 4); // 0=topo, 1=fundo, 2=esquerda, 3=direita

        switch (borda) {
            case 0: // topo
                randomX = cardRect.left + (Math.random() * (cardRect.width - btnWidth));
                randomY = cardRect.top - btnHeight - 10;
                break;

            case 1: // fundo
                randomX = cardRect.left + (Math.random() * (cardRect.width - btnWidth));
                randomY = cardRect.bottom + 10;
                break;

            case 2: // esquerda
                randomX = cardRect.left - btnWidth - 10;
                randomY = cardRect.top + (Math.random() * (cardRect.height - btnHeight));
                break;

            case 3: // direita
                randomX = cardRect.right + 10;
                randomY = cardRect.top + (Math.random() * (cardRect.height - btnHeight));
                break;
        }

        // limitar às margens do ecrã
        randomX = Math.max(10, Math.min(randomX, screenWidth - btnWidth - 10));
        randomY = Math.max(10, Math.min(randomY, screenHeight - btnHeight - 10));

        btnFoge.style.left = randomX + "px";
        btnFoge.style.top = randomY + "px";
        btnFoge.style.opacity = "1";
    }, 150);
});

document.querySelector(".btn1").addEventListener("click", () => {
    window.location.href = "principal.html";
});
