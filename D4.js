/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function area(l1, l2) {
    let arearettangolo = l1 * l2
    return arearettangolo
  }
  
  let base = parseFloat(prompt("inserisci la base del rettangolo"))
  let altezza = parseFloat(prompt("inserisci l'altezza del rettangolo"))
  let risultato = area(base, altezza)
  console.log("L'area del rettangolo è: " + risultato)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

  
/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3
    } else {
      return num1 + num2
    }
  }

   let primonumero = parseInt(prompt("inserisci primo numero"))
   let secondonumero = parseInt(prompt("inserisci secondo numero"))
   risultato = crazySum(primonumero, secondonumero)
   console.log(risultato)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* /
function crazyDiff(num) {
    let differenzaAssoluta = Math.abs(num - 19);

    if (num > 19) {
      return differenzaAssoluta * 3
    } else {
      return differenzaAssoluta
    }
  }
  let numerodifferenza = parseInt(prompt("inserisci numero per la differenza"))
  risultato = crazyDiff(numerodifferenza)
  console.log(risultato)


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
      return true
    } else {
      return false
    }
  }
  let numeroboundary = parseInt(prompt("inserisci numero per la funzione boundary"))
  risultato = boundary(numeroboundary)
  console.log(risultato)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function epify(string) {
    if (string.startsWith("EPICODE")) {
      return string
    } else {
      return "EPICODE " + string
    }
  }

  let numeroepify = prompt("inserisci stringa per la funzione epify")
  risultato = epify(numeroepify)
  console.log(risultato)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
function check3and7(num) {
  if (num > 0 && (num % 3 === 0 || num % 7 === 0)) {
    return true
  } else {
    return false
  }
}

let numerocheck3and7 = parseInt(prompt("inserisci numero per la funzione check3and7"))
risultato = check3and7(numerocheck3and7)
console.log(risultato)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function reverseString(string) {
    return string.trim().split('').reverse().join()
  }
  let numeroreverseString = prompt("inserisci stringa per la funzione reverseString")
  risultato = reverseString(numeroreverseString)
  console.log(risultato)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa) {
    let parole = stringa.split(" ");
    
    for (let i = 0; i < parole.length; i++) {
      parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1)
    }
    let stringMaiuscola = parole.join(" ")
    return stringMaiuscola;
  }
  let numeroupperFirst= prompt("inserisci stringa per la funzione upperFirst")
  risultato = upperFirst(numeroupperFirst)
  console.log(risultato)
  

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    var numerirandom = [];
    for (var i = 0; i < n; i++) {
      var numeroCasuale = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
      numerirandom.push(numeroCasuale); // Aggiunge il numero casuale all'array
    }
    return numerirandom;
  }
