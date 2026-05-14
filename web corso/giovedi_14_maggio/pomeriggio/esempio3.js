let globale = "visibile ovunque";


if (true) {

    let locale = "solo nel blocco";

    console.log(globale); // ok

    console.log(locale);  // ok

}

 console.log(locale); // Errore
 //non è possibile accedere alla variabile locale al di fuori del blocco in cui è stata dichiarata