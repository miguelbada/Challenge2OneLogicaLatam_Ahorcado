import { addPalabraSecreta } from "./lineaDePalabra.js";
import { verificarPalabra } from "./validacion.js"

let buttonAgregar = document.querySelector("#button-agregarPalabra");

buttonAgregar.addEventListener("click", function() {
    let palabra = document.querySelector("#input-palabra").value;

    addPalabraSecreta(verificarPalabra(palabra));
    document.querySelector("#input-palabra").value = "";
    
})
