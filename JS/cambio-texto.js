const palabras = [
    { texto: "cambioo", clase: "amarillo" },
    { texto: "futuroo", clase: "azul" }
];
let palabraIndex = 0;
let letraIndex = 0;
let actualPalabra = "";
let borrando = false;

function escribirTexto() {
    const span = document.getElementById("cambio-texto");

    if (!borrando) {
        actualPalabra = palabras[palabraIndex].texto.substring(0, letraIndex + 1);
        letraIndex++;

        if (letraIndex === palabras[palabraIndex].texto.length) {
            borrando = true;
            setTimeout(escribirTexto, 1500); // Pausa antes de borrar
            return;
        }
    } else {
        actualPalabra = palabras[palabraIndex].texto.substring(0, letraIndex - 1);
        letraIndex--;

        if (letraIndex === 0) {
            borrando = false;
            palabraIndex = (palabraIndex + 1) % palabras.length;
            span.className = palabras[palabraIndex].clase; // Cambia color
        }
    }

    span.textContent = actualPalabra;
    setTimeout(escribirTexto, borrando ? 150 : 200); // Velocidad de escritura/borrado
}

escribirTexto();
