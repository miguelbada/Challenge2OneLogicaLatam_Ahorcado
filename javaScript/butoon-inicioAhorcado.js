var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
const LETRAS_PERMITIDAS = "abcdefghijklmnñopqrstuvwxyz";

var buttonInicio = document.querySelector("#button-inicioAhorcado");
var capturarKey = document;

function terminarJuego() {
    capturarKey.removeEventListener("keydown", preparacionJuego);
}

function isLetrasPermitidas(letra) {
    let valor = false;
    for(var i=0; i < LETRAS_PERMITIDAS.length; i++) {
        if(LETRAS_PERMITIDAS[i] == letra) {
            valor = true;
        }
    }
    
    return valor;
}

function preparacionJuego(evento) {
    if(isLetrasPermitidas(evento.key)) {
        setKey(evento.key);
        prepararHorca();
    }
}

buttonInicio.addEventListener("click", function() {
    pantallaHorca();
    resetKeysYCoorX();
    resetAhorcado();
    setPalabraSecreta();
    dibujarGuiones(getPalabraSecreta().length);

    capturarKey.addEventListener("keydown", preparacionJuego);
})

