var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var key = "";

const COOR_X = 550;
const COOR_Y = 250;

var coorX = COOR_X;

function setKey(letra) {
    key = letra;
}

function getKey() {

    return key;
}

function isDibujar() {

    return palabraSecreta.includes(key);
} 

function dibujarKey() {

    isDibujar() ? dibujarLetra() : dibujarKeyPantalla();
}

function dibujarKeyPantalla() {
        pincel.font = '90px serif';
        pincel.fillStyle = "black";
        pincel.fillText(key, coorX, COOR_Y);
        coorX+= 70;
}
