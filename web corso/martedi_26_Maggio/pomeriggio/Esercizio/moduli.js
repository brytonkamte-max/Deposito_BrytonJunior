 const fs = require("fs");
 const prompt = require("prompt-sync")();







//funzione mostraMessaggio

function mostraMessaggio(nomeFile) {

   /// Legge il file in modo sincrono (più semplice) con codifica UTF-8
    const contenuto = fs.readFileSync(nomeFile, "utf8");
    
    // Mostra il contenuto nel terminale tramite console.log() come richiesto
   
    console.log(contenuto);
    
    
    return contenuto; // Restituisce il testo per poterlo usare anche nel server



    

}


// Esporta la funzione

module.exports = {

    mostraMessaggio

};