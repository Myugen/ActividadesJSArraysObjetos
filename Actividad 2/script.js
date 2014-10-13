//Clase
function videoMusical(titulo, artista, propietario, segundos) {
    this.titulo = titulo;
    this.artista = artista;
    this.propietario = propietario;
    this.segundos = segundos;
}

videoMusical.prototype.mostrarConsola = function () {
    console.log("Has visto todos los " + this.segundos + " segundos de " + this.titulo + ".");
}

videoMusical.prototype.escuchaste = function () {
    console.log("Has escuchado " + this.titulo + " de " + this.artista + ".");
}

//Main
var colecciónVideos = new Array();
var salir = false;
while (!salir) {
    var correcto = false;
    while (!correcto) {
        var opcion = parseInt(prompt("MENÚ:\n[1]Introduce tu vídeo musical.\n[2]Muestra tu colección.\n[0]Salir.\nElija una opción:"));
        if (isNaN(opcion))
            alert("La opción introducida no es numérica");
        else
            correcto = true;
    }
    switch (opcion) {
    case 1:
        if (colecciónVideos.length < 5) {
            var titulo = prompt("Titulo: ");
            var artista = prompt("Artista");
            var propietario = prompt("Propietario:");
            var correcto = false;
            while (!correcto) {
                var segundos = parseInt(prompt("Segundos"));
                if (isNaN(segundos))
                    alert("La opción introducida no es numérica");
                else
                    correcto = true;
                var videoNuevo = new videoMusical(titulo, artista, propietario, segundos);
                videoNuevo.mostrarConsola();
                colecciónVideos.push(videoNuevo);
            }
        } else
            alert("Tu colección está llena, no es posible introducir otro vídeo.");
        break;
    case 2:
        for (var i = 0; i < colecciónVideos.length; i++)
            colecciónVideos[i].escuchaste();
        break;
    case 0:
        salir = true;
        break;
    default:
        alert("No existe opción con ese valor.");
    }
}