function menciona (texto, palabra){
    let encontrado = texto.indexOf(palabra);
    return (encontrado >= 0);
}

console.log(menciona("Hola mundo", "Hola"));

