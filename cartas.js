const popup = document.getElementById("popupCarta");
const tituloCarta = document.getElementById("tituloCarta");
const textoCarta = document.getElementById("textoCarta");

const textos = {
    pedido: `
Nunca fiquei tão feliz por encontrar uma conta no instagram , e ela tem nome: __.Catia._.Santos.__ .
Ainda me lembro da sensação de te ter visto no Tahi , foi única. Lembro de como tudo ficou desfocado a volta , lembro de dizer ao meu amigo que tinha visto uma rapariga lindíssima,  lembro me também de não conseguir parar de olhar para ti, mesmo quando os nossos olhos se cruzavam eu continuava.
Eu sabia que depois dessa festa eu tinha que fazer de tudo para te encontrar , por fim passado dois dias lá te consegui mandar mensagem. Isto eu nunca te disse , mas no início cheguei até a ficar horas a pensar no que te responder , então quando foi a primeira mensagem , pensei durante o dia todo, porque sabia que não estava a falar com uma qualquer , mas sim com uma mulher. 
Não podia pedir melhor primeiro date , foi uma conexão absurda , quem é que falaria do que nós falamos e depois ficaria a a ouvir a minha playlist? Tudo isto de uma forma leve , sem pensar muito antes de falar, quando duas almas que se completam encontram-se não há dificuldade em se juntarem.
E foi mesmo isso que aconteceu , eu sabia que eras tu mesmo antes de te beijar , a minha alma sentiu e não errou. Desde o início que te desejo além do prazer, porque tu fazes o que mais ninguém fez.

A partir daí foi só alegrias , no parque da cidade em Penafiel , confesso que é um dos meus momentos preferidos quando fomos jogar as caçadinhas , porque fizeste me voltar a ser aquele menino ingénuo e feliz , uma autêntica criança,  essa mesma criança que sempre sonhou com o que estou a viver agora. E mesmo que não fosse só alegrias , eu estaria lá contigo , porque eu quero estar presente, seja onde for e a razão que for, porque tu fizeste em menos de um mês o que nunca ninguem fez.

Todas as tuas inseguranças são desafios para mim , quero fazer te ver como eu te vejo , uma menina mulher , uma princesa , uma raínha , uma pessoa esforçada,  dedicada e que sabe o que quer e dá sempre um jeito para isso. Todas as imperfeições que tu te colocas a ti mesma , eu consigo amar cada uma , eu amo todas as tuas perfeitas imperfeições e um dia acabarás por concordar comigo. O texto que me mandaste naquela noite foi um grande passo para mim , senti-o e vivi-o como se fosse eu na tua situação. Por isso mesmo um dos meus objetivos de vida é ajuda lo a superar porque não gosto de ver ninguém da minha família com pensamentos negativos principalmente sobre algo que já passou. Tu também ja me ajudaste tanto que eu acho que não tens noção. És tu que me acalmas , és tu que me motivas , és tu e serás sempre tu , porque tu fazes o que nunca ninguem fez.

Uma vez um certo poeta chamado Fyodor Dostoevkij disse: "Há algum tempo atrás nós nem nos conheciamos, eramos apenas duas almas a caminhar , invisíveis uma a outra.
Em um dia, sem avisos , encontramo-nos no mesmo caminho e eles dizem que certos encontros mudam vidas , este foi um deles.
É estranho eu sei. 
Mas quanto mais ouço sobre ti , mais me esqueço de como era a vida sem estares a meu lado.
Fazes me uma pessoa melhor e por isso eu estou grato.
Se amar é um erro, então deixa o mundo julgar-me e que me culpem pela eternidade."
Eu sei que não é facil estar longe um do outro e vai haver dias difíceis, mas eu quero te para sempre , e vou trabalhar nisso porque eu amo-te.
Eu amo conversar contigo antes de me deitar , amo ficar a espera de uma notificação tua , amo mandar te vídeos de como me sinto , amo mandar te mensagens carinhosas, amo recebe-las , amo cuidar de ti , amo quando ficas a adormecer no meu peito , amo sair contigo , amo quando falas de assuntos importantes,  amo debate-los , amo olhar te nos olhos , amo o teu cabelo , amo a tua forma de vestir , amo a tua personalidade , amo tudo em ti , da ponta dos dedos à raiz do cabelo , eu poderia ficar aqui a falar o quanto te amo , mas nao haveria folhas suficientes, tu completas me,   eu amo te e amo te imenso porque nunca ninguem fez o que tu tens feito.

Não escrevi estar carta em um dia , fui escrevendo , porque cada dia fui me apaixonando me mais.
E na minha cabeça não faz sentido dizer que te amo e que te quero e até mesmo chamar de amor , sem te poder chamar de namorada.
Quem tem o poder de definir se é em pouco tempo ou não? Cada um vive a sua realidade e quem dera muitos viver a minha. O amor não foi feito para depois , temos que amar enquanto da tempo. 
Já dizia uma paixão minha: why not? Life is short.
E eu quero passa-la contigo.
Só de pensar que já aconteceu tanta coisa,  mas que ainda vamos passar por muito mais , dá me muitas alegrias.
Eu quero te viver amor.
E eu não quero saber se fui o teu primeiro amor ou não. 
Eu quero ser o primeiro a mudar a forma de como vês o mundo, o primeiro a amar cada parte de ti, o primeiro a colocar os teus sonhos juntos dos meus, colocaria o mundo em chamas para te aquecer, a agradecer a Deus por te ter todos os dias , assim ele lembrara do teu nome para a eternidade, o primeiro a mostrar o que realmente o amor significa.
Eu vou sempre ser o teu maior fã e festejar contigo as tuas vitórias.
Nunca tenhas medo de falar sobre nada comigo , eu quero ser a tua alma gémea. 
Nesta geração tentaram colocar na cabeça das pessoas que para namorar é preciso conhecer?
Então qual seriana graça de namorar se não fosse para conhecer , entender , ajudar a pessoa?
Para isso passávamos logo para casamento.
Eu quero conhecer te cada vez mais todos os dias , amar te.
Tudo faz me lembrar de ti.
Cátia, eu amo-te.
    `,

    distantemente: `
Amor eu não quero que penses demais , eu sei o quão mau isso é.
Esta primeira semana de namoro é mesmo para provar que isto é para levar para a frente , vai ser a primeira vez que ficamos muito tempo separados e logo na primeira semana de namoro , isto não é para qualquer um.
E nós não somos 'qualquer um'. Nas situações em que não consegues responder, eu não levo a mal e nem fico triste , aliás fico feliz por saber que estás a passar um bom tempo. O único sentimento que prevalece são as saudades.
No tempo dos meus avós, também não havia: "será que está online" ou "será que demora a responder?" e é por isso que essas relações duram , porque tinha que haver confiança.
E eu confio em ti , confio em que te estejas a divertir e aproveitar tempo com a tua família.
Tudo isto só porque quero que saibas que o que sinto é apenas saudade, nada mais e eu tenho a certeza que esse sentimento irá gerar momentos muito bonitos no futuro.
Já estou mesmo a ver que os meus fins de dia são para assistir os teus stories maravilhosos feitos pela minha blogueira favorita.
Eu nunca vou me cansar de escrever este tipo de mensagens para ti my love.
Amo-te muitoooooo ❤️
    `
};


