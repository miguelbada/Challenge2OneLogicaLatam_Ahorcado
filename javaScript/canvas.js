var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 1200 ,800);

function myFunction(event) {
    var x = event.key;
    pincel.font = '100px serif';
    pincel.fillText(x, 100, 100);
  //document.getElementById("demo").innerHTML = "The pressed key was: " + x;

}


pincel.lineWidth = 5;

function triangulo(contexto, inicioX, inicioY, cateto) {
    contexto.beginPath();
    contexto.moveTo(inicioX, inicioY);
    contexto.lineTo(inicioX + cateto * 1.7, inicioY + cateto);
    contexto.lineTo(inicioX - cateto * 1.7, inicioY + cateto);
    contexto.closePath();
    contexto.stroke();
}

function linea(contexto, inicioX, inicioY, finX, finY) {
    contexto.beginPath();
    contexto.moveTo(inicioX, inicioY);
    contexto.lineTo(finX, finY);
    contexto.closePath();
    contexto.stroke();
}

function circulo(contexto, inicioX, inicioY, radio) {
    contexto.beginPath();
    contexto.arc(inicioX, inicioY ,radio, 0 ,2*Math.PI);
    contexto.stroke();
}

function dibujarHorca() {
    triangulo(pincel, 100, 700, 50);
    linea(pincel, 100, 700, 100, 100);
    linea(pincel, 100, 100, 400, 100);
    linea(pincel, 400, 100, 400, 200);
}

function dibujarPersona() {
    circulo(pincel, 400, 250, 50); //cabeza
    linea(pincel, 400, 300, 400, 500); //cuerpo
    linea(pincel, 400, 310, 340, 350); //brazo derecho
    linea(pincel, 400, 310, 460, 350); //brazo izquierdo
    linea(pincel, 400, 500, 330, 600); //pie derecho
    linea(pincel, 400, 500, 470, 600); //pie izquierdo
}

dibujarHorca();
dibujarPersona(); 
