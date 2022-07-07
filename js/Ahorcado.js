import { BaseHorca } from "./AhorcadoStatus.js";

class Ahorcado {
    constructor() {
        this.state = new BaseHorca();
    }

    nextState() {
        this.state = this.state.next();
    }

    dibujar() {
        this.state.dibujarAhorcado();
    }

    get getNombre() {

        return this.state.nombre;
    }
}

export default Ahorcado;

