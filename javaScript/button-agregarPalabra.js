var buttonAgregar = document.querySelector("#button-agregarPalabra");

buttonAgregar.addEventListener("click", function() {
    var palabra = document.querySelector("#input-palabra").value;

    addPalabra(palabra);
})
