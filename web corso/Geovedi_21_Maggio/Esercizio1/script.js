// Selezione elementi

const titolo = document.getElementById("titolo");

const contenitore = document.getElementById("contenitore");

const lista = document.getElementById("lista");

const bottone = document.getElementById("bottone");

const btnValida = document.getElementById("btnValida");

const btnLeone = document.getElementById("btnLeone");

const btnElefante = document.getElementById("btnElefante");

const btnTema = document.getElementById("btnTema");



const btnElimina = document.getElementById("btnElimina");

const input = document.getElementById("input");

const btnSfondo = document.getElementById("btnSfondo");



// Selezione tramite classe CSS

const intro = document.querySelector(".intro");
const body = document.querySelectorAll("body");



// Evento click Modifica il titlo del zoo
//Aggiornare il testo descriptivo

bottone.addEventListener("click", function () {


    // Modifica del testo del titolo

    titolo.innerText = "Titolo aggiornato";


    // Inserimento dinamico di HTML

    intro.innerText = "Questo contenuto è stato generato dinamicamente con JavaScript."

        

});


//Quando clicco il bottone
btnValida.addEventListener("click",function(){

   


     let nome = input.value; // sto leggendo l'input dell' utente 

    if (nome === "") { // verifica se è vuoto

        intro.textContent = "Inserisci un nome";

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


// ELIMINAZIONE ELEMENTO della lista
        btnElimina.addEventListener("click", function () {

            // Controllo se esistono elementi
            if (lista.children.length > 0) {

                // Elimino ultimo elemento
                lista.removeChild(lista.lastElementChild);

            }

        });


        // Cambio direttamente il colore di sfondo
btnSfondo.addEventListener("click", function () {
contenitore.style.backgroundColor = "blue";
});



//Quando clicco il bottone per aggiunere un leone
btnLeone.addEventListener("click",function(){

        //creo un nuovo elemento li
    let nuovoElemento=document.createElement("li");

    //Inserisco testo nel nuovo elemento
    nuovoElemento.innerHTML="Nome:Leone  Descrizione:animal veloce";

    //Aggiungo l'elemento alla lista
    lista.appendChild(nuovoElemento);

    //svuoto l'input dopo l'inserimento
    input.value = "";
});


//Quando clicco il bottone per aggiunere un elefante
btnElefante.addEventListener("click",function(){

        //creo un nuovo elemento li
    let nuovoElemento=document.createElement("li");

    //Inserisco testo nel nuovo elemento
    nuovoElemento.innerHTML="Nome:Elefante  Descrizione: animal pesante";

    //Aggiungo l'elemento alla lista
    lista.appendChild(nuovoElemento);

    //svuoto l'input dopo l'inserimento
    input.value = "";
});


//Quando clicco il bottone per cambiare il tema della pagina
btnTema.addEventListener("click",function(){


   
    body.classList.toggle("body");
});
