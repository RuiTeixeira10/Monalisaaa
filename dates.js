// dates fixos, já sugeridos por ti — edita/apaga como quiseres
const datesFixos = [
    { id: "fixo1", titulo: "Jantar à luz das velas em casa", nota: "", concluido: false },
    { id: "fixo2", titulo: "Piquenique num parque", nota: "", concluido: false },
    { id: "fixo3", titulo: "Cinema com balde de pipocas gigante", nota: "", concluido: false },
    { id: "fixo4", titulo: "Passeio à beira-mar ao pôr do sol", nota: "", concluido: false },
    { id: "fixo5", titulo: "Sessão de fotos só nós os dois", nota: "", concluido: false },
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