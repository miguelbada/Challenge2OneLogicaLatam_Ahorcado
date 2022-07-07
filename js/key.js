import { palabraSecreta, dibujarLetra } from "./lineaDePalabra.js";

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var key = "";
var keys = [];

const COOR_X = 570;
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

function isKey() {

    return keys.includes(key);
}

function addKey() {
    if(!keys.includes(key)) {
        keys.push(key);
    }
}

function dibujarKey() {
    if(isDibujar() && !isKey()) {
        dibujarLetra();
        addKey(key);
    } else if(!isKey() && !isDibujar()) {
        dibujarKeyPantalla();
    }
}

function dibujarKeyPantalla() {
        pincel.font = '90px serif';
        pincel.fillStyle = "black";
        pincel.fillText(key, coorX, COOR_Y);
        coorX+= 70;
}

function resetKeysYCoorX() {
    coorX = COOR_X;
    keys = [];
}

export {resetKeysYCoorX, setKey, dibujarKey, isDibujar, isKey, addKey, key}
