let a =10;
let b = 5;

// Operatori aritmetici
let somma =a +b; // 15
let differenza =a-b; // 5
let prodotto =a*b; // 50
let divisione =a/b; // 2

// Operatori di confronto
let uguale = (a == "10"); // true (coercizione) // == confronta solo il valore, non il tipo
let strettamenteUguale = (a === "10"); // false (tipo diverso)// === confronta sia il valore che il tipo
let maggiore = (a > b); // true

// Operatori logici
// && (AND) serve per verificare se entrambe le condizioni sono vere, 
// || (OR) serve per verificare se almeno una delle condizioni è vera, 
// ! (NOT) serve per negare una condizione.
let condizione =(a > 5) && (b < 10); // true 
let alternativa =(a < 5) || (b < 10); // true
let negazione = !(a > b); // false

// Operatori di assegnazione
let x = 10;
x += 5; // x =x + 5 -> 15

console.log(somma,uguale,strettamenteUguale,condizione);