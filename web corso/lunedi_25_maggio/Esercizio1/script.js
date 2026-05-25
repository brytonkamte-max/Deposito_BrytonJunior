// Selezione elementi dal DOM
const temaButton = document.getElementById("temaButton");
const salvaButton = document.getElementById("salvaButton");
const form = document.getElementById("form");
const risultato = document.getElementById("risultato");
const temaTesto = document.getElementById("temaTesto");
const body = document.body;
const resetButton = document.getElementById("resetButton");

// Funzione per mostrare i dati del giocatore se presenti nel Local Storage
function mostraDatiGiocatore() {
    const nomeSalvato = localStorage.getItem("nome");
    const giocoSalvato = localStorage.getItem("gioco");
    const piattaformaSalvato = localStorage.getItem("piattaforma");

    // Se esiste almeno il nome, crea l'elemento nella lista
    if (nomeSalvato) {
        // Rimuove un eventuale li già presente per non duplicarlo
        const vecchioLi = risultato.querySelector("li");
        if (vecchioLi) vecchioLi.remove();

        let nomi = "Nome: " + nomeSalvato + "<br>Gioco: " + giocoSalvato + "<br>Piattaforma: " + piattaformaSalvato;
        let nuovoElemento = document.createElement("li");
        nuovoElemento.innerHTML = nomi;
        risultato.appendChild(nuovoElemento);
    }
}

// Gestione invio form e salvataggio dati
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Blocca il refresh della pagina

    const nome = document.getElementById("nome").value;
    const gioco = document.getElementById("gioco").value;
    const piattaforma = document.getElementById("piattaforma").value;

    // Salvataggio nel Local Storage
    localStorage.setItem("nome", nome);
    localStorage.setItem("gioco", gioco);
    localStorage.setItem("piattaforma", piattaforma);

    // Mostra i dati appena salvati
    mostraDatiGiocatore();

    form.reset(); // Svuota i campi del form
});

// Reset dei dati utente
resetButton.addEventListener("click", function () {
    localStorage.removeItem("nome");
    localStorage.removeItem("gioco");
    localStorage.removeItem("piattaforma");
    risultato.innerHTML = '<p id="temaTesto"></p>'; // Svuota la lista lasciando il testo del tema
    aggiornaTesti();
});

// Controllo del tema salvato al caricamento
const temaSalvato = localStorage.getItem("tema");
if (temaSalvato === "dark") {
    body.classList.add("dark");
}

// Gestione click per il cambio tema
temaButton.addEventListener("click", function () {
    body.classList.toggle("dark");

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

// Esecuzione funzioni al caricamento della pagina (evita che i dati spariscano al refresh)
aggiornaTesti();
mostraDatiGiocatore();