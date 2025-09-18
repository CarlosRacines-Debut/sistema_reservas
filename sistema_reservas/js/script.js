function login(event) {
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    if (usuario === "admin" && clave === "1234") {
        window.location.href = "menu.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function registrar(event) {
    event.preventDefault();
    let usuario = document.getElementById("nuevoUsuario").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("nuevaClave").value;
    let confirmar = document.getElementById("confirmarClave").value;

    if (clave !== confirmar) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    alert("Usuario " + usuario + " registrado con éxito ✅");
    window.location.href = "index.html";
}

function reservar(event) {
    event.preventDefault();
    let paciente = document.getElementById("paciente").value;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    alert("Reserva confirmada para " + paciente + " el " + fecha + " a las " + hora);
    window.location.href = "menu.html";
}
