// JSNACK2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


let firstWord = prompt('Digita una parola');
let secWord = prompt("Digita un'altra parola");

if (firstWord.length < secWord.length) {
    console.log(firstWord, secWord);
} else if (firstWord.length > secWord.length) {
    console.log(secWord, firstWord);
} else {
    console.log('Le due parole hanno la stessa lunghezza');
}