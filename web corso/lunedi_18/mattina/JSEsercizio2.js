const prompt = require('prompt-sync')();
let x = prompt("Inserisci il primo ruolo fra (player,moderator,admin ) :");

switch (x){
    case "player":
        console.log("Benvenuto Giocatore");
    break;
    case "moderator":
        console.log("Benvenuto moderator");
    break;
    case "admin":
        console.log("Benvenuto amministratore");
    break;
    default:
        console.log("non valido")
}

let y = prompt("Inserisci il secondo ruolo fra (player,moderator,admin ) :");

switch (y){
    case "player":
        console.log("Benvenuto Giocatore");
    break;
    case "moderator":
        console.log("Benvenuto moderator");
    break;
    case "admin":
        console.log("Benvenuto amministratore");
    break;
    default:
        console.log("non valido")
}

let z = prompt("Inserisci il tuo terzo ruolo fra (player,moderator,admin ) :");

switch (z){
    case "player":
        console.log("Benvenuto Giocatore");
    break;
    case "moderator":
        console.log("Benvenuto moderator");
    break;
    case "admin":
        console.log("Benvenuto amministratore");
    break;
    default:
        console.log("non valido")
}



console.log("Ruoli scelti:"+ x +" " + y +" " +z);

