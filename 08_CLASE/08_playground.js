/*Escribí la función sumatoriaBajoImporte la cual recibiendo un array con
importes nos devuelva el resultado final de la suma de los importes de
todos los meses que tienen ganancia, a excepción de los que superen 
un importe de $ 1.000*/

/* function sumatoriaBajoImporte (entrada){
    let sumaDeImportes = 0;
    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] <= 1000 && entrada[i] > 0){
            sumaDeImportes += entrada[i]
        }
    }
    return(sumaDeImportes)
}

let datos = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]
console.log(sumatoriaBajoImporte(datos));
 */
/* Nos piden que escribamos la función asientosDisponibles(),
que tome como parámetro un conjunto de asientos disponibles
y el asiento que quiere ocupar la persona. Nuestra función
deberá verificar si el asiento solicitado se encuentra disponible
y devolverle un mensaje claro y prolijo al cliente como en los
ejemplos siguientes:

Ejemplo si se encuentra el asiento disponible

asientosDisponibles([15, 28, 44, 45, 70], 15);  

// El resultado debería ser:

"Felicitaciones, el asiento número 15 está disponible"
Ejemplo si no se encuentra el asiento disponible

asientosDisponibles([15, 28, 44, 45, 70], 50);  

// El resultado debería ser:

"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles" */

/* function asientosDisponibles(asientosVacios, numeroDeAsiento){
    let posicion = asientosVacios.indexOf(numeroDeAsiento)
        if ( posicion != -1){
        console.log("Felicitaciones, el asiento número " + asientosVacios[posicion] + " está disponible ")
    }
    else{
        console.log("Lo sentimos, el asiento número " + numeroDeAsiento +  "está ocupado, pero aún quedan " +
        asientosVacios.length + " asientos disponibles")
    }
}

asientosDisponibles([15, 28, 44, 45, 70], 15)
asientosDisponibles([15, 28, 44, 45, 70], 50)
asientosDisponibles([3, 15, 18, 25], 25)
asientosDisponibles([3, 15, 18, 25], 78)
asientosDisponibles([3, 15, 18, 25, 35], 78)
asientosDisponibles([3, 15, 18, 25], 18) */

/*Para ayudar a la empresa escribamos una función reporteDePasajeros(),
la cual cuando reciba la cantidad de estaciones que avanzó el tren nos 
devuelva un reporte de la cantidad de cada una de las estaciones y la 
cantidad de pasajeros que lleva el tren. La empresa nos provee los 
siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central 
es la única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan 
los siguientes ejemplos:*/

/* Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren']
Otro ejemplo:

// Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 
'En la estación 1 hay 220 pasajeros arriba del tren',
 'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren']
Otro ejemplo:

// Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 
'En la estación 1 hay 220 pasajeros arriba del tren', 
'En la estación 2 hay 240 pasajeros arriba del tren', 
'En la estación 3 hay 260 pasajeros arriba del tren',
'En la estación 4 hay 280 pasajeros arriba del tren', 
'En la estación 5 hay 320 pasajeros arriba del tren']*/

 
function reporteDePasajeros(cantidadDeEstaciones){
    let pasajerosQueSuben = [0, 50, 50, 50, 50, 120]
    let pasajerosQueBajan = [0, 30, 30, 30, 30, 80]
    let flujo = 200
    let mensaje = []
        for (let i = 0; i <= cantidadDeEstaciones; i++) {
            flujo += pasajerosQueSuben[i] - pasajerosQueBajan[i];
            mensaje.push("En la estación " + i +  " hay " + flujo + " pasajeros arriba del tren")
        }
        console.log(mensaje)
}
reporteDePasajeros(0);
reporteDePasajeros(1);
reporteDePasajeros(2);
reporteDePasajeros(3);
reporteDePasajeros(4);
reporteDePasajeros(5);

/*Con la ayuda de lo que sabe Nelson tenes que realizar una función laClaveSecreta(), 
que tome como parámetro un conjunto de caracteres y te pueda devolver el mensaje de manera ordenada.

Por ejemplo: 

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  

// El resultado que nos devuelve la función es el siguiente: 
"El día es lunes";  
Otro ejemplo:

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  

// El resultado que nos devuelve la función es el siguiente: 
"Clave descifrada"; */

function laClaveSecreta(claveSugerida){
    let claveSugeridaReverse = claveSugerida.reverse()
    while (claveSugeridaReverse.includes("*") == true ) {
            claveSugeridaReverse.splice(claveSugeridaReverse.indexOf("*"),1)
         }
    
    return(claveSugeridaReverse.join(""))
    }
   
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]))
console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] ));
    