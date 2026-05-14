// console.log(a); // Errore: non accessibile prima della dichiarazione

let a = 10;


// Con var (comportamento diverso)

console.log(b); // undefined (non errore)

var b = 20;
// var permette di dichiarare variabili che sono "hoistate" (sollevate) all'inizio del loro contesto di esecuzione, ma non inizializzate. 
// Quindi, quando si tenta di accedere a b prima della dichiarazione, si ottiene undefined invece di un errore.