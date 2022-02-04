var palabrasSecretas = ["canguro", "astronauta", "camarote", "arboleda", "ciencia", "antena", "javascript"];

function palabraSecreta() {
    let indice = Math.floor(Math.random() * palabrasSecretas.length);
    
    return palabrasSecretas[indice];
}

function addPalabra(palabra) {
    palabrasSecretas.push(palabra);
}
