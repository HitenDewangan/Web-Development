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

console.log("====================================");

// store functions in an array
const funArr =[
    function() {console.log("First")
        return "First was returned"
    },
    function() {console.log("Second")
        return "Second was returned"
    },
    function() {console.log("Third")
        return "Third was returned"
    },
    function() {console.log("Fourth")},
    function() {console.log("Fifth")}
]

funArr.forEach(fun => fun());
console.log("\n"+ funArr[2]());

console.log("====================================");

// write a function to return another function
function createGreeter(name){
    return () => console.log("Hello " + name);
}

const greet1 = createGreeter("John");
greet1();

// pass function as an argument
function greet2(functionName){
    functionName();
}

function sayHello(){
    console.log("Hello there");
}

greet2(sayHello);

// return a function from a function
function sport(time){
    if(time === "morning"){
        return swim;
    } else{
        return football;
    }
}

function swim(){
    console.log("Swimming");
}
function football(){    
    console.log("Football");
}

const sport1 = sport("morning");
sport1();
((sport("evening")))();