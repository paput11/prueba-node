/* Crear una carpeta llamada proyecto.
b. Dentro de ella crear un archivo llamado peliculas.js. Este archivo será un
módulo que contiene una lista con algunas de nuestras películas favoritas.
Para eso nos recomiendan crear un array de objetos literales. No olvides
que este archivo es un módulo propio y por tal motivo una vez que se crea…
¿cuál debería ser nuestra última línea de código?
Por cada película se necesita conocer esta información:
i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. Premios (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso. */
let peliculas = [

    Bataman = {
        nombre : "Batman",
        id : 10,
        length : 93,
        price : 87, 
            genre : "Acción"
            },
    Iron_Man = {
        nombre : "Iron Man",
        id : 7,
        length : 123,
        price : 30,
            genre : "Aventuras"
            },
    Deadpool = {
        nombre: "DeadPool",
        id : 2,
        length : 93,
        price : 150, 
            genre : "Comedia" 
            },
];

module.exports = peliculas;
