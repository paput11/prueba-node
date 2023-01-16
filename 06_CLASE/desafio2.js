let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick",
"Elvis","Thor: amor y trueno"]

//colocar la pelicula buscada de la lista en la primera posicion y en mayuscula

function primeroAlUltimo(busqueda){   
    
    let ubicacion = peliculas.indexOf(busqueda)
    let mayuscula = peliculas[ubicacion].toUpperCase();
    peliculas.splice(ubicacion,1);
    peliculas.splice(0,0,mayuscula);
    return (peliculas)  
}
peliculas = primeroAlUltimo("30 noches con mi ex")
console.log(peliculas);

//hacer una cadena de texto con: Counter-Strike, NOP, Vértigo, Nick, Avatar

let nuevaLista = "Counter-Strike NOP Vértigo Nick Avatar"

let peliculas2 = nuevaLista.split(" ");
console.log(peliculas2);

let peliculas2Primero = peliculas2.shift();
console.log(peliculas2);

function unir (array1, array2){
       unido = array1.concat(array2);
    return (unido);
}

console.log(unir(peliculas,peliculas2));







