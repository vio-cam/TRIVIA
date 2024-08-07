function agregar_nombre() {
  var anterior = document.getElementById("saludo");
  var actual = localStorage.getItem("name");
  anterior.innerHTML = anterior.innerHTML + actual;
}
agregar_nombre(); 