/* ============================
   ABRIR CARTA
============================ */
function abrirCarta(id) {
    if (!textos[id]) return;

    // título da carta
    tituloCarta.textContent =
        id === "pedido" ? "O pedido do para sempre" :
        id === "distantemente" ? "Distantemente perto" :
        "";

    // mostrar popup
    popup.style.display = "flex";

    requestAnimationFrame(() => {
        popup.classList.add("visivel");
    });

    digitarTexto(textoCarta, textos[id].trim());
}

/* ============================
   FECHAR CARTA
============================ */
function fecharCarta() {
    popup.classList.remove("visivel");

    setTimeout(() => {
        popup.style.display = "none";
        clearInterval(textoCarta._intervaloDigitacao);
    }, 350);
}

// fechar ao clicar fora do papel
popup.addEventListener("click", (e) => {
    if (e.target === popup) fecharCarta();
});

/* ============================
   ANIMAÇÃO DO ENVELOPE
============================ */
function abrirCartaAnimada(elemento, id) {
    if (elemento.classList.contains("aberta")) return;

    elemento.classList.add("aberta");

    setTimeout(() => {
        abrirCarta(id);
        elemento.classList.remove("aberta");
    }, 450);
}

/* ============================
   EFEITO DE DIGITAÇÃO
============================ */
function digitarTexto(elemento, textoCompleto) {
    elemento.textContent = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "|";

    let i = 0;
    const velocidade = 15;
    const caracteresPorTick = 6;
    const container = elemento.parentElement;

    clearInterval(elemento._intervaloDigitacao);

    elemento._intervaloDigitacao = setInterval(() => {
        i += caracteresPorTick;

        const estavaPertoDoFundo =
            container.scrollHeight - container.scrollTop - container.clientHeight < 80;

        elemento.textContent = textoCompleto.slice(0, i);
        elemento.appendChild(cursor);

        if (estavaPertoDoFundo) {
            container.scrollTop = container.scrollHeight;
        }

        if (i >= textoCompleto.length) {
            elemento.textContent = textoCompleto;
            clearInterval(elemento._intervaloDigitacao);
        }
    }, velocidade);
}

function voltarPagina() {
    window.location.href = "principal.html"; 
}
