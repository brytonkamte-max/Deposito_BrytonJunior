//il prompt
const prompt = require('prompt-sync')();
let x = prompt("Inserisci il tuo piatto(pasta,rizo ) :");

//il switch
switch(x){
    case "pasta":
         console.log("Hai scelto la pasta.");

        x1 = prompt("Aggiungi un condimento: ");
        x2 = prompt("Aggiungi un altro condimento: ");

        console.log("Ordine finale:");
        console.log("Pasta con " + x1 + " e " + x2);
        break;
    case "rizo":
         console.log("Hai scelto il rizo.");

        x1 = prompt("Aggiungi un condimento: ");
        x2 = prompt("Aggiungi un altro condimento: ");

        console.log("Ordine finale:");
        console.log("Pasta con " + x1 + " e " + x2);
        break;

        default:
            console.log("Scelta non valida");

}
