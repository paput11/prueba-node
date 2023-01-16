// ----------- JSON -----------

let fs = require("fs");

let rutaArchivo = "./patos.json";

let patosJSON = fs.readFileSync(rutaArchivo, "utf-8");

/* console.log(patosJSON); */

let patosArray = JSON.parse(patosJSON);

/* console.log(patosArray); */

let patosNuevosJSON = JSON.stringify(patosArray);

/* console.log(patosNuevosJSON) */

// Esto cumple la misma función que las 3 lineas de arriba
/* let patosArray = JSON.parse(fs.readFileSync("./patos.json", "utf-8")); */

console.table(patosArray);