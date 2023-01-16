//ciclo for

/* function noParesDeContarImparesHasta(numero) {
    let impares = 0;
    for ( let i = 0; i < numero; i++){
        if (i % 2 != 0){
        impares++;
        }
    }
    return(impares);
}
console.log(noParesDeContarImparesHasta(10)); */

//cilco while

/* function tablaDeMultiplicar(numero) {
    let i=0
        while(i < numero){
          i++;  
       console.table("5* " + i + " = " + (5*i));
       }
   }
   tablaDeMultiplicar(10) */

//ganancia

/* let periodo = [2,3]
let cantElementos = periodo.length
let i = 0
if (i <= cantElementos) {
    let suma = 0
    suma += periodo[i]
    console.log(suma)
    return (suma)
} 
console.log(suma); */

//input saldosDeMesesConGanancia([100, 20, 0, -10, 10])
//output [100, 20, 10]

/* function saldosDeMesesConGanancia(unPeriodo){
    for(let i=0;i <= unPeriodo.length; i++){
        if (unPeriodo[i] <= 0){
        unPeriodo.splice(i,1);
            return (unPeriodo);
    }
    }
    return (unPeriodo);
}

console.log(saldosDeMesesConGanancia([1, -2, -4, -3])); */

//cantidad de meses con perdida
let cantidad = 0
function cantidadDeMesesConPerdida(unPeriodo){
    for (let i = 0; i < unPeriodo.length; i++){
        if (unPeriodo[i] < 0){
            cantidad++;   
        }
       
    }
    return(cantidad)
}

console.log(cantidadDeMesesConPerdida([1]))
console.log(cantidadDeMesesConPerdida([]))
console.log(cantidadDeMesesConPerdida([10, -10, 2, 100]))