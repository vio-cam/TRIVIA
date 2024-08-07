function usuario() {
    var nuevo = document.getElementById("usuario").value;
    localStorage.setItem("name", nuevo);
    window.location.href = '../TRIVIA/seccion.html';
}

