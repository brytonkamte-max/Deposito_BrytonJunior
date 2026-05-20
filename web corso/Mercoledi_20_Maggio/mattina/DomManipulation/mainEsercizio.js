// Selezione elementi

let titolo = document.getElementById("titolo");

let paragrafo = document.getElementById("paragrafo");



let input = document.getElementById("nome");

let bottone = document.getElementById("btn");

let lista = document.getElementById("lista");

let bottoneElimina =document.getElementById("btnElimina");

//Quando clicco il bottone
bottone.addEventListener("click",function(){

   


     let nome = input.value; // sto leggendo l'input dell' utente 

    if (nome === "") { // verifica se è vuoto

        output.textContent = "Inserisci un nome";

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

//Quando clicco sul bottone elemina

 btnElimina.addEventListener("click", function () {

            
               

                // Elimina tutti gli elemnti della lista 
                
                lista.replaceChildren();


            

        });