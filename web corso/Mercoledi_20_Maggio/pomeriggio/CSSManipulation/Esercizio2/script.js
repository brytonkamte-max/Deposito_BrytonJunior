//dichiarazione
let bottone = document.getElementById("btn");

let output = document.getElementById("output");





// PROMISE

function operazioneConPromise() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            resolve("nome:bryton  ruolo:pippo  stato: pippo ");

        }, 2000);

    });

}


// ASYNC / AWAIT

async function caricaDati() {

    output.textContent = "Caricamento in corso...";

    // Cambio direttamente il colore del testo 

    output.style.color = "blue";



    try {

        let risultato = await operazioneConPromise();

        output.textContent = risultato;

       

    } catch (errore) {

        output.textContent = "Errore nel caricamento";

    }

}


bottone.addEventListener("click", function() {

    caricaDati();

});

//to do
//fa inserire i dati dall'utente 