let operacionesBancarias = [20, 30 , 35 -10, 40, -100];

function calcularMovimientos(movimientos){
    let saldoDepositos = 0;
    let saldoRetiros = 0;
    let saldoFinal = 0;
    for (let i = 0; i < movimientos.length; i++) {
        if(movimientos[i] > 0){
            saldoDepositos += movimientos[i]
        }
        else{
            saldoRetiros += movimientos[i];
        }
    }
    saldoFinal = saldoDepositos + saldoRetiros
    return[saldoDepositos, saldoRetiros, saldoFinal]
}

console.log(calcularMovimientos([20, 30 , 35 -10, 40, -100]));


/*devolver info al cliente*/

function mostrarAClientes(nombre, apellido, movimientos){
    let arrayDatos = calcularMovimientos(movimientos)


    console.log("Estimado " + nombre + " " + apellido + ";");
    console.log("El monto de los depósitos es de: $"+ arrayDatos[0]);
    console.log("El total de los retiros es de: $" + arrayDatos[1]);
    console.log("Por lo tanto el saldo total es: $" + arrayDatos[2]);
}

mostrarAClientes("Patricio", "Aput", operacionesBancarias);