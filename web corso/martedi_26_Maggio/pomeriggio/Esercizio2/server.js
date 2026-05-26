const http = require("http");
const fs = require("fs"); // Modulo fondamentale per leggere i file esterni
const prompt = require("prompt-sync")();

//chiediamo all'utente
const scelta = prompt("Scrivi a, b oppure c: ");


const server = http.createServer((req, res) => {
    
    // SCELTA a - Carica il file home.html
    if (scelta === "a") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const paginaHome = fs.readFileSync("./home.html", "utf-8"); // Legge il file esterno
        res.write(paginaHome);
        res.end();
    }
    
    // SCELTA b - Carica il file info.html
    else if (scelta === "b") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const paginaInfo = fs.readFileSync("./bryton.html", "utf-8"); // Legge il file esterno
        res.write(paginaInfo);
        res.end();
    }
    
    // SCELTA c - Carica il file calcolatrice.html
    else if (scelta === "c") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        const paginaCalcolatrice = fs.readFileSync("./calcolatrice.html", "utf-8"); // Legge il file esterno
        res.write(paginaCalcolatrice);
        res.end();
    }
    
  
    
    // Pagina di Error
    else {
        console.log("Pagina non trovata");
       
    }
});

// Avvia il server
server.listen(3000, () => {
    console.log("Server attivo su http://localhost:3000");
});