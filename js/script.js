function next_user() {
    var nombre = document.getElementById("user").value;
    localStorage.setItem("name", nombre);
    window.location.href = '../cole/conoc.html';
}

//nombre del usuario//

function agregar_nombre() {
    var anterior = document.getElementById("hola");
    var actual = localStorage.getItem("name");
    var mensaje = '<span> ahora elija una opcion para comenzar</span>';
    actual = actual + mensaje; 
    anterior.innerHTML = anterior.innerHTML + actual;

}
agregar_nombre(); 

//conocimiento enlace//

function next_pag1() {
    window.location.href = '../cole/conocimiento_prev/previo.html';
    
}
function next_pag2() {
    window.location.href = '../cole/0cono.html';
    
}



