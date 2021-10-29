// Ogni volta che si clicca un bottone, il nostro programma chiederà un numero di 4 cifre all’utente.
// Se l’utente ha inserito un numero corretto, allora il programma calcolerà la somma e le media di tutte le cifre che lo compongono stampandola nel DOM, altrimenti ripeterà la richiesta di inserimento finché non avrà inserito un numero corretto

// dom refs 
const btn = document.querySelector('.btn');

const printMedia = document.querySelector('.media');

const printSomma = document.querySelector('.somma');

// click 
btn.addEventListener('click', function() {

    let media = 0;
    let somma = 0;
    
    let num = prompt('Inserisci un numero di 4 cifre');

    while (num.length !== 4 || isNaN(num)) {
        alert('Inserisci un numero di 4 cifre!!!')
        num = prompt('Inserisci un numero di 4 cifre');
    }

    for (let i = 0; i < num.length; i++) {
        somma += parseInt(num[i])
    }
    
    media = somma/num.length

    // print in dom 
    printMedia.innerHTML = `La media delle cifre che hai inserito è: ${media}`

    printSomma.innerHTML = `La somma delle cifre che hai inserito è: ${somma}`

})