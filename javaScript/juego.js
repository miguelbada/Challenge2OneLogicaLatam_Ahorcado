var ahorcado = new Ahorcado();
var background = "#b3daff";

ahorcado.dibujar();

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
    ahorcado.dibujar();
}

function resetAhorcado() {
    ahorcado = new Ahorcado();
}

pantallaHorca();
