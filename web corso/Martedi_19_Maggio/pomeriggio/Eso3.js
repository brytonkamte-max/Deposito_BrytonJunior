
//il prompt
const prompt = require('prompt-sync')();






//dichiarazione 
   let x
   let Array=[];
   
   

//input
do{
    
  // Mostriamo il menu principale all'utente
    console.log("--MENU--");
    console.log("1 - Aggiungere un prodotto");
    console.log("2 - Calcolare il valore totale del Magazzino");
    console.log("3 - Trovare il prodotto con il prezzo più alto");
    console.log("4 - Mostrare la lista dei prodotti disponibili");
    console.log("5 - Mostrare l'Array dei soli nomi");
    console.log("0 - Esci dal programma");

    // Catturiamo la scelta dell'utente
    x = prompt("Scegli un servizio: ");
    
  switch(x)
  {
    case "1"://Aggiungere un prodotto
            //variabile locale
            //oggetto dichiarato
        let prodotto={};
        let nome;
        let prezzo;
        let qty; //quantita

        prodotto.nome = ( prompt("Qual è il nome del prodotto ?) : "));
        prodotto.prezzo = ( parseInt(prompt("Qual è il suo prezzo : ")));
        prodotto.qty = ( parseInt(prompt("Qual è la Quantità ? ")));

        //Aggiungiamo la proprieta disponibile a ogni prodotto dinamicamente
        if(prodotto.qty>0){
            prodotto.disponibile=true;
        }else{
            prodotto.disponibile=false;
        }


        Array.push(prodotto);
    break;


    case "2"://Calcolare il valore totale del Magazzino
    let Totale=0; //valore totale
        for(let element of Array){
            Totale += element.prezzo*element.qty;

        }
        console.log("Il valore totale è :" +Totale);
    break;


    case "3": // trovare il prodotto con il prezzo piu alto
    let prodottoMax=Array[0]; //inizializiamo il primo prodotto come quello che ha il piu grande prezzo
        for(let element of Array){
            if(element.prezzo >prodottoMax.prezzo )
                prodottoMax=element;

        }

        console.log("il prodotto con il prezzo piu alto è :",prodottoMax);
    break;


    case "4": // filtrare i prodotti con quantit maggiore di 0(diponibili)
        let ArrayProdottiDisponibile=[];
        for(let element of Array){
            if(element.qty>0)
                ArrayProdottiDisponibile.push(element);

        }
        console.log("i prodotti disponibili sono :", ArrayProdottiDisponibile);
    break;


   
    case "5": //Creare un nuovo Array con i nomi  dei prodotti
        let ArrayConNome=[];
        for(let element of Array){
            ArrayConNome.push(element.nome);
        }
        console.log("L'array con i nomi sono :"+ ArrayConNome);
    break;


    default:
        console.log("Arrivederci!");
        x="0";

        

  }
  
  }while(x!=="0");



  