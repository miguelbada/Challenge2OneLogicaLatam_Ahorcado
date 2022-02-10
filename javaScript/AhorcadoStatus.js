class AhorcadoStatus {
    constructor(nombre, nextStatus) {
        this.nombre = nombre;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class BaseHorca extends AhorcadoStatus {
    constructor() {
        super('BaseHorca', Horca1);
    }

    dibujarAhorcado() {
        baseHorca();
    }
}

class Horca1 extends AhorcadoStatus {
    constructor() {
        super('Horca1', Horca2);
    }

    dibujarAhorcado() {
        horca1();
    }
}

class Horca2 extends AhorcadoStatus {
    constructor() {
        super('Horca2', Horca3);
    }

    dibujarAhorcado() {
        horca2();
    }
}

class Horca3 extends AhorcadoStatus {
    constructor() {
        super('Horca3',Cabeza);
    }

    dibujarAhorcado() {
        horca3();
    }
}

class Cabeza extends AhorcadoStatus {
    constructor() {
        super('Cabeza', Cuerpo);
    }

    dibujarAhorcado() {
        cabeza();
    }
}

class Cuerpo extends AhorcadoStatus {
    constructor() {
        super('Cuerpo', BrazoDerecho);
    }

    dibujarAhorcado() {
        cuerpo();
    }
}

class BrazoDerecho extends AhorcadoStatus {
    constructor() {
        super('BrazoDerecho', BrazoIzquierdo);
    }

    dibujarAhorcado() {
        brazoDerecho();
    }
}

class BrazoIzquierdo extends AhorcadoStatus {
    constructor() {
        super('BrazoIzquierdo',PieDerecho);
    }

    dibujarAhorcado() {
        brazoIzquierdo();
    }
}

class PieDerecho extends AhorcadoStatus {
    constructor() {
        super('PieDerecho', PieIzquierdo);
    }

    dibujarAhorcado() {
        pieDerecho();
    }
}

class PieIzquierdo extends AhorcadoStatus {
    constructor() {
        super('PieIzquierdo', PieIzquierdo);
    }

    dibujarAhorcado() {
        pieIzquierdo();
    }
}