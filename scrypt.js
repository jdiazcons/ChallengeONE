// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let mensaje = document.querySelector('.mensaje');
    mensaje.select();
    document.execCommand('copy');
}

// Función para actualizar el estilo del textarea basado en el contenido
function actualizarEstiloTexto() {
    let mensaje = document.querySelector('.mensaje');
    if (mensaje.value.length > 0) {
        // Si hay texto en el campo, eliminar la imagen de fondo
        mensaje.style.backgroundImage = 'none';
    } else {
        // Si el campo está vacío, mostrar la imagen de fondo
        mensaje.style.backgroundImage = 'url("imagenes/muneco.png")';
    }
}

// Asignar eventos a los botones
document.querySelector('.btn-encriptar').addEventListener('click', () => {
    let texto = document.querySelector('.text-area').value;
    let textoEncriptado = encriptarTexto(texto);
    document.querySelector('.mensaje').value = textoEncriptado;
    actualizarEstiloTexto(); // Actualizar estilo después de encriptar
});

document.querySelector('.btn-desencriptar').addEventListener('click', () => {
    let texto = document.querySelector('.text-area').value;
    let textoDesencriptado = desencriptarTexto(texto);
    document.querySelector('.mensaje').value = textoDesencriptado;
    actualizarEstiloTexto(); // Actualizar estilo después de desencriptar
});

document.querySelector('.btn-copiar').addEventListener('click', copiarTexto);
