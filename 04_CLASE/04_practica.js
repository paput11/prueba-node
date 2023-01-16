// el perfil puede ser: administrador, asistente o invitado

let perfil = "ASISTENTE";

switch(perfil){
    case "administrador":
    case "Administrador":
    case "ADMINISTRADOR":
        console.log("Usted tiene todos los privilegios de uso del sistema");
         break;
    case "invitado":
    case "Invitado":
    case "INVITADO":
        console.log("Usted sólo tiene permisos de consultar datos");
         break;
    case "asistente":
    case "Asistente":
    case "ASISTENTE":
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
         break;   
    default:
        console.log("Debe especificar un perfil válido")     
}
