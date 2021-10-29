// JSnack 4

// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione dispari

const numbers = [3, 5, 8, 10, 43, 32, 55, 22, 20, 11];

let total = 0;

for (let i = 0; i < numbers.length - 1; i++) {
    if (i % 2 === 0) {
        let num = numbers[i];
        console.log(num);

        total += num;
    }
}

console.log(`La somma dei numeri in posizione dispari è : ${total}`);

