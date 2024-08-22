function usurio() {
    var nombre = document.getElementById("user").value;
    localStorage.setItem("name", nombre);
    window.location.href = '../TRIVIA/seccion.html';
}