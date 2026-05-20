let bottone = document.getElementById("btn");

let testo = document.getElementById("testo");

let bottoneR= document.getElementById("btnRecover");

bottone.addEventListener("click", function() {

    // Aggiunge o rimuove la classe CSS

    testo.classList.toggle("evidenziato");

    //toggle (Attiva,fai partire)

});

bottoneR.addEventListener("click",function(){

    //rimuove la classe css

    testo.classList.remove("evidenziato");
});