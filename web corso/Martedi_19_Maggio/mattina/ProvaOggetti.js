//creazione oggetto
let persona ={
    nome:"Mario",
    eta:30
};

//Accesso proprieta
console.log(persona.nome); //Mario
console.log(persona["eta"]); //30

//Modifica proprieta
persona.eta=31;

//Aggiunta proprieta
persona.citta="Milano";

//Rimozione proprieta
delete persona.citta;

//Metodi utili
let chiavi =Object.keys(persona); //["nome","eta"]
let valori =Object.values(persona); //["Mario","31"]
let entries =Object.entries(persona); //["nome","Mario"],["eta",31]
