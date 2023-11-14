//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

// let x = 6;
// let y = 5;

// if (x===y) {
//   console.log('I valori sono uguali (x='+x+' e y='+y+')');
// } else {
//   console.log(x > y ? 'Il valore più grande è x='+x : 'Il valore più grande è y='+y );
// }


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

// let num = 4;

// if (num < 5) {
//   console.log("Tiny");
// } else if (num < 10 && num >= 5){
//   console.log("Small");
// } else if (num < 15 && num >= 10){
//   console.log("Medium");
// } else if (num < 20 && num >= 15){
//   console.log("Large");
// } else if (num >= 20){
//   console.log("Huge");
// }

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

// for (let index = 0; index <= 10; index++) {
//   if (index === 3 || index === 8) {
//     continue;
//   }
//   console.log(index);
// }

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

// for (let index = 0; index <= 15 ; index++) {
//   console.log(index %2 === 0 ? index+' è un numero pari':index+' è un numero dispari');
// }

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// let x = 4;
// let y = 12;


// if (x === 8 || y === 8) {
//   console.log(x === 8 ? 'x è uguale a 8':'y è uguale a 8');
// } else if((x+y) === 8){
//   console.log('x+y=8');
// }else{
//   if (x > y) {
//         if ((x-y) === 8) {
//           console.log('x-y=8');
//         }
//       } else {
//         if ((y-x) === 8) {
//           console.log('y-x=8');
//         }
//       }
// }

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
// let totalShoppingCart = 50;
// totalShoppingCart = (totalShoppingCart - (100*0,2)) > 50 ? totalShoppingCart - (100*0.2) : totalShoppingCart + 10;
// console.log(totalShoppingCart);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

// let isMale = 0;
// let gender = isMale? "male":"female";
// console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


// for (let index = 1; index <= 100; index++) {
  
//   if (index % 3 === 0 && index % 5 === 0) {
//     console.log('FizzBuzz');
    

//   }else if (index % 3 === 0 || index % 5 === 0) {
//     console.log(index % 3 === 0 ? 'Fizz':'Buzz');
//   }else{
//     console.log(index);
//   }
  
// }