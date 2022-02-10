var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function myFunction(event) {
    var x = event.key;
    pincel.font = '100px serif';
    pincel.fillText(x, 100, 100);
}


pincel.lineWidth = 5;

function linea(contexto, inicioX, inicioY, finX, finY) {
    contexto.beginPath();
    contexto.moveTo(inicioX, inicioY);
    contexto.lineTo(finX, finY);
    contexto.closePath();
    contexto.stroke();
}

function baseHorca() {
    pincel.beginPath();
    pincel.moveTo(100, 700);
    pincel.lineTo(100 + 50 * 1.7, 700 + 50);
    pincel.lineTo(100 - 50 * 1.7, 700 + 50);
    pincel.closePath();
    pincel.stroke();
}

function horca1() {
    linea(pincel, 100, 700, 100, 100);
}

function horca2() {
    linea(pincel, 100, 100, 400, 100);
}

function horca3() {
    linea(pincel, 400, 100, 400, 200);
}

function cabeza() {
    pincel.beginPath();
    pincel.arc(400, 250 ,50, 0 ,2 * Math.PI);
    pincel.stroke();
}

function cuerpo() {
    linea(pincel, 400, 300, 400, 500);
}

function brazoDerecho() {
    linea(pincel, 400, 310, 340, 350);
}

function brazoIzquierdo() {
    linea(pincel, 400, 310, 460, 350);
}

function pieDerecho() {
    linea(pincel, 400, 500, 330, 600);
}

function pieIzquierdo() {
    linea(pincel, 400, 500, 470, 600);
}
