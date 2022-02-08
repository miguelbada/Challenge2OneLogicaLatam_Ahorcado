var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var key = "";

//pincel.fillStyle = "yellow";
//pincel.fillRect(550, 250, 600 ,300); //rectangulo de letras presionadas
var coorX = 550;
var coorY = 250;

function setKey(letra) {
    key = letra;
}

function dibujarKey() {
    if(!palabraSecreta.includes(key)) {
        dibujarKeyPantalla();
    } else {
        dibujarLetra();
    }
}

function dibujarKeyPantalla() {
    pincel.fillText(key, 550, 250);
}

document.addEventListener('keydown', function(event) {
    setKey(event.key);
    dibujarKey();
}, false);


