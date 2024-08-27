# ChallengeONE
Challenge del encriptador, desafio ONE-Alura
Autor: Jorge Díaz Constanzo
https://github.com/jdiazcons/ChallengeONE.git

1. Elementos clave del HTML y su referencia en JavaScript
El JavaScript interactúa con los elementos del DOM (Document Object Model) del HTML para manipular el contenido y las acciones del usuario. Los elementos clave son:
•	Textareas: Para ingresar el texto que será encriptado o desencriptado, y para mostrar el resultado.
o	textarea.text-area: Donde el usuario ingresa el texto original.
o	textarea.mensaje: Donde se muestra el texto encriptado o desencriptado.
•	Botones: Para realizar las acciones de encriptar, desencriptar y copiar.
o	button.btn-encriptar: Botón para encriptar el texto.
o	button.btn-desencriptar: Botón para desencriptar el texto.
o	button.btn-copiar: Botón para copiar el resultado al portapapeles.
2. Funciones JavaScript
a. Encriptar texto

INICIO CODIGO
````function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}````

TERMINO CODIGO


•	Función: Esta función toma un texto como parámetro y reemplaza cada vocal según las "llaves" de encriptación definidas.
•	Método replace: Utiliza expresiones regulares (como /e/g) para buscar todas las ocurrencias de cada vocal en el texto y las reemplaza con su correspondiente encriptación.
b. Desencriptar texto
//CODIGO
function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}
//TERMINO CODIGO

•	Función: Hace lo opuesto a la función de encriptar. Reemplaza las secuencias de encriptación con las vocales originales.
c. Copiar texto al portapapeles

//INICIO CODIGO
function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
•	Función: Selecciona el texto dentro del textarea de resultado (.mensaje) y lo copia al portapapeles usando document.execCommand("copy").
•	Alerta: Muestra un mensaje al usuario confirmando que el texto fue copiado.
3. Asignación de Eventos
Finalmente, el JavaScript debe escuchar los eventos de clic en los botones y ejecutar las funciones correspondientes:

INICIO CODIGO
document.querySelector(".btn-encriptar").addEventListener("click", function() {
    const texto = document.querySelector(".text-area").value;
    document.querySelector(".mensaje").value = encriptar(texto);
});

document.querySelector(".btn-desencriptar").addEventListener("click", function() {
    const texto = document.querySelector(".text-area").value;
    document.querySelector(".mensaje").value = desencriptar(texto);
});

document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);
//TERMINO CODIGO


•	Eventos click: Se agregan listeners a los botones para que cuando el usuario haga clic, se ejecuten las funciones de encriptar, desencriptar o copiar, dependiendo del botón presionado.
4. Flujo de Trabajo
1.	Encriptar: El usuario ingresa el texto, presiona "Encriptar" y el texto se transforma utilizando la función de encriptar. El resultado aparece en el segundo textarea.
2.	Desencriptar: El usuario puede pegar o escribir el texto encriptado, presiona "Desencriptar" y el texto se transforma a su versión original.
3.	Copiar: El usuario presiona "Copiar" para guardar el texto encriptado o desencriptado en el portapapeles.

