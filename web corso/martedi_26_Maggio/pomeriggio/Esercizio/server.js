const http = require("http");
const mioModulo = require("./moduli"); // Importa il modulo con la funzione mostraMessaggio()
const { constants } = require("fs");
const prompt = require("prompt-sync")();

// Chiedo quale file leggere
const scelta = prompt("Scrivi html oppure txt: ");



// Crea il server

const server = http.createServer((req, res) => {

    // CASO 1: L'utente scrive /txt nell'indirizzo
    if (scelta === "txt") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        
        const testoTxt = mioModulo.mostraMessaggio("file.txt"); // Legge e stampa nel terminale
        res.write(testoTxt); // Invia al browser
        res.end();
    } 
    
    // CASO 2: L'utente scrive /html nell'indirizzo
    else if (scelta === "html") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        const testoHtml = mioModulo.mostraMessaggio("server.html"); // Legge e stampa nel terminale
        res.write(testoHtml); // Invia al browser
        res.end();
    } 
    
    // CASO 3: L'utente va sulla pagina principale senza scegliere. Qui il server "chiede" cosa fare.
    else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        
        res.write("<h2>Scegli cosa vuoi visualizzare:</h2>");
        res.write("<p>👉 Clicca qui per il file <a href='/txt'>TESTO (TXT)</a></p>");
        res.write("<p>👉 Clicca qui per la pagina <a href='/html'>HTML</a></p>");
        res.end();
    }
});

// Avvia il server
server.listen(3000, () => {
    console.log("Server attivo su http://localhost:3000");
});