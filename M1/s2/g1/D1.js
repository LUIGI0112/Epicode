/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I PRINCIPALI DATATYPE IN JAVASCRIPT SONO:
STRING: E' UNA SEQUENZA DI CARATTERI.E' ANCHE DETTO ALFANUMERICO. AD ESEMPIO "LUIGI"
NUMBER: QUESTO TIPO DI DATO E' NUMERICO. PUO' TRATTARSI DI UN NUMERO INTERO (1,2,3,4,5,) O DECIMALE (1.1,1.3,2.5,)
BOOLEAN: E' IL TIPO DI DATO BOOLEANO. PUO' ASSUMERE SOLO I VALORI TRUE (VERO) O FALSE (FALSO). */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName="LUIGI"
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12+20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x="12"
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const myconstName="GRILLO";
myconstName="GRILLO";
console.log(myconstName);
Il tentativo di riassegnare un nuovo valore alla variabile myConstName dichiarata con const causerà un errore durante l'esecuzione. 
Questo perché le variabili dichiarate con const non possono essere riassegnate una volta che sono state inizializzate.
*/




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let subtraction=4 - x
console.log(subtraction) 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1="john"
let name2="John"
console.log('name1 e name2 sono uguali:',name1===name2)
console.log(
  'name1 e name2 in lowercase sono uguali:',
name1.toLowerCase() === name2.toLowerCase()
)


