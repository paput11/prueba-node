let valor1 = 20;
let valor2 = 20;

let operacion = "cuadrado";

let sumar = valor1 + valor2;
let restar = valor1 - valor2;
let multiplicar = valor1 * valor2;
let dividir = valor1 / valor2;

switch (operacion) {
    case "sumar":
        console.log("El resultado de sumar " + valor1  + " + " + valor2 + " es " + sumar )
        break;
    case "restar":
        console.log("El resultado de restar " + valor1 + " - " + valor2 + " es " + restar )
        break;
    case "multiplicar":
        console.log("El resultado de multiplicar " + valor1 + " * " + valor2 + " es " + multiplicar )
        break;
    case "dividir":
        console.log("El resultado de dividir " + valor1 + " / " + valor2 + " es " + dividir )
        break;        
    default: console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")
        break;
}