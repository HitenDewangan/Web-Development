function sum(a,b) {
    console.log(a+b);    
}

function calculator(a, b, sumCallback) {
    sumCallback(a,b);
}

calculator(1, 7, sum);

calculator(2, 3, () => {
    console.log("Hello");
});