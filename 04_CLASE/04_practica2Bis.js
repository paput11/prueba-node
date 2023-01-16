// el perfil puede ser: administrador, asistente o invitado

let perfil = "AdMinistRador";

switch(perfil.toLowerCase()){
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
         break;
    case "invitado":
        console.log("Usted sólo tiene permisos de consultar datos");
         break;
    case "asistente":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
         break;
    default:
        console.log("Debe especificar un perfil válido")     
}