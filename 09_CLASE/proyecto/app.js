/* c. Una vez creado el módulo anterior, crear un nuevo archivo (app.js). Piensa
cómo hacer para lograr importar nuestro módulo (peliculas.js). Luego,
utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado
con el detalle de cada una de nuestras películas favoritas.*/

let peliculas = require ("./peliculas.js");

function listado (){
    for (let i = 0; i < peliculas.length; i++) {
    console.log (peliculas[i].nombre.toUpperCase());
    console.log("")    
    console.log ("id : " + peliculas[i].id);
    console.log ("Duración : " + peliculas[i].length);
    console.log ("Precio : " + peliculas[i].price);
    console.log ("El genero es : " + peliculas[i].genre)
    console.log("")
    }    
}
console.log("El listado de películas es:");
listado();