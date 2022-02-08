var palabrasSecretas = ["canguro", "astronauta", "camarote", "arboleda", "ciencia", "antena", "javascript"];
var palabraSecreta = "";

function palabraSecretaRandom() {
    var indice = Math.floor(Math.random() * palabrasSecretas.length);
    
    return palabrasSecretas[indice];
}

function addPalabraSecreta(palabra) {
    palabrasSecretas.push(palabra);
}

function getPalabraSecreta() {
    return palabraSecreta;
}

function setPalabraSecreta() {
    palabraSecreta = palabraSecretaRandom();
}
