var ahorcado = new Ahorcado();

ahorcado.dibujar();

function prepararHorca() {

    if(!isDibujar()) {
        ahorcado.nextState();
        ahorcado.dibujar();
    }
    
    dibujarKey();
}

document.addEventListener('keydown', function(event) {
    setKey(event.key);
    prepararHorca();
}, false);