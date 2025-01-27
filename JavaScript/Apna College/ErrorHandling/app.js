let a = 5;
let b = 0;

console.log('a = ', a);
console.log('b = ', b);

console.log(a / b);

try {
    console.log(a / c);
} catch (error) {
    console.log(error.message);
}

console.log("Hello");
