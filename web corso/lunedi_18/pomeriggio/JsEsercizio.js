//il prompt
const prompt = require('prompt-sync')();

//dichiarazione
let x;
let Array=[];

do{
 x = parseInt( prompt("Inserisci un numero:"));
 if(x<0){
    console.log("numero non valido");
    x=0;
 }
 else{
 
    //inserimento dentro l'array
 Array.push(x);
 //output Tutti i numeri inseriti
 }
 }while(!(x===0));


    //separazione in due Array (parri e dispari)
    let ArrayParri=[];
    let ArrayDispari=[];
for(let valore of Array){
    if(valore % 2 ===0){ //vericare se il resto della divione per 2 uguale 0
        ArrayParri.push(valore);
    }
    else{
        ArrayDispari.push(valore);
    }

}


//  Calcoliamo la somma totale correttamente
let somma = 0;
for (let valore of Array) {
    somma += valore; // Aggiunge ogni valore alla variabile somma
}
//il valore massimo e minimo

let max=0
let min=10;
for ( let valore of Array){
    if(valore<min)
        min=valore;
    if(valore>max)
        max=valore;


}

//output
//tutti i numeri inseriti
console.log("numeri inseriti")
for(let valore of Array){
    
    console.log(valore);
}

//L?array dei numeri pari
console.log("numeri pari")
for (let valore of ArrayParri){

    console.log(valore);
}
console.log("numeri dispari");
// numeri dispari
for(let valore of ArrayDispari){
    
    console.log(valore);
}

// somma totale
console.log("La somma totate è "+ somma);

//max e min
console.log("il massimo è "+max+ "e il minimo è "+min );
