//variabili
let eta = 5;
let patente = true;
let abbonamento = false;


//Condizione con operatore AND(&&)
//entrambe le condizioni devono essere vere
if (eta>=18 && patente==true) {
    console.log("Puoi guidare l'auto");
}

//Condizione con operatore OR(||)
//basta che una delle condizioni sia vera
if (eta<18 || abbonamento===true) {
    console.log("Mai uno sconto speciale");
}
//Condizione con operatore NOT(!)
//inverte il valore booleano
if (!abbonamento) {
    console.log("Non hai un abbonamento attivo");
}
//Condizione piu complessa
if ((eta>=18 && patente) || abbonamento) {
    console.log("Accesso consentito");
}else {
    console.log("Accesso negato");
}