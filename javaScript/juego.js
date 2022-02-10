var ahorcado = new Ahorcado();
var aciertos = 0;
var desaciertos = 0;

ahorcado.dibujar();

function isFinDelJuego() {

    return (ahorcado.getNombre === "PieIzquierdo") || (desaciertos >= palabraSecreta.length);   
}

function isGanador() {

    return aciertos == palabraSecreta.length;
}



function prepararHorca() {

    if(!isDibujar()) {
        ahorcado.nextState();
        ahorcado.dibujar();
        desaciertos++;
    }
    
    dibujarKey();
    aciertos++;
}
