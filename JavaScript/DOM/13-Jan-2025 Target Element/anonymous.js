function sum(a, b) {
    return a + b;
}

sum(3, 4);

const add = (a, b) => a + b;
add(3, 4);

// sum(a, b) is same as add(a, b)

function greet(name = "World") {
    console.log("Hello " + name);
}

greet("John");
greet();