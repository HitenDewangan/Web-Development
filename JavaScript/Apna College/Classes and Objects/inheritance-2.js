class Person {
    constructor() {
        this.species = "Homo sapiens";
    }

    eat() {
        console.log("I am eating");
    }

    sleep() {
        console.log("I am sleeping");
    }

    work() {
        console.log("Eat, Sleep, repeat...Do nothing");
    }
}

class Student extends Person {
    constructor() {
        console.log("child created");
        super();
        this.name = "John";
        this.world = "School";
    }

    study() {
        console.log("Study and get placement");
    }
}

class MartialArtist extends Person {
    constructor(name) {
        super();
        this.name = name;
        this.species = "Super human";
        this.arsenal = "Sword";
        this.tricks = ["kick", "punch", "tornado kick", "arial kick", "B-twist"];
    }

    train() {
        console.log("Train hard");
    }

    fight() {
        console.log("I am fighting");
    }
}

class Ninja extends MartialArtist {
    constructor() {
        super("Ninja HAthori"); // to invoke parent constructor
    }

    train() {
        super.sleep();
        console.log("wake up, and train hard");
    }
}

let s = new Student();

let m = new MartialArtist();

let n = new Ninja();