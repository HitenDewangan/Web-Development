// assign a function to a variable
const greet = function(name){
    console.log("Hello " + name);
}

greet("John");

// set them as object properties
const obj = {
    name : "Hided",
    age : 20,
    greet: function(name){
        console.log("Hello " + this.name);
    }
}

obj.greet("John");

// set them as object methods
const obj2 = {
    name : "Hided",
    age : 20,
    greet(){
        console.log("Hello " + this.name);
    }
}

obj2.greet("John");

// how can i use this in a way so that if no para are provided then it uses this.name otherwise it uses the parameters provided
const obj3 = {
    name : "Hided",
    age : 20,
    greet(name){
        if(name){
            console.log("Hello " + name);
        } else {
            console.log("Hello " + this.name);
        }
    }
}

obj3.greet("John");

// using default parameters
const obj4 = {
    name : "Hided",
    age : 20,
    greet(name = this.name){
        console.log("Hello " + name);
    }
}

obj4.greet("Alan");