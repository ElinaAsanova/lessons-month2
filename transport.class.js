class Transport {
    constructor(name, mode, travelSpeed, ticketCost) {
        this.name = name;
        this.mode = mode;
        this.travelSpeed = travelSpeed;
        this.ticketCost = ticketCost;
    }

    startEngine() {
        console.log(`Do you like ${this.mode} ?`)
    }
}

class Airplane extends Transport {
    constructor(name, mode, travelSpeed, ticketCost, color){
        super (name, mode, travelSpeed, ticketCost);

    }
}
const Hawker_Siddeley = new Airplane (' Hawker Siddeley','Air transport', 'fast','expensive' )
console.log(Hawker_Siddeley);
Hawker_Siddeley.startEngine();



class Ship extends Transport {
    constructor(name, mode, travelSpeed, ticketCost, color) {
        super(name, mode, travelSpeed, ticketCost, color);
    }
}

const Titanic = new Ship ('Titanic','water transport', 'fast','cheap');
console.log(Titanic);
Titanic.startEngine();

class car extends Transport {
    constructor(name, mode, travelSpeed, ticketCost, color) {
        super(name, mode, travelSpeed, ticketCost, color);
    }
}

const bmv = new car('bmv', 'Road transport', 'fast', 'expensive');
console.log(bmv);
bmv.startEngine();










