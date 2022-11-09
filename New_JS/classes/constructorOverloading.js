class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

}

class Rabbit extends Animal {

    constructor(name, earLength) {
        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }


}
let rabbit = new Rabbit("White Rabbit", 10);