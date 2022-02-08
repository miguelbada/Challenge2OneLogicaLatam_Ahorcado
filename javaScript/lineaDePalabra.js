var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

let inicioLineaX = 250;

var palabraSecreta = getPalabraSecreta();



pincel.fillStyle = "grey";
pincel.fillRect(250, 650, 1000 ,100); // rectangulo de palabra secreta



//linea(pincel, inicioX, inicioY, 700, 100);
pincel.fillStyle = "black";

function dibujarCuadrados(numero) {
    let inicio = inicioLineaX;

    for(var i = 0; i < numero; i++) {
        pincel.fillRect(inicio, 743, 55, 7);
        inicio+= 65;
    }
}

/* function dibujarPalabra() {
    let inicio = inicioLineaX;

    for(var i = 0; i < palabraSecreta.length; i++) {
        pincel.font = '100px serif';
        pincel.fillText(palabraSecreta[i], inicio, 725);
        inicio+= 65;
    }
} */

function dibujarLetra() {
    let inicio = inicioLineaX;

    pincel.font = '100px serif';
    pincel.fillStyle = "black";

    for(var i = 0; i < palabraSecreta.length; i++) {
        if(palabraSecreta[i] == key) {
            pincel.fillText(palabraSecreta[i], inicio, 725);
        }
        
        inicio+= 65;
    }
}
