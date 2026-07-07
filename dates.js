// dates fixos, já sugeridos por ti — edita/apaga como quiseres
const datesFixos = [
    { id: "fixo1", titulo: "Ir á praia ver o pôr do sol", nota: "", concluido: false },
    { id: "fixo2", titulo: "Ir ao zoo", nota: "", concluido: false },
    { id: "fixo3", titulo: "Escapadinhas (várias)", nota: "", concluido: false },
    { id: "fixo4", titulo: "Montar legos grandes", nota: "", concluido: false },
    { id: "fixo5", titulo: "Picnic", nota: "", concluido: false },
    { id: "fixo6", titulo: "Assitir a jogos de Portugal", nota: "", concluido: true },
    { id: "fixo7", titulo: "Picnic com pinturas", nota: "", concluido: false },
    { id: "fixo8", titulo: "Parque aquático", nota: "", concluido: false },
    { id: "fixo9", titulo: "Escape room", nota: "", concluido: false },
    { id: "fixo10", titulo: "Padel", nota: "", concluido: false },
    { id: "fixo11", titulo: "Tomar conta do Salvador", nota: "", concluido: false },
    { id: "fixo12", titulo: "Monte de São Domingos", nota: "", concluido: false },
    { id: "fixo13", titulo: "Passear pela Marginal", nota: "", concluido: false },
    { id: "fixo14", titulo: "Passear pelo Porto", nota: "", concluido: false },
    { id: "fixo15", titulo: "Ir ao Dragão", nota: "", concluido: false },
    { id: "fixo16", titulo: "Ir ao cinema", nota: "", concluido: false },
    { id: "fixo17", titulo: "Sushi date", nota: "", concluido: true },
    { id: "fixo18", titulo: "Festa da terrinha versão namorado", nota: "", concluido: true },
    { id: "fixo19", titulo: "Festa da terrinha versão namorada", nota: "", concluido: false },
    { id: "fixo20", titulo: "Ir ao shopping", nota: "", concluido: false },
    { id: "fixo21", titulo: "Ir a Castelo de Paiva", nota: "", concluido: true },
    { id: "fixo22", titulo: "Ir a Marco de Canaveses", nota: "", concluido: false },
    { id: "fixo23", titulo: "Karaoke no carro", nota: "", concluido: true },
    { id: "fixo24", titulo: "Ir a um sunset (festa)", nota: "", concluido: false },
    { id: "fixo25", titulo: "Cozinhar juntos", nota: "", concluido: false },
    { id: "fixo26", titulo: "Arcade (tipo setas)", nota: "", concluido: false},
    { id: "fixo27", titulo: "Jogar Mario Kart", nota: "", concluido: true },
];

function carregarDates() {
    const guardados = JSON.parse(localStorage.getItem("datesLista") || "null");
    return guardados || datesFixos;
}

function guardarDatesStorage(lista) {
    localStorage.setItem("datesLista", JSON.stringify(lista));
}

let dates = carregarDates();

function renderizarDates() {
    const lista = document.getElementById("listaDates");
    lista.innerHTML = "";

    dates.forEach(date => {
        const item = document.createElement("div");
        item.className = "date-item" + (date.concluido ? " concluido" : "");

        const checkbox = document.createElement("div");
        checkbox.className = "date-checkbox";
        checkbox.innerHTML = `<span class="check-icon">✓</span>`;
        checkbox.onclick = () => alternarConcluido(date.id);

        const conteudo = document.createElement("div");
        conteudo.className = "date-conteudo";

        const titulo = document.createElement("div");
        titulo.className = "date-titulo";
        titulo.textContent = date.titulo;
        conteudo.appendChild(titulo);

        if (date.nota) {
            const nota = document.createElement("div");
            nota.className = "date-nota";
            nota.textContent = date.nota;
            conteudo.appendChild(nota);
        }

        const btnApagar = document.createElement("button");
        btnApagar.className = "btn-apagar-date";
        btnApagar.innerHTML = "✕";
        btnApagar.onclick = (e) => {
            e.stopPropagation();
            apagarDate(date.id);
        };

        item.appendChild(checkbox);
        item.appendChild(conteudo);
        item.appendChild(btnApagar);
        lista.appendChild(item);
    });

    atualizarProgresso();
}

function atualizarProgresso() {
    const total = dates.length;
    const feitos = dates.filter(d => d.concluido).length;
    const percentagem = total === 0 ? 0 : Math.round((feitos / total) * 100);

    document.getElementById("progressoFill").style.width = percentagem + "%";
    document.getElementById("progressoTexto").textContent =
        `${feitos} de ${total} dates realizados 💕`;
}

function alternarConcluido(id) {
    const date = dates.find(d => d.id === id);
    if (date) date.concluido = !date.concluido;
    guardarDatesStorage(dates);
    renderizarDates();
}

function apagarDate(id) {
    dates = dates.filter(d => d.id !== id);
    guardarDatesStorage(dates);
    renderizarDates();
}

// ===== FORMULÁRIO DE CRIAÇÃO =====

function abrirFormularioDate() {
    document.getElementById("inputDate").value = "";
    document.getElementById("inputNotaDate").value = "";
    document.getElementById("popupFormularioDate").style.display = "flex";
}

function fecharFormularioDate() {
    document.getElementById("popupFormularioDate").style.display = "none";
}

document.getElementById("popupFormularioDate").addEventListener("click", (e) => {
    if (e.target.id === "popupFormularioDate") fecharFormularioDate();
});

function guardarDate() {
    const titulo = document.getElementById("inputDate").value.trim();
    const nota = document.getElementById("inputNotaDate").value.trim();

    if (!titulo) {
        alert("Escreve pelo menos o que querem fazer 💌");
        return;
    }

    dates.push({
        id: "date_" + Date.now(),
        titulo,
        nota,
        concluido: false
    });

    guardarDatesStorage(dates);
    fecharFormularioDate();
    renderizarDates();
}

function voltarPagina() {
    window.location.href = "principal.html";
}

// ===== INÍCIO =====

renderizarDates();