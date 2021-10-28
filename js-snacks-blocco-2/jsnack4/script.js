// JSNACK 4

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro

array1 = [3, 5, 7, 9, 11, 43, 55, 12];
array2 = [5, 3, 1, 11];



while (array1.length != array2.length) {
    if (array1.length > array2.length) {
        array2.push(Math.floor(Math.random() * 100))
    } else {
        array1.push(Math.floor(Math.random() * 100))
    }
}

console.log(array1);
console.log(array2);

console.log(`Il primo array contiene ${array1.length} elementi`);
console.log(`Il secondo array contiene ${array2.length} elementi`);
