var buttonAgregar = document.querySelector("#button-agregarPalabra");

buttonAgregar.addEventListener("click", function() {
    var palabra = document.querySelector("#input-palabra").value;

    addPalabraSecreta(palabra);
    document.querySelector("#input-palabra").value = "";
    
})
