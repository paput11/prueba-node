let electrodomésticos = ["licuadora", "batidora", "microondas", "lavarropas", "tostadora", "cafetera"];

console.log(electrodomésticos[0]);
console.log(electrodomésticos[1]);
console.log(electrodomésticos[2]);
console.log(electrodomésticos[3]);
console.log(electrodomésticos[4]);
console.log(electrodomésticos[5]);
console.log(electrodomésticos[6]);

let primero = electrodomésticos.shift();
let primeroAlUltimo = electrodomésticos.push(primero);
console.log(primeroAlUltimo);

electrodomésticos.push("secador", "mixer");
console.log(electrodomésticos);

console.log(electrodomésticos.length);

function buscador (producto){
    let existir = [(electrodomésticos.indexOf(producto))];
    if (existir >0) {
        console.log("Producto encontrado");
    } else {
        console.log("Producto no encontrado")
    }
}

buscador("mixer");

let cambiandoString = electrodomésticos.join(", ");

console.log(cambiandoString);

console.log(cambiandoString.length);

let replaceLista = cambiandoString.replace("mixer", "yogrthera" );

console.log(replaceLista);

let array = replaceLista.split();

console.log(array);


