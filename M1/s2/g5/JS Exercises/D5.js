/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
 
const pets = ['dog', 'cat', 'hamster', 'redfish']
const primopets=pets[0]
console.log(primopets) 
const secondopets=pets[1]
console.log(secondopets) 
const terzopets=pets[2]
console.log(terzopets) 
const quartopets=pets[3]
console.log(quartopets) 


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort()
 console.log(" ordinato:", pets) 


//
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse()
console.log("ordine invertito:", pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let elementoDaSpostare = "redfish";

let index = pets.indexOf(elementoDaSpostare)


if (index !== -1) {
    
    let elementoRimosso = pets.splice(index, 1) 

    
    pets.push(elementoRimosso[0]);
} 
console.log("Array con l'elemento spostato in ultima posizione:", pets)



/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach(function(cars) {
  cars.licensePlate = generateLicensePlate()
})
function generateLicensePlate() {
  let licensePlate = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  for (let i = 0; i < 7; i++) {
      licensePlate += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return licensePlate
}
console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newCar = {
  brand: "Fiat",
  model: "Grandepunto",
  year: 2015,
  trims: ["sport", "multijet"] 
};
cars[cars.length] = newCar;

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  if (cars.trims && cars.trims.length > 0) {
      cars.trims.pop(); 
  }
}
console.log('rimuovi ultimo elemento della proprietà "trims":', cars) 

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

let justTrims = []
for (let i = 0; i < cars.length; i++) {
  let car = cars[i]; 
  if (car.trims && car.trims.length > 0) {
      justTrims.push(car.trims[0]); // Salviamo il primo elemento della proprietà "trims"
  }
}
console.log('primi elementi della proprietà "trims" di ogni auto:', justTrims) 

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  if (car.color && car.color.charAt(0).toLowerCase() === 'b') {
      console.log("Fizz");
  } else {
      console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i = 0;
while (numericArray[i] !== 32 && i < numericArray.length) {
    console.log(numericArray[i]);
    i++; 
     } 


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
