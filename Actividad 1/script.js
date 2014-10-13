function reservarBalcon(balcon, numeroAsientos) {
    if (numeroAsientos > balcon.asientosLibres) {
        alert("No hay disponible tantos asientos libres esta sección.");
    } else {
        balcon.asientosLibres -= numeroAsientos;
        var i = 0;
        do {
            if (balcon.asientos[i]) {
                balcon.asientos[i] = false;
                numeroAsientos--;
            }
            i++;
        } while ((numeroAsientos > 0) && (i < balcon.asientos.length));
        alert("Reserva realizada con éxito.");
    }
    return balcon;
}

function reservarPatioButacas(patioButacas, numeroAsientos) {
    if (numeroAsientos > patioButacas.asientosLibres) {
        alert("No hay disponible tantos asientos libres esta sección.");
    } else {
        patioButacas.asientosLibres -= numeroAsientos;
        var i = 0;
        do {
            if (patioButacas.asientos[i]) {
                patioButacas.asientos[i] = false;
                numeroAsientos--;
            }
            i++;
        } while ((numeroAsientos > 0) && (i < patioButacas.asientos.length));
        alert("Reserva realizada con éxito.");
    }
    return patioButacas;
}

function mostrarDisponibilidad(patioButacas, balcon) {
    console.clear();
    console.log("LEYENDA:");
    console.log("Libre -> [ ]");
    console.log("Ocupado -> [X]");
    console.log("=================");
    console.log("PATIO DE BUTACAS:");
    var asiento = "";
    for (var i = 0; i < patioButacas.asientos.length; i++) {
        asiento += "[";
        if (patioButacas.asientos[i])
            asiento += " ";
        else
            asiento += "X";
        asiento += "] ";
    }
    console.log(asiento);
    console.log("BALCÓN:");
    asiento = "";
    for (var i = 0; i < balcon.asientos.length; i++) {
        asiento += "[";
        if (balcon.asientos[i])
            asiento += " ";
        else
            asiento += "X";
        asiento += "] ";
    }
    console.log(asiento);
}

function inicializar(patioButacas, balcon) {
    patioButacas.asientosLibres = patioButacas.asientos.length;
    balcon.asientosLibres = balcon.asientos.length;
    for (var i = 0; i < balcon.asientos.length; i++)
        balcon.asientos[i] = true;
    for (var i = 0; i < patioButacas.asientos.length; i++)
        patioButacas.asientos[i] = true;
}

var patioButacas = {};
patioButacas.asientosLibres = 0;
patioButacas.asientos = new Array(9);
var balcon = {};
balcon.asientosLibres = 0;
balcon.asientos = new Array(6);
inicializar(patioButacas, balcon);
var salir = false;
while (!salir) {
    var correcto = false;
    while (!correcto) {
        var opcion = parseInt(prompt("MENÚ:\n[1]Reservar en balcón.\n[2]Reservar en patio de butacas.\n[3]Mostrar disponibilidad de asientos.\n[0]Salir.\nElija una opción:"));
        if (isNaN(opcion))
            alert("La opción introducida no es numérica");
        else
            correcto = true;
    }
    switch (opcion) {
    case 1:
        if (balcon.asientosLibres == 0) {
            alert("Esta sección no tiene asientos disponibles. (Disponibles: " + balcon.asientosLibres + ")");
        } else {
            var correcto = false;
            while (!correcto) {
                var numeroAsientos = parseInt(prompt("Número de asientos a reservar:"));
                if (isNaN(numeroAsientos))
                    alert("La opción introducida no es numérica");
                else
                    correcto = true;
            }
            balcon = reservarBalcon(balcon, numeroAsientos);
        }
        break;
    case 2:
        if (patioButacas.asientosLibres == 0) {
            alert("Esta sección no tiene asientos disponibles. (Disponibles: " + patioButacas.asientosLibres + ")");
        } else {
            var correcto = false;
            while (!correcto) {
                var numeroAsientos = parseInt(prompt("Número de asientos a reservar:"));
                if (isNaN(numeroAsientos))
                    alert("La opción introducida no es numérica");
                else
                    correcto = true;
            }
            patioButacas = reservarPatioButacas(patioButacas, numeroAsientos);
        }
        break;
    case 3:
        mostrarDisponibilidad(patioButacas, balcon);
        break;
    case 0:
        salir = true;
        break;
    default:
        alert("No existe opción con ese valor.");
    }
}