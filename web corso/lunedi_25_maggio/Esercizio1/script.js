// Selezione elementi dal DOM
const temaButton = document.getElementById("temaButton");
const salvaButton = document.getElementById("salvaButton");
const form = document.getElementById("form");
const risultato = document.getElementById("risultato");
const temaTesto = document.getElementById("temaTesto");
const body = document.body;
const resetButton = document.getElementById("resetButton");

// Gestione invio form e salvataggio dati
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Blocca il refresh della pagina

    // Recupero dati dagli input
    const nome = document.getElementById("nome").value;
    const gioco = document.getElementById("gioco").value;
    const piattaforma = document.getElementById("piattaforma").value;

    // Salvataggio nel Local Storage
    localStorage.setItem("nome", nome);
    localStorage.setItem("gioco", gioco);
    localStorage.setItem("piattaforma", piattaforma);

    // Recupero dati salvati
    const nomeSalvato = localStorage.getItem("nome");
    const giocoSalvato = localStorage.getItem("gioco");
    const piattaformaSalvato = localStorage.getItem("piattaforma");

    // Costruzione della stringa HTML
    let nomi = "Nome: " + nomeSalvato + "<br>Gioco: " + giocoSalvato + "<br>Piattaforma: " + piattaformaSalvato;

    // Creazione e inserimento del nuovo elemento nella lista
    let nuovoElemento = document.createElement("li");
    nuovoElemento.innerHTML = nomi;
    risultato.appendChild(nuovoElemento);

    form.reset(); // Svuota i campi del form
});

// Reset dei dati utente (mantiene la preferenza del tema)
resetButton.addEventListener("click", function () {
    localStorage.removeItem("nome");
    localStorage.removeItem("gioco");
    localStorage.removeItem("piattaforma");
    risultato.innerHTML = '<p id="temaTesto"></p>'; // Ripristina l'elemento testo del tema
    aggiornaTesti();
});

// Controllo del tema salvato al caricamento della pagina
const temaSalvato = localStorage.getItem("tema");
if (temaSalvato === "dark") {
    body.classList.add("dark");
}

// Gestione click per il cambio tema (Toggle classe .dark)
temaButton.addEventListener("click", function () {
    body.classList.toggle("dark");

    // Persistenza dello stato del tema
    if (body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
    } else {
        localStorage.setItem("tema", "light");
    }

    aggiornaTesti();
});

// Funzione per mostrare lo stato del tema a schermo
function aggiornaTesti() {
    const attuale = localStorage.getItem("tema") || "light";
    const elementoTesto = document.getElementById("temaTesto");
    if (elementoTesto) {
        elementoTesto.innerText = "Tema salvato: " + attuale;
    }
}

// Esecuzione al caricamento
aggiornaTesti();