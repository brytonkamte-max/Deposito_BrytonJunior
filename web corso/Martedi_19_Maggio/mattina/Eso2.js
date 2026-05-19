//il prompt
const prompt = require('prompt-sync')();


  
   //y=parola che sara inserita
   let y;
 


//max = varaibile parola piu lunga
   let max;
   let min;
   //min = variabile parola piu corta



   //function
  let parola;//parametro passato dentro la function
   // scriviamo la function che per verificare se una parola è valida 
function verifica(parola){
    if(parola ===null){
        console.log("Parola non valida!")
        return false;
    }else{
        return true;
        
    }
    
}

   // scriviamo la function che per trovare la parola piu lunga
function ParolaLunga(Array){
    max=Array[0];
    for(let element of Array){
        
        if(element.length>max.length)
            max=element;
        
    }
    console.log(" la parola piu lunga è :" +max);
       
}

 // scriviamo la function che per trovare la parola piu corta
function ParolaCorta(Array){
    min=Array[0];
    for(let element of Array){
        if(element.length<min.length)
            min=element;
        
    }
    console.log(" la parola piu corta è :" +min);
       
}


 // scriviamo la function che per trovare quante parole iniziano con una vocale

 
 function NumeroParolaConVocale(Array){
    let i=0;// variabile locale di incrementazione
    for(let element of Array){
        if ("aeiou".includes(element[0])) { //controllo sulla prima lettera di ciascuna parola
                i++;
            }
            
            
        
    }
    console.log(" il numero di parola che inizia con il vocale :" +i);
       
}


// scriviamo la function che per transformare tutte le parole di un Array in maiuscola

 let ArrayMaiuscola=[];
 function ParolaInMaiuscola(Array){
    for(let element of Array){
        //toUpperCase permette di rendere le stringhe in maiuscola
        ArrayMaiuscola.push(element.toUpperCase());
  
    }
    console.log(" Array con parola in Maiuscola : "+ArrayMaiuscola );
       
}




//dichiarazione 
   let x
   let Array=[];

//input
  x = parseInt( prompt("Quante parole Lei vuole inserire ? : "));


  //esecusione del ciclo for perche il numero di iterazione è stato definito
  for(i=0;i<x;i++){

     y =  prompt("Inserisci una Parola... : ");

     // verifica se è valida
     // Se la parola è valida la inseriamo, altrimenti ripetiamo il turno
    if (verifica(y)) {
        //inserimento dentro l'array
        Array.push(y);
    } 
        
    
     
  }

  //trovare parola piu lunga
     ParolaLunga(Array);
    //trovare parola piu corta
    ParolaCorta(Array);
    //contare quante parole iniziano con una vocale
    NumeroParolaConVocale(Array);
    //Transformare tutte le parole in maiusolo
    ParolaInMaiuscola(Array);





