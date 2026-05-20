//seleziona gli elementi tramite id
let titolo=document.getElementById("titolo");

let testo=document.getElementById("testo");

let bottone=document.getElementById("bottone");

let lista=document.getElementById("lista");

//cambio il titolo appena la pagina parte
titolo.innerHTML="Titolo modificato con JS";

//Quando clicco il bottone
bottone.addEventListener("click",function(){

    //cambio il testo del paragrafo
    testo.innerHTML="Testo modificato";

    //creo un nuovo elemento li
    let nuovoElemento=document.createElement("li");

    //Inserisco testo nel nuovo elemento
    nuovoElemento.innerHTML="Nuovo elemento";

    //Aggiungo l'elemento alla lista
    lista.appendChild(nuovoElemento);
});


