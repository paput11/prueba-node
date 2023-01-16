let nombre = "Patricio";
let apellido = "Aput";
let sueldoActual = 400000;
let porcentajeDeAumento = 35;
let calculoAumento = sueldoActual*porcentajeDeAumento/100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola, estimad@ Patricio Aput\nEn base a su sueldo actual:");
console.log("$" + sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeDeAumento + "%");
console.log("$" + calculoAumento);
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);
