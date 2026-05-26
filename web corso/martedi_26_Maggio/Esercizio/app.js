// Importa i moduli

const GestioneTest = require("./GestioneTesto");
const prompt = require("prompt-sync")();



//chiedere all'utente 
const testo = prompt("Inserisci un testo:");
const lettera = prompt("Inserisci una lettera:");

//utilizzare  le funzioni del modulo e stampa su console
console.log("Testo originale: " + testo);
console.log("Maiuscolo: " + GestioneTest.maiuscolo(testo));
console.log("Conteggio: " + GestioneTest.contaCaratteri(testo));
console.log("Contiene '" + lettera + "': " + GestioneTest.contieneLettera(testo, lettera));

//integrando il server
