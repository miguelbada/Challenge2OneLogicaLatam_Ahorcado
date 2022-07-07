import { key } from "./key.js";

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

const INICIO_LINEA_X = 250;

var palabrasSecretas = ["canguro", "astronauta", "camarote", "arboleda", "ciencia", "antena", "javascript"];
var palabraSecreta = "";
var aciertos = 0;

function palabraSecretaRandom() {
    var indice = Math.floor(Math.random() * palabrasSecretas.length);
    
    return palabrasSecretas[indice];
}

function isPalabraSecreta(palabra) {

    return palabrasSecretas.includes(palabra);
}

function addPalabraSecreta(palabra) {
    if(!isPalabraSecreta(palabra) && !(palabra == "")) {
        palabrasSecretas.push(palabra)
    }
}

function getPalabraSecreta() {
    return palabraSecreta;
}

function setPalabraSecreta() {
    palabraSecreta = palabraSecretaRandom();
    aciertos = 0;
}


pincel.fillStyle = "black";
pincel.font = '90px serif';

function dibujarGuiones(numero) {
    let inicio = INICIO_LINEA_X;

    pincel.fillStyle = "black";
    for(var i = 0; i < numero; i++) {
        pincel.fillRect(inicio, 743, 55, 7);
        inicio+= 70;
    }
}

function dibujarLetra() {
    let inicio = INICIO_LINEA_X;

    for(var i = 0; i < palabraSecreta.length; i++) {
        if(palabraSecreta[i] == key) {
            pincel.fillText(palabraSecreta[i], inicio, 725);
            aciertos++;
        }
        
        inicio+= 70;
    }
}

export {setPalabraSecreta, dibujarGuiones, dibujarLetra, getPalabraSecreta, addPalabraSecreta, palabraSecreta, aciertos, pincel};
