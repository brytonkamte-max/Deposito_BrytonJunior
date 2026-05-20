// Selezione elementi

let titolo = document.getElementById("titolo");

let div = document.getElementById("testo");



//bottone per creare un nuovo elemento
let btn1 = document.getElementById("btn1");

//bottone per modificare il titolo
let btn2 = document.getElementById("btn2");

//bottone d'eliminazione dell'ultimo elemento nella lista
let btn3 =document.getElementById("btn3");

let lista = document.getElementById("lista");

let input = document.getElementById("nome");


let btnColore = document.getElementById("btnColore");
let btnGrandezza = document.getElementById("btnGrandezza");
let btnSfondo = document.getElementById("btnSfondo");

//per nascondere il div
let btnNascondi =
document.getElementById("btnNascondi");





//Quando clicco il bottone
btn1.addEventListener("click",function(){

   


     let nome = input.value; // sto leggendo l'input dell' utente 

    if (nome === "") { // verifica se è vuoto

        div.textContent = "Inserisci un nome";

    } else {

        //creo un nuovo elemento li
    let nuovoElemento=document.createElement("li");

    //Inserisco testo nel nuovo elemento
    nuovoElemento.innerHTML=nome;

    //Aggiungo l'elemento alla lista
    lista.appendChild(nuovoElemento);

    //svuoto l'input dopo l'inserimento
    input.value = "";



    }

});

// Cambio direttamente il testo
btn2.addEventListener("click", function () {

    // Modifica il contenuto

    titolo.textContent = "Titolo modificato!";
});


btn3.addEventListener("click", function () {

            // Controllo se esistono elementi
            if (lista.children.length > 0) {

                // Elimino ultimo elemento
                lista.removeChild(lista.lastElementChild);

            }

        });





// Cambio direttamente il colore del titolo
btnColore.addEventListener("click", function () {
titolo.style.color = "red";
});


// Cambio direttamente la dimensione del testo dentro il div
btnGrandezza.addEventListener("click", function () {
    
div.style.fontSize = "30px";
});


// Cambio direttamente il colore di sfondo del div
btnSfondo.addEventListener("click", function () {
div.style.backgroundColor = "yellow";
});


btnNascondi.addEventListener("click", function () {
    // Se il div è nascosto, lo mostriamo
    if (div.style.visibility === "hidden") {
        div.style.visibility = "visible";
    } else {
        // Altrimenti (se è visibile), lo nascondiamo
        div.style.visibility = "hidden";
    }
});