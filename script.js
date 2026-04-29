const body = document.body;
const btnContraste = document.getElementById('btn-contraste');
const btnMas = document.getElementById('btn-mas');
const btnMenos = document.getElementById('btn-menos');
const avisos = document.getElementById('avisos');
const parrafo = document.getElementById('parrafo-ajustable');

let fontSize = 16;

// Alto contraste
btnContraste.addEventListener('click', () => {
    const activo = body.classList.toggle('alto-contraste');
    btnContraste.setAttribute('aria-pressed', activo);
    avisos.textContent = activo ? "Alto contraste activado" : "Alto contraste desactivado";
});

// Aumentar tamaño del párrafo
btnMas.addEventListener('click', () => {
    fontSize = Math.min(fontSize + 2, 24);
    parrafo.style.fontSize = fontSize + "px";
    avisos.textContent = "Tamaño de fuente aumentado a " + fontSize + " píxeles";
});

// Reducir tamaño del párrafo
btnMenos.addEventListener('click', () => {
    fontSize = Math.max(fontSize - 2, 12);
    parrafo.style.fontSize = fontSize + "px";
    avisos.textContent = "Tamaño de fuente reducido a " + fontSize + " píxeles";
});