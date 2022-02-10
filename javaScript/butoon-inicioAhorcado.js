var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var buttonInicio = document.querySelector("#button-inicioAhorcado");
var capturarKey = document;

function terminarJuego() {
    capturarKey.removeEventListener("keydown", preparacionJuego);
}

function preparacionJuego(evento) {
    setKey(evento.key);
    prepararHorca();
}

buttonInicio.addEventListener("click", function() {
    pantallaHorca();
    resetKeysYCoorX();
    resetAhorcado();
    setPalabraSecreta();
    dibujarGuiones(getPalabraSecreta().length);

    capturarKey.addEventListener("keydown", preparacionJuego);
})

