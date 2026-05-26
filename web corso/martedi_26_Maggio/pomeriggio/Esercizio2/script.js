// Collegamento agli elementi della pagina
const input1 = document.getElementById("numero1");
const input2 = document.getElementById("numero2");
const risultato = document.getElementById("risultato");

// La funzione cattura i valori AGGIORNATI e calcola l'operazione corretta
function calcola(operatore) {
    let x = parseFloat(input1.value);
    let y = parseFloat(input2.value);
    let calcolo = 0;

    if (operatore === '+') {
        calcolo = x + y;
    } else if (operatore === '-') {
        calcolo = x - y;
    } else if (operatore === '*') {
        calcolo = x * y;
    } else if (operatore === '/') {
        calcolo = x / y;
    }

    risultato.innerText = "Risultato: " + calcolo;
}