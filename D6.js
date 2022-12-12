/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1:");

function area(l1, l2) {
  return l1 * l2;
}
console.log("L'area è:", area(3, 8));
//
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2:");

function crazySum(i1, i2) {
  if (i1 !== i2) {
    const risultato = i1 + i2;
    return risultato;
  } else {
    return (risultato = (i1 + i2) * 3);
  }
}

let risultato = crazySum(7, 3);

console.log(risultato);

let risultato2 = crazySum(2, 2);
console.log(risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3:");

function crazyDiff(p, x) {
  if (Math.abs(p - x) > 19) {
    const differenza = Math.abs(p - x) * 3;
    return differenza;
  } else {
    const differenza = Math.abs(p - x);
    return differenza;
  }
}

let differenza = crazyDiff(3, 19);
console.log(differenza);

let differenza2 = crazyDiff(49, 19);
console.log(differenza2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4:");

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return "true";
  } else {
    return "false";
  }
}

let Variabile = boundary(35);
console.log(Variabile);

let Variabile2 = boundary(200);
console.log(Variabile2);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* console.log("Esercizio 5");

function epify(s) {
  if (typeof s !== "string") {
    console.log(`Attenzione, questa non è una stringa.
  Dammi una stringa`);
  } else {
    let ParoleStringa = [s.split(" ")];
    if (ParoleStringa[0] == !"EPICODE") {
      const Epicode = ["EPICODE"];
      let NuovoArray = Epicode.push(ParoleStringa);
      NuovaFrase = NuovoArray.join(" ");
      return NuovaFrase;
    }
  }
}

let Stringa0 = epify(3445);

let Stringa = epify("questo esercizio non mi piace");
console.log(Stringa);

let Stringa1 = epify("EPICODEquestoeserciziononmipiace");
console.log(Stringa1); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7:");
function reverseString(s) {
  let splitstringa = s.split("");
  let reverseArray = splitstringa.reverse();
  let nuovastringa = reverseArray.join("");
  return nuovastringa;
}

let V = reverseString("Epicode");
console.log(V);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
