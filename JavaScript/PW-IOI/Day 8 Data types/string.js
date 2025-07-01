// Primitive data types : are immutable, means they cannot be changed
// Non-primitive data types : are mutable, means they can be changed

// code
// String is a primitive data type
// let str = "Hello World!";
// console.log(str); // Hello World!
// console.log(typeof str); // string
// console.log(str.length); // 12
// console.log(str.charAt(0)); // H

// // try to change the string
// str[0] = "Y"; 
// console.log(str); // Hello World!

// console.log(str[0]); // H

// immutable : in memory, the string is not changed, but a new string is created
// mutable : in memory, the string is changed, but a new string is not created

function add(a, b){
    console.log(a + b);
}

add(10, 20); // 30
add(10, "20"); // 1020
add("Alan", 20); // Alan20
add("Alan", "Walker"); // Alan20

// =========================== examples of non-primitive data types ===========================

let arr = [1, 2, 3, 4, 5]; // array is a non-primitive data type
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(typeof arr); // object

let obj = {name: "Alan", age: 20}; // object is a non-primitive data type
console.log(obj); // { name: 'Alan', age: 20 }
console.log(obj.name); // Alan
obj.country = "USA"; // add a new property to the object
console.log(obj); // { name: 'Alan', age: 20, country: 'USA' }

delete obj.age; // delete a property from the object
console.log(obj); // { name: 'Alan', country: 'USA' }

// =========================== examples of mutable ===========================
let str1 = "Hello World!";
let str2 = str1;
console.log(str2); // Hello World!
str2 = "Goodbye World!";
console.log(str2); // Goodbye World!

