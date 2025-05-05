// Hoisting example
console.log(myVar); // undefined
var myVar = 5;
console.log(myVar); // 5

// Function hoisting
myFunction(); // "Hello, World!"
console.log(myFunction); // [Function: myFunction]
console.log(myFunction()); // "Hello, World!"

function myFunction() {
    console.log("Hello, World!");
}

// ================ Function expression (not hoisted) =================
try {
    myFuncExpr(); // Error: myFuncExpr is not a function
} catch (e) {
    console.error(e.message);
}

// myFuncExpr(); // Error: myFuncExpr is not a function
console.log(myFuncExpr); // undefined
// console.log(myFuncExpr()); // TypeError: myFuncExpr is not a function

var myFuncExpr = function() {
    console.log("This won't work!");
};

console.log(myFuncExpr); // [Function: myFuncExpr]
console.log(myFuncExpr()); // "This won't work!"
myFuncExpr(); // "This won't work!"



//  ============== Arrow function (not hoisted) (ES6) =================
try {
    myArrowFunc(); // Error: myArrowFunc is not a function
} catch (e) {
    console.error(e.message);
}

console.log(myArrowFunc); // undefined
// console.log(myArrowFunc()); // TypeError: myArrowFunc is not a function
// myArrowFunc(); // TypeError: myArrowFunc is not a function

var myArrowFunc = () => {
    console.log("This won't work!");
};

console.log(myArrowFunc); // [Function: myArrowFunc]
console.log(myArrowFunc()); // "This won't work!"
myArrowFunc(); // "This won't work!"

const myArrowFunc2 = () => {
    console.log("This is arrow fun 2!");
};
// ======================================= NOTES FROM ABOVE ==========================================
// 1. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// 2. Variable declarations (using var) are hoisted, but their initializations are not. This means that the variable is created in memory but not assigned a value until the line of code is executed.
// 3. Function declarations are hoisted, but their definitions are not. This means that the function is created in memory but not assigned a value until the line of code is executed.
// 4. Function expressions (using var, let, or const) are not hoisted. This means that the variable is created in memory but not assigned a value until the line of code is executed.
// 5. Arrow functions are also not hoisted. This means that the variable is created in memory but not assigned a value until the line of code is executed.
// 6. If you try to call a function or access a variable before it is declared, you will get an error or undefined value.
// 7. To avoid hoisting issues, it is recommended to declare variables and functions at the top of their scope or use let/const for block-scoped variables.
// 8. Hoisting can lead to confusion and bugs in your code, so it's important to understand how it works and how to avoid it.
// 9. Use strict mode to prevent hoisting issues and enforce better coding practices. Strict mode can be enabled by adding "use strict"; at the top of your JavaScript file or function.
// 10. Hoisting is a common source of confusion for JavaScript developers, especially those who are new to the language. Understanding hoisting is essential for writing clean and maintainable code.
// 11. Hoisting is a fundamental concept in JavaScript that can help you understand how the language works and how to write better code. By understanding hoisting, you can avoid common pitfalls and write cleaner, more maintainable code.
// 12. Hoisting is a powerful feature of JavaScript that allows you to write code in a more flexible and dynamic way. By understanding hoisting, you can take advantage of this feature and write better code.
