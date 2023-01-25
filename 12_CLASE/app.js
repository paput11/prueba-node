let autosImportados = require("./autos");

let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function autobuscado(patente) {
        return this.autos.find(auto => auto.patente === patente)?? null;
    },

   venderAuto: function autobuscado(patente){
      let autoEncontrado = this.buscarAuto(patente)
      if (autoEncontrado && autoEncontrado.vendido == false){
      autoEncontrado.vendido = true
      }
   },

    autosParaLaVenta: function (){
     let autosDisponibles = this.autos.filter(auto => auto.vendido == false);
     return autosDisponibles
   },

   autosNuevos: function (){
     return this.autosParaLaVenta().filter(auto => auto.km < 100 );
   },

   listaDeVentas: function(){
     let autosVendidos = this.autos.filter (auto => auto.vendido === true);
     let listaPrecio = autosVendidos.map (auto => auto.precio)
     return listaPrecio;
   },

   totalDeVentas: function(){
      let totalSuma = this.listaDeVentas().reduce((acumulador, suma) => acumulador + suma, 0);
      return totalSuma;
   },
   
  puedeComprar : function(auto,persona){
   if (auto.precio <= persona.capacidadDePagoTotal && auto.precio/auto.cuotas <=persona.capacidadDePagoEnCuotas){
      return true;
   }else {return false}
  },
  
   autosQuePuedeComprar : function (persona){
   let autosParaLaVenta = this.puedeComprar;
   let losQuePuedenComprar = this.autosParaLaVenta().filter(auto =>{
      return autosParaLaVenta (auto,persona)
  })
  return losQuePuedenComprar}
   
}