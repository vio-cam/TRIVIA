var preguntas = [
    "¿Quién inventó la bombilla?",
    "¿Cual era el animal principal que los egipcios idolatraban?",
    "¿Qué países se enfrentaron en la guerra fría?",
    "¿En qué país se usó la primera bomba atómica?",
    "¿En qué año se produjo la Revolución Francesa?"
]
var opciones = [
    ["Thomas Edison",
        "Nikola Tesla",
        "Albert Einstein"],
    ["Apis",
        "Gato",
        "Perro"],
    ["China y el sol naciente",
        "Estados Unidos y la Unión Soviética.",
        "Rusia y Japón"],
    ["Ucrania",
        "Rusia",
        "Japon"],
    ["En 1799",
        "En 1789",
        "En 1777"],
];

var puntajePorOpcion = [
    [4, 0, 0],
    [4, 0, 0],
    [0, 4, 0],
    [0, 0, 4],
    [0, 4, 0],
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
    if (puntaje = 20) {
        result = "<span id='bueno'>Eres Einstein?</span>";
    } else if (puntaje > 16) {
        result = "<span id='aceptable'>Muy Bien!</span>";
    } else if (puntaje > 12) {
        result = "<span id='regular'>Puedes mejorar </span>";
    } else {
        result = "<span id='malo'>Suerte para la proxima</span>"
    }

    div.innerHTML += `<p style='font-size: 25px'>Tu puntaje es de ${puntaje} ${result}</p>`
}