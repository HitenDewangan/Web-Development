function divide(a, b) {
    console.log(a / b);
}


divide(48, 2);
divide(2, 0);

function divideWithError(a, b) {
    try {
        if(b==0){
            throw new Error("Cannot divide by zero");
        }
        console.log(a / b);
    }
    catch (error) {
        console.log("can't divide by zero !!!");
        console.log(error.message);
    }
}

divideWithError(2, 0);