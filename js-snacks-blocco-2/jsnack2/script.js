// JSNACK3

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const names = ['Luca', 'Gianluca', 'Simone', 'Anna', 'Paola', 'Andrea', 'Alessandra', 'Carlo', 'Edoardo', 'Francesca', 'Mauro', 'Marco', 'Roberta'];
const lastNames = ['Morucci', 'Rossi', 'Verdi', 'Mancini', 'Bianchi', 'Marino', 'Leoni', 'Mattei', 'Duzioni', 'Ferri', 'Dominicis', 'Podda'];

const list = []

for (let i = 0; i < 3; i++) {
    const listName = (names[Math.floor(Math.random() * (names.length - 1))] +' '+ lastNames[Math.floor(Math.random() * (lastNames.length - 1))])

    list.push(listName);
}

console.log(`La lista degli invitati è ${list}`);