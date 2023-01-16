// Nos permite extraer datos de arrays y objetos literales

// ------- Arrays -------

let patos = [
    {
        nombre: "Donald",
        origen: "Walt Disney",
        edad: 88,
        enEmision: true
    },
    {
        nombre: "Lucas",
        origen: "Warner Bros",
        edad: 85,
        enEmision: true
    },
    {
        nombre: "Duckman",
        origen: "USA Network",
        edad: 28,
        enEmision: false
    }
];

let [pato1, pato2, pato3] = patos;

/* console.table(pato1); */


// ------- Objetos literales -------

let persona = {
    nombre: "Denise",
    edad: 23,
    profesion: "Programadora",
    seriesFavoritas: ["Breaking bad", "Game of thrones", "Friends"]
}

let { nombre, profesion: trabajo } = persona;

console.log(nombre);
console.log(trabajo);