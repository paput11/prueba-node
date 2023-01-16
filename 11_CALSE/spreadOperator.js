// Spread Operator

// Nos permite juntar datos de una forma más comoda en arrays u objetos literales

// ------- Arrays -------
let frutasUno = ["banana", "pera", "manzana"];
let frutasDos = ["durazno", "ciruela", "naranja"];

// Versión estandar

/* frutasDos.forEach(fruta => {
    frutasUno.push(fruta)
});

console.table(frutasUno); */


// Utilizando spreading

let todasLasFrutas = [...frutasUno, "sandia", "anana", ...frutasDos]; 

/* console.table(frutasUno);
console.table(frutasDos);
console.table(todasLasFrutas); */


// ------- Objetos literales -------


let cursadaFullstack = {
    curso: "Fullstack",
    turno: "Mañana",
    sede: "Belgrano"
}

// Versión estandar

let estudiantee = {
    nombre: "Denise",
    email: "denise@gmail.com",
    curso: cursadaFullstack.curso,
    turno: cursadaFullstack.turno,
    sede: cursadaFullstack.sede
}

// Versión con spreading

let estudiante = {
    nombre: "Denise",
    email: "denise@gmail.com",
    ...cursadaFullstack
}

/* console.table(estudiante) */


// ------- Funciones (parametro rest) -------

// Nos permite tener un numero indefinido de parametros en una función;


function peliculasVistas (...nombresDePeliculas) {
    nombresDePeliculas.forEach(pelicula=> {
        console.log("La persona ya vio la pelicula: " + pelicula)
    })
};

/* peliculasVistas("End Game"); */

/* peliculasVistas("End Game", "Iron Man 3", "Mi pobre angelito"); */

peliculasVistas("End Game", "Iron Man 3", "Mi pobre angelito", "Spiderverse", "Thor: amor y trueno");