/* requerir módulo autos */
let autosImportados = require("./autos");

let concesionaria = {
   autos: autosImportados,
 
    buscarAuto: function autobuscado(patente) {
        return this.autos.find(auto => auto.patente === patente) ?? null;
    },

   venderAuto: function autobuscado(patente){
      let autoEncontrado = this.buscarAuto(patente)
      if (autoEncontrado && autoEncontrado.vendido == false){
      autoEncontrado.vendido = true
      }
   },

   autosParaLaVenta: function disponible(){
    let disponibles = this.autos.filter( this.autos.vendido == false);
    console.log(disponibles);
   }

};

console.log(concesionaria.autosParaLaVenta());