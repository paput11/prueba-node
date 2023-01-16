/*Los clientes eligen el tipo de hamburguesa base con un precio base y,
por cada selección que el cliente agregue, se le suma el valor de su selección al
precio.

Por ejemplo, si partiendo de una hamburguesa base carne a la parrilla con un precio “a”, el
cliente les incorpora los adicionales: de queso “b” y tomate “c”, el total a pagar sería
a+b+c. Así sucesivamente con el resto de los ingredientes.

Es importante tener presente que cada uno de estos adicionales estarán representados por
valores booleanos, es decir, true o false, dependiendo de si aceptan o no cada uno de los
adicionales. Así recibiremos un total de ocho valores booleanos, uno por cada adicional.

Tu responsabilidad será la de crear dos funciones:
Primera función - Callback:
● Tendrá la responsabilidad de calcular el total a pagar por el cliente, en base a un total
de nueve parámetros que recibirá la función:
Un string para el tipo de hamburguesa, teniendo en cuenta las siguientes:
○ Carne a la parrilla: $1800
○ Pollo: $1500
○ Vegetariana: $1200
● Y recibirá los ocho valores booleanos de los adicionales, teniendo en cuenta los
siguientes:
○ Jamón = $30
○ Queso = $25
○ Salsa de tomate = $5
○ Mayonesa = $5
○ Mostaza = $5
○ Tomate = $15
○ Lechuga = $10
○ Cebolla = $10

Segunda función:
● Esta función tendrá la responsabilidad de devolver un mensaje al usuario donde le
indique su nombre, su apellido y el total a pagar en base al tipo de
hamburguesa seleccionado más los adicionales indicados. Tenga en cuenta que
esta función deberá recibir como parámetros: “nombre del usuario”, “apellido del
usuario”, “tipo de hamburguesa” y los ocho valores booleanos en función a los
adicionales que el cliente haya seleccionado.

Estimado Daniel Fuentes, el monto total a pagar es de: $1905
*/

function total (tipoHamburguesa, Jamón, Queso, SalsaDeTomate, Mayonesa, Mostaza, Tomate, Lechuga, Cebolla){
    let totalAPagar = 0
        switch (tipoHamburguesa) {
            case "Carne a la parrilla":
                totalAPagar = 1800;
            break;
            case "Pollo":
                totalAPagar = 1500;
            break;
            case "Vegetariana":
                totalAPagar = 1200;
            break;
        default: totalAPagar = "La selección no esta disponible"
            break;
        }
    
    if (Jamón == true) {
        totalAPagar += 30;
    }
    if (Queso == true) {
        totalAPagar += 25;
    }
    if (SalsaDeTomate == true) {
        totalAPagar += 5;
    }
    if (Mayonesa == true) {
        totalAPagar += 5;
    }
    if (Mostaza == true) {
        totalAPagar += 5;
    }
    if (Tomate == true) {
        totalAPagar += 15;
    }
    if (Lechuga == true) {
        totalAPagar += 10;
    }
    if (Cebolla == true) {
        totalAPagar += 10;
    }
    return  (totalAPagar);
}

//console.log(total("Carne a la parrilla",true,true,true,true,true,true,true,true,));
 
function mensaje (nombre, apellido, tipoHamburguesa, Jamón, Queso, SalsaDeTomate, Mayonesa, Mostaza, Tomate, Lechuga, Cebolla, operacion){
    let precioFinal = operacion(tipoHamburguesa, Jamón, Queso, SalsaDeTomate, Mayonesa, Mostaza, Tomate, Lechuga, Cebolla);
    console.log("Estimado " + nombre + " " + apellido + ", el monto total a pagar es: $" + precioFinal);
}

mensaje("Juan", "Perez", "Carne a la parrilla", false, false, false, false, false, true, true, true, total);