var preguntas = [
    "¿En que continente se encuentra barbados?",
    "¿Cual es el pais mas poblado mundialmente?",
    "¿Pais más frio?",
    "¿Lago mas austral?",
    "¿Cual es el rio mas largo del mundo ?"
];

var opciones = [
    ["America del norte",
        "America del sur",
        "Asia"],
    ["Japón",
        "China",
        "Peru"],
    ["Polonia ",
        "Rusia",
        "Antartida"],
    ["Lago argentino",
        "Lago nilo",
        "Lago amazonas"],
    ["Rio nilo",
        "Rio Amazonas",
        "Rio Rimac"],
];

var puntajePorOpcion = [
    [4, 0, 0],
    [0, 4, 0],
    [0, 4, 0],
    [4, 0, 0],
    [4, 0, 0],
];

var puntaje = 0;
var i = 0;

function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    puntaje = puntaje + puntajePorOpcion[i][indice];
    i = i + 1;
    if (i < preguntas.length) {
        siguientePregunta();
    } else {
        //mostrarResultado();
        localStorage.setItem("puntaje", puntaje);
        window.location.href = '../TRIVIA/resultados.html';
    }
}

function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];

    document.getElementById("barra_progreso").value = i * 100 / preguntas.length;
}

siguientePregunta();
document.getElementById("op1").addEventListener("click", function() {
    actualizarPuntaje(1);
})
document.getElementById("op2").addEventListener("click", function() {
    actualizarPuntaje(2);
})
document.getElementById("op3").addEventListener("click", function() {
    actualizarPuntaje(3);
})


function mostrarResultado() {
    var div = document.getElementsByClassName("card")[0];
    div.innerHTML = "";

    document.getElementById("barra_progreso").value = i * 100 / (preguntas.length - 1);

    div.innerHTML += "<h3 class='resultado_titulo'>Resultado</h3>"
    if (puntaje > 18) {
        estiloVida = "<span id='estilo-excelente'>Acaso eres Einstein?</span>";
    } else if (puntaje > 15) {
        estiloVida = "<span id='estilo-bueno'>Muy Bien!</span>";
    } else if (puntaje > 11) {
        estiloVida = "<span id='estilo-aceptable'>Puedes mejorar</span>";
    } else {
        estiloVida = "<span id='estilo-malo'>Suerte para la proxima</span>"
    }

    div.innerHTML += `<p style='font-size: 25px'>Tu puntaje es de ${puntaje} , ${estiloVida}</p>`
}