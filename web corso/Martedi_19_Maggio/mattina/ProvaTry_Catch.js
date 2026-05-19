//Try catch
try{
    let risultato =10/0;
    console.log(risultato);
}catch(errore){
    console.log("Si è verificato un errore")
}

//Finally
try{
    console.log("Esecuzione...");

}catch(errore){
    console.log("Errore");

}finally{
    console.log("Operazione terminata");
}



//Finally
function controllaEta(eta) {
    if (eta < 18) {

        throw new Error("Utente minorenne");
    }
    return "Accesso consentito";
}

try {

    console.log(controllaEta(16));

} catch (e) {

    console.log(e.message);

}