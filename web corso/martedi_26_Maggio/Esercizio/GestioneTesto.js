// Funzione che trasforma un testo in maiuscolo

function maiuscolo(testo) {

    return testo.toUpperCase();

}


//funzione che conta il numero di caratteri

function contaCaratteri(testo) {

    return testo.length;

}
//funzione che controlla se una parola contiene une lettera

function contieneLettera(testo, lettera) {

    return testo.includes(lettera);

}


// Esporta la funzione
module.exports = {

    maiuscolo,
    contaCaratteri,
    contieneLettera

};