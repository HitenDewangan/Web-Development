class ToyotaCar {
    constructor() {
        console.log("Car created");
    }
    start() {
        console.log("Starting the car");
    }

    stop() {
        console.log("Stopping the car");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Toyota");
fortuner.start();
fortuner.stop();

let lexus = new ToyotaCar();
lexus.setBrand("Lexus");