// Selezione del form
const formLibro = document.getElementById("formLibro");

// Selezione del contenitore risultato
const risultato = document.getElementById("risultato");
//selezioniamo il menu di navigazione
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

// Evento submit del form
formLibro.addEventListener("submit", function(event) {

// Blocca il refresh automatico della pagina
event.preventDefault();

// Recupero valori degli input
const TitoloLibro = document.getElementById("TitoloLibro").value;
const autore = document.getElementById("autore").value;
const genere = document.getElementById("genere").value;
const AnnoPublicazione = document.getElementById("AnnoPublicazione").value;
const descrizione = document.getElementById("descrizione").value;







// Inserimento dinamico del risultato
risultato.innerHTML = `
<h2>Libro registrato</h2>
<p><strong>Titolo:</strong> ${TitoloLibro}</p>
<p><strong>Autore:</strong> ${autore}</p>
<p><strong>Genere:</strong> ${genere}</p>
<p><strong>Anno Publica:</strong> ${AnnoPublicazione}</p>
<p><strong>Descrizione:</strong> ${descrizione}</p>

`;
//svuoto tutto
//to do

});




menuButton.addEventListener("click", function () {

    menu.classList.toggle("active");

});