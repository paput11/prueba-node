let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
];

let aprobados = estudiantes.filter(function(elemento){ 
    return elemento.promedio >= 7;
});

let desaprobados = estudiantes.filter(function(elemento){
    return elemento.promedio < 7;
});

console.log(aprobados)