function costoAlquiler (tipoVehiculo, diasAlquiler, sillaBb){
    let totalAPagar = 0
           switch (tipoVehiculo) {
            case "Compacto":
                totalAPagar = diasAlquiler * 14000;
                break;
            case "Mediano":
                totalAPagar = diasAlquiler * 17000;
                break;
            case "Camioneta":
                totalAPagar = diasAlquiler * 28000;
                break;
            default: "Vehículo no encontrado"
                break;
        }
    if (sillaBb == true) {
        totalAPagar += 1200 * diasAlquiler     
    }
    return (totalAPagar);
}

console.log(costoAlquiler("Compacto", 1 , false));
