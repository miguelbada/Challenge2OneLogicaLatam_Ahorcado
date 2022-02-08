var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var buttonInicio = document.querySelector("#button-inicioAhorcado");

buttonInicio.addEventListener("click", function() {
    pincel.clearRect(250, 650, 1000 ,100);
    setPalabraSecreta();
    dibujarCuadrados(getPalabraSecreta().length);
})
