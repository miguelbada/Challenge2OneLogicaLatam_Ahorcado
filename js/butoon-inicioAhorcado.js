import { isValidkey } from "./validacion.js";
import { pantallaHorca, resetAhorcado, prepararHorca } from "./juego.js";
import { resetKeysYCoorX, setKey } from "./key.js";
import { setPalabraSecreta, getPalabraSecreta, dibujarGuiones } from "./lineaDePalabra.js";

var pantalla = document.querySelector("canvas");
/* var pincel = pantalla.getContext("2d"); */

var buttonInicio = document.querySelector("#button-inicioAhorcado");
var capturarKey = document;

function terminarJuego() {
    capturarKey.removeEventListener("keydown", preparacionJuego);
}


function preparacionJuego(evento) {

    if(isValidkey(evento)) {
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

export default terminarJuego;

