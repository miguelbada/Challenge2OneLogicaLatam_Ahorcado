function isValidkey(evento) {

    return /[a-z ]/gm.test(evento.key) && evento.keyCode >= 65 && evento.keyCode <= 90; 
}

function verificarPalabra(palabra) {

    return palabra.toLowerCase();
}

export {isValidkey, verificarPalabra};