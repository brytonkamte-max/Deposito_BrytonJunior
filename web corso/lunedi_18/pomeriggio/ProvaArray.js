let numeri = [1, 2, 3];

// Accesso agli elementi
console.log(numeri[0]); // 1

// Aggiunta elementi
numeri.push(4);        // aggiunge in fondo -> [1,2,3,4]
numeri.unshift(0);     // aggiunge all'inizio -> [0,1,2,3,4]


// Rimozione elementi
numeri.pop();          // rimuove ultimo -> [0,1,2,3]
numeri.shift();        // rimuove primo -> [1,2,3]


// Iterazione
numeri.forEach(n => console.log(n));

// Trasformazione
let doppi = numeri.map(n => n * 2); // [2,4,6]


// Filtro
let maggioriDiUno = numeri.filter(n => n > 1); // [2,3] per ogni n dove 


// Ricerca
let trovato = numeri.find(n => n === 2); // 2


// Lunghezza
console.log(numeri.length); // 3