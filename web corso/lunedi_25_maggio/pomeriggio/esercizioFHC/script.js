
// 1. PAGINA INSERIMENTO (index.html)
const formGiocattolo = document.getElementById("formGiocattolo");

// Messo il controllo "if" per evitare che la pagina Elenco vada in errore
if (formGiocattolo) { 
    formGiocattolo.addEventListener("submit", function(event) {
        event.preventDefault(); // Blocca il caricamento della pagina

        // Prende i dati inseriti dall'utente nel form
        const nuovoGiocattolo = {
            nome: document.getElementById("nome").value,
            categoria: document.getElementById("categoria").value,
            prezzo: parseFloat(document.getElementById("prezzo").value),
            eta: parseInt(document.getElementById("eta").value),
            disponibilita: document.getElementById("disponibilita").value
        };

        // CORRETTO: Ora la chiave è "databaseGiocattoli" sia in lettura che in scrittura!
        let datiSalvati = localStorage.getItem("databaseGiocattoli");
        let lista = datiSalvati ? JSON.parse(datiSalvati) : [];

        // Aggiunge il nuovo giocattolo alla lista
        lista.push(nuovoGiocattolo);

        // Trasforma tutta la lista in testo JSON e la salva nel browser
        localStorage.setItem("databaseGiocattoli", JSON.stringify(lista));

        alert("Giocattolo salvato con successo!");
        formGiocattolo.reset(); // Svuota i campi del form
    });
}


// 2. PAGINA ELENCO (elenco.html)

const contenitoreCard = document.getElementById("contenitoreCard");

if (contenitoreCard) {
    // Prende la stringa JSON dal browser e la trasforma in oggetti leggibili
    const datiRaw = localStorage.getItem("databaseGiocattoli");
    const giocattoli = datiRaw ? JSON.parse(datiRaw) : [];

    if (giocattoli.length === 0) {
        contenitoreCard.innerHTML = "<p>Nessun giocattolo presente in archivio.</p>";
    } else {
        // Cicla ogni giocattolo e crea la sua card visiva
        giocattoli.forEach(function(articolo) {
            let card = document.createElement("div");
            card.className = "card-prodotto";
            
            // Inserisce i testi dentro la card
            card.innerHTML = `
                <h3>🧸 ${articolo.nome}</h3>
                <p><strong>Categoria:</strong> ${articolo.categoria}</p>
                <p><strong>Età:</strong> ${articolo.eta}+ anni</p>
                <p><strong>Prezzo:</strong> ${articolo.prezzo.toFixed(2)} €</p>
                <p><strong>Stato:</strong> ${articolo.disponibilita === 'disponibile' ? '🟢 Disponibile' : '🔴 Esaurito'}</p>
            `;
            contenitoreCard.appendChild(card);
        });
    }
}

// ==========================================
// CAMBIO TEMA E PULSANTE RESET (Funzionamento globale)
// ==========================================
const temaButton = document.getElementById("temaButton");
const temaTesto = document.getElementById("temaTesto");
const resetButton = document.getElementById("resetButton");

// Controlla se c'era un tema scuro salvato all'avvio della pagina
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// Gestisce il click sul pulsante "Cambia Tema"
if (temaButton) {
    temaButton.addEventListener("click", function() {
        document.body.classList.toggle("dark"); // Accende/Spegne la classe .dark
        
        // Salva la scelta nel browser per le altre pagine
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        } else {
            localStorage.setItem("tema", "light");
        }
    });
}

// Gestisce il click sul pulsante "Svuota Archivio"
if (resetButton) {
    resetButton.addEventListener("click", function() {
        localStorage.removeItem("databaseGiocattoli"); // Cancella solo i prodotti
        alert("Archivio ripulito!");
        location.reload(); // Ricarica la pagina per azzerare i campi
    });
}