let pago_mes = 300;

let consumoKHW = 200;

let total = consumoKHW > 300 ? pago_mes * 1.2 : pago_mes;

console.log(
    "Debido a que su hogar tuvo un consumo de " 
        + consumoKHW 
        + "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $ " 
        + total);