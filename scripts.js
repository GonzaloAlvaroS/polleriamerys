
// TARJETAS MENU //

const overlay = document.getElementById("overlay");

// Abrir tarjeta
document.querySelectorAll("#section3-A").forEach(item => {
    item.addEventListener("click", () => {
        overlay.classList.add("active");
    });
});

// Cerrar tarjeta haciendo click fuera
overlay.addEventListener("click", (e) => {
    if (e.target.id === "overlay") {
        overlay.classList.remove("active");
    }
});

//////////////////////////////////////////////////////////////////////////////

const overlay2 = document.getElementById("overlay2");

// Abrir tarjeta
document.querySelectorAll("#section3-B").forEach(item => {
    item.addEventListener("click", () => {
        overlay2.classList.add("active");
    });
});

// Cerrar tarjeta haciendo click fuera
overlay2.addEventListener("click", (e) => {
    if (e.target.id === "overlay2") {
        overlay2.classList.remove("active");
    }
});

//////////////////////////////////////////////////////////////////////////////

const overlay3 = document.getElementById("overlay3");

// Abrir tarjeta
document.querySelectorAll("#section3-C").forEach(item => {
    item.addEventListener("click", () => {
        overlay3.classList.add("active");
    });
});

// Cerrar tarjeta haciendo click fuera
overlay3.addEventListener("click", (e) => {
    if (e.target.id === "overlay3") {
        overlay3.classList.remove("active");
    }
});

//////////////////////////////////////////////////////////////////////////////

const overlay4 = document.getElementById("overlay4");

// Abrir tarjeta
document.querySelectorAll("#section3-D").forEach(item => {
    item.addEventListener("click", () => {
        overlay4.classList.add("active");
    });
});

// Cerrar tarjeta haciendo click fuera
overlay4.addEventListener("click", (e) => {
    if (e.target.id === "overlay4") {
        overlay4.classList.remove("active");
    }
});

//////////////////////////////////////////////////////////////////////////////

function obtenerProximoJueves() {
    const hoy = new Date();

    // Jueves = 4 (Domingo = 0)
    let diasHastaJueves = (4 - hoy.getDay() + 7) % 7;

    // Si hoy es jueves, tomar el siguiente jueves
    if (diasHastaJueves === 0) {
        diasHastaJueves = 7;
    }

    const proximoJueves = new Date(hoy);

    proximoJueves.setDate(hoy.getDate() + diasHastaJueves);
    proximoJueves.setHours(23, 59, 59, 999);

    return proximoJueves.getTime();
}

let fechaFin = obtenerProximoJueves();

function actualizarContador() {
    const ahora = Date.now();

    // Reiniciar automáticamente al siguiente jueves
    if (ahora >= fechaFin) {
        fechaFin = obtenerProximoJueves();
    }

    const diferencia = fechaFin - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

// Ejecutar inmediatamente
actualizarContador();

// Actualizar cada segundo
setInterval(actualizarContador, 1000);

//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    menuToggle.addEventListener("click", function () {
        navbarLinks.classList.toggle("active");
    });

});

//////////////////////////////////////////////////////////////////////////////