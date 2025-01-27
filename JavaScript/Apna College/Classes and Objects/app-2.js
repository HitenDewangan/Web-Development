class ToyotaCar {
    constructor(brand, mileage ) {
        console.log("Car created");
        this.brand = brand;
        this.mileage = mileage;
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

let fortuner = new ToyotaCar("HIDED", 117); // constructor
// fortuner.setBrand("Toyota");
// fortuner.start();
// fortuner.stop();
console.log(fortuner);


let lexus = new ToyotaCar();  // constructor
// lexus.setBrand("MEkada");
console.log(lexus);