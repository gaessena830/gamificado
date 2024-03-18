//seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");

//en n1 y n2 voy a guardar los números aleatorios de cada operación
let n1, n2;

//función para generar una nueva operación de resta
function nuevaResta() {
    //generamos dos números aleatorios entre 5 y 10
    n1 = parseInt(Math.random() * 5 + 5);
    //generamos un número aleatorio entre 0 y 5
    n2 = parseInt(Math.random() * 5);
    //asignamos los números a las etiquetas
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    //colocamos el cursor en el input
    respuesta_usuario.focus();
}

//función para realizar la corrección de la respuesta
function corregir() {
    //si el usuario no ha ingresado nada no continuo
    if (respuesta_usuario.value === "") {
        return;
    }

    //armo la operación que se generó en una variable y veo cuál es su resultado
    let operacion = n1 + " - " + n2;
    let solucion = n1 - n2;

    //creo un elemento i para agregar el icono de correcto o incorrecto
    var i = document.createElement("i");
    //controlo si coincide lo que el usuario respondió con la solución
    if (parseInt(respuesta_usuario.value) === solucion) {
        i.className = "fa-regular fa-face-grin";
    } else {
        i.className = "fa-regular fa-face-frown";
    }

    //agrego el elemento al contenedor de las correcciones
    msj_correccion.appendChild(i);

    //limpio el input
    respuesta_usuario.value = "";

    //generamos una nueva operación de resta después de un breve retraso
    setTimeout(nuevaResta, 1000);
}

//agregamos al input el evento onkeydown para detectar cuando se presiona Enter y 
//llamar directamente a la función corregir()
respuesta_usuario.onkeydown = function(e) {
    var ev = document.all ? window.event : e;
    if (ev.keyCode == 13) {
        corregir();
    }
}

//inicialización del juego con la primera operación de resta
nuevaResta();