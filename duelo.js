//Clase padre
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

//Clases hijas
class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        //Check if the target is a unit card
        if (target instanceof Unit) {
            //reduce target res by power
            target.res -= this.power;
        } else {
            //Error
            throw new Error("La carta objetivo debe ser una unidad!!");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {

        //Check if the target is a unit card
        if (target instanceof Unit) {
            //Apply effect

            if (this.stat == "Resiliencia") {
                target.res += this.magnitude;
            } else {
                //Si no es resiliencia es poder
                target.power += this.magnitude;
            }


        } else {
            //Error
            throw new Error("La carta objetivo debe ser una unidad!!");
        }
    }
}

/** Crear tarjetas */

//Units
const ninja_cinturon_rojo = new Unit("Ninja Cinturón Rojo", 3, 3, 4);
const ninja_cinturon_negro = new Unit("Ninja Cinturón Negro", 4, 5, 4);

//Effects
const algoritmo_dificil = new Effect("Algoritmo Difícil", 2, "Aumentar la resistencia del objetivo en 3", "Resiliencia" , +3);
const rechazo_de_promesa_no_manejado = new Effect("Rechazo de promesa no manejado", 1, "Reducir la resistencia del objetivo en 2", "Resiliencia" , -2);
const programacion_en_pareja = new Effect("Programación en pareja", 3, "Aumentar el poder del objetivo en 2", "Poder" , +2);


//Play game

console.group("Start Game");
console.log(ninja_cinturon_rojo);
console.log(ninja_cinturon_negro);
console.groupEnd();

//Turno 1
algoritmo_dificil.play(ninja_cinturon_rojo);

//Turno 2
rechazo_de_promesa_no_manejado.play(ninja_cinturon_rojo);

//Turno 3
programacion_en_pareja.play(ninja_cinturon_rojo);
ninja_cinturon_rojo.attack(ninja_cinturon_negro);

console.group("End Game");
console.log(ninja_cinturon_rojo);
console.log(ninja_cinturon_negro);
console.groupEnd();
