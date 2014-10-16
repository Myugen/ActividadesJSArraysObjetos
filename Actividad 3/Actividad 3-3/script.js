//Clase Contacto
function Contacto(name, surname, mail, telephone, cellphone, twitter, linkedin) { //Constructor
    this.nombre = name;
    this.apellidos = surname;
    this.email = mail;
    this.telefonoCasa = telephone;
    this.telefonoMovil = cellphone;
    this.twitter = twitter;
    this.linkedin = linkedin;
}
//Métodos Get
Contacto.prototype.getNombre = function () {
    return this.nombre;
}
Contacto.prototype.getApellidos = function () {
    return this.apellidos;
}
Contacto.prototype.getEmail = function () {
    return this.email;
}
Contacto.prototype.getTelefonoCasa = function () {
    return this.telefonoCasa;
}
Contacto.prototype.getTelefonoMovil = function () {
    return this.telefonoMovil;
}
Contacto.prototype.getTwitter = function () {
    return this.twitter;
}
Contacto.prototype.getLinkedin = function () {
    return this.linkedin;
}

//Funciones
function introducirContacto(contacts) {
    var name = prompt("Nombre:");
    var surname = prompt("Apellidos:");
    var mail = prompt("Email:");
    var telephone = prompt("Teléfono (Casa):");
    var cellphone = prompt("Teléfono (Móvil):");
    var twitter = prompt("Twitter:");
    var linkedin = prompt("Linkedin:");
    contacts.push(new Contacto(name, surname, mail, telephone, cellphone, twitter, linkedin));
    alert("Contacto agregado.");
    return contacts;
}

function mostrarContactos(contacts) {
    if (contacts.length != 0) {
        for (var i = 0; i < contacts.length; i++) {
            var text = "Contacto Nº" + (i + 1) + "\n";
            text += "-Nombre: " + contacts[i].getNombre() + "\n";
            text += "-Apellidos: " + contacts[i].getApellidos() + "\n";
            text += "-Email: " + contacts[i].getEmail() + "\n";
            text += "-Teléfono (Casa): " + contacts[i].getTelefonoCasa() + "\n";
            text += "-Teléfono (Móvil): " + contacts[i].getTelefonoMovil() + "\n";
            text += "-Twitter: " + contacts[i].getTwitter() + "\n";
            text += "-Linkedin: " + contacts[i].getLinkedin() + "\n";
            text += "================================================\n\n";
            console.log(text);
        }
    } else {
        alert("La lista de contactos está vacía");
    }
}
//FUTURE: Convertir el menú en un método
//Main
var contactos = new Array();
var salir = false;
while (!salir) {
    var correcto = false;
    while (!correcto) {
        var opcion = parseInt(prompt("MENÚ:\n[1]Agregar contacto.\n[2]Mostrar contactos.\n[0]Salir.\nElija una opción:"));
        if (isNaN(opcion))
            alert("La opción introducida no es numérica");
        else
            correcto = true;
    }
    switch (opcion) {
    case 1:
        do {
            contactos = introducirContacto(contactos);
            var seguir = confirm("¿Desea introducir otro cliente?");
        } while (seguir);
        break;
    case 2:
        mostrarContactos(contactos);
        break;
    case 0:
        salir = true;
        break;
    default:
        alert("No existe opción con ese valor.");
    }
}