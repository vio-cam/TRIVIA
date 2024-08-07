var puntaje = localStorage.getItem('puntaje');
var resultadoText = '';

if (puntaje > 24) {
  resultadoText = "Acaso eres Einstein?";
} else if (puntaje > 15) {
  resultadoText = "Muy Bien!";
} else if (puntaje > 11) {
  resultadoText = "Puedes mejorar";
} else {
  resultadoText = "Suerte para la próxima";
}

document.getElementById('resultado').innerHTML = `Tu puntaje es de ${puntaje} , ${resultadoText}`;
