// Seleccionamos los elementos del DOM
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const respuesta_usuario = document.querySelector("#respuesta_usuario");
const msj_correccion = document.querySelector("#msj_correccion");

// Función para generar una nueva operación de división
function nuevaDivision() {
    // Generamos dos números aleatorios entre 2 y 10 para garantizar divisiones exactas
    const divisor = Math.floor(Math.random() * 9) + 2; // Divisor
    const dividendo = divisor * (Math.floor(Math.random() * 9) + 2); // Dividendo (múltiplo del divisor)
    
    // Asignamos los números a las etiquetas
    num1.textContent = dividendo;
    num2.textContent = divisor;
    
    // Limpiamos el input
    respuesta_usuario.value = "";
    
    // Colocamos el cursor en el input
    respuesta_usuario.focus();
}

// Función para realizar la corrección de la respuesta
function corregir() {
    // Si el usuario no ha ingresado nada, no continuamos
    if (!respuesta_usuario.value) {
        return;
    }

    // Convertimos la respuesta del usuario a número de punto flotante (float)
    const respuestaFloat = parseFloat(respuesta_usuario.value);
    if (isNaN(respuestaFloat)) {
        return;
    }

    // Obtenemos los valores del dividendo y el divisor
    const dividendo = parseInt(num1.textContent);
    const divisor = parseInt(num2.textContent);

    // Calculamos la solución
    const solucion = dividendo / divisor;

    // Creamos un elemento i para agregar el icono de correcto o incorrecto
    const i = document.createElement("i");

    // Controlo si coincide lo que el usuario respondió con la solución
    if (respuestaFloat === solucion) {
        i.className = "fa-regular fa-face-grin";
    } else {
        i.className = "fa-regular fa-face-frown";
    }

    // Agregamos el elemento al contenedor de las correcciones
    msj_correccion.appendChild(i);

    // Generamos una nueva operación de división después de un breve retraso
    setTimeout(nuevaDivision, 1000);
}

// Agregamos al input el evento onkeydown para detectar cuando se presiona Enter y 
// llamar directamente a la función corregir()
respuesta_usuario.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        corregir();
    }
});

// Inicialización del juego con la primera operación de división
nuevaDivision();