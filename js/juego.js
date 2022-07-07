import terminarJuego from "./butoon-inicioAhorcado.js";
import { dibujarKey, isDibujar, isKey, addKey, key } from "./key.js";
import { palabraSecreta, aciertos, pincel } from "./lineaDePalabra.js";
import Ahorcado from "./Ahorcado.js";
import { finJuego, ganador } from "./canvas.js";

var ahorcado = new Ahorcado();
var background = "#b3daff";

function isFinDelJuego() {

    return (ahorcado.getNombre === "PieIzquierdo");   
}

function isGanador() {

    return aciertos == palabraSecreta.length;
}

function verificarFinDelJuego() {

    if(isGanador()) {
        ganador();
        terminarJuego();
    } else if (isFinDelJuego()) { 
        finJuego();
        terminarJuego();
    } 
}

function prepararHorca() {
    dibujarKey();

    if(!isDibujar() && !isKey()) {
        ahorcado.nextState();
        ahorcado.dibujar();
        addKey(key);
    }
    
    verificarFinDelJuego();    
}

function pantallaHorca() {
    pincel.clearRect(0, 0, 1200, 800);
    pincel.fillStyle = background;
    pincel.fillRect(0, 0, 1200, 800);
}

function resetAhorcado() {
    ahorcado = new Ahorcado();
    ahorcado.dibujar();
}

pantallaHorca();

export {pantallaHorca, resetAhorcado, prepararHorca};
