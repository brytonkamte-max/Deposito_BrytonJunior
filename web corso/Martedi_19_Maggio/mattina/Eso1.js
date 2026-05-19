//il prompt
const prompt = require('prompt-sync')();

// scriviamo la function che verra 
function addizione(a,b){
    return a+b;
}
//sottrazione
function sottrazione(a,b){
    return a-b;
}
//moltiplicazione
function moltiplicazione(a,b){
    return a*b;
}
//divisione
function divisione(a,b){
    return a/b;
}
//dichiarazione
let valore=true;
let Array=[];

while(valore){

   //dichiarazione 
let y;
let z;
let risultato;

//input
 let x = parseInt( prompt("Inserisci un numero: ( 1-addizione  2-sottrazione  3-moltiplicazione  4-divisione 5-STOP)  :"));

 //gestione Menu dal switch
    switch(x){

        //addizione
        case 1:
             y = parseInt( prompt("Inserisci il primo numero: "));
            z = parseInt( prompt("Inserisci il secondo numero: "));
            risultato=addizione(y,z);
            console.log("il risultato è : "+ risultato);
            Array.push(risultato);
            
            break;
        //sottrazione
         case 2:
             y = parseInt( prompt("Inserisci il primo numero: "));
            z = parseInt( prompt("Inserisci il secondo numero: "));
            risultato=sottrazione(y,z);
            console.log("il risultato è : "+ risultato);
            Array.push(risultato);
            
            break;
        //moltiplicazione
         case 3:
             y = parseInt( prompt("Inserisci il primo numero: "));
            z = parseInt( prompt("Inserisci il secondo numero: "));
            risultato=moltiplicazione(y,z);
            console.log("il risultato è : "+ risultato);
            Array.push(risultato);
            
            break;
        //divisione
         case 4:
             y = parseInt( prompt("Inserisci il primo numero: "));
            z = parseInt( prompt("Inserisci il secondo numero: "));
            risultato=divisione(y,z);
            console.log("il risultato è : "+ risultato);
            Array.push(risultato);
            
            break;

        //per uscire dal ciclo
        case 5:
            console.log("Arriverderci!");
            valore=false;
            break;
        default:
            console.log("non valido!");
    
            
        
    }
    console.log("L'Array : "+ Array);
    

    


}





