// ----------- map -----------

/* let sueldos = [200, 500, 700, 100, 800, 900];

let sueldosAumentados = sueldos.map(function(sueldo){
    return sueldo * 1.04
})

console.log(sueldosAumentados); */

// ----------- filter -----------

/* let edades = [5, 33, 18, 16, 46, 22];

let mayores = edades.filter(function(edad){
    return edad >= 18
})

console.log(mayores); */

// ----------- reduce -----------

/* let numeros = [5, 5, 10, 3];

let sumatoria = numeros.reduce(function(acumulador, numero){
    return acumulador + numero
}, 7)

console.log(sumatoria); */

// ----------- reduce con objetos -----------

/* let numerosObjeto = [
    {
        nombre: "Juan",
        puntaje: 9
    },
    {
        nombre: "Maria",
        puntaje: 3
    },
    {
        nombre: "Carol",
        puntaje: 17
    },
]

let sumatoriaObjetos = numerosObjeto.reduce(function(acumulador, persona){
    return acumulador + persona.puntaje
}, 0)

console.log(sumatoriaObjetos); */

// !---------- forEach ----------!

let paises = ["Argentina", "Uruguay", "Colombia", "Peru"];

paises.forEach(function(pais, i) {
    console.log("----");
    console.log("Pais " + i + " " + pais);
})

paises.forEach((pais, i) => {
    console.log(pais);
});

for (let i = 0; i < paises.length; i++) {
    console.log("----");
    console.log("Pais:" + paises[i]);
}

/* forOf (arrays)*/
/* forIn (objetos literales) */