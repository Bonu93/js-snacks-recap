// JSNACK 2

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti con for
// e opzionalmente con while


let total = 0;

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt('Inserisci un numero'));
    total += num;  
}

console.log(total);

