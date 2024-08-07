var preguntas = [
  "¿Cuál es el órgano más grande del ser humano?",
  "¿Cuál es la principal función de los glóbulos rojos en el cuerpo?",
  "¿Cuántos huesos tiene una persona adulta?",
  "¿Cuál es el hueso más grande del humano?",
  "¿Qué tipo de sangre es conocida a nivel mundial?"
];


var opciones = [
  ["El intestino grueso",
      "La piel",
      "El pulmón"],
  ["Transportar oxígeno a las células",
      "Producir hormonas",
      "Combatir infecciones"],
  ["206",
      "205",
      "204"],
  ["El fémur",
      "La tibia",
      "El húmero"],
  ["Tipo AB",
      "Tipo O",
      "Tipo A"],
];

var puntajePorOpcion = [
  [0, 4, 0],
  [4, 0, 0],
  [4, 0, 0],
  [4, 0, 0],
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
