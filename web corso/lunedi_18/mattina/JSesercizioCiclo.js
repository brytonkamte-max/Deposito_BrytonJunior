

// Modulo per input da console

const prompt = require("prompt-sync")();

//dichiarazione
 let pari=0;
let dispari=0

  // Input utente
    let N  = parseInt(prompt("Inserisci un numero intero positivo : "));
    if(N<=0 ){
        console.log("Errore");
    }
    else{

// Ciclo
for(let i=1;i<=N;i++){
    console.log("i");
    if(i % 2===0){  //controlla se il resto della divisione per 2 è 0 
        pari++;
    }
    else {
        dispari++;
    }
   
}
    }

console.log("Numeri pari:"+ pari);
console.log("Numeri dispari:"+ dispari);



