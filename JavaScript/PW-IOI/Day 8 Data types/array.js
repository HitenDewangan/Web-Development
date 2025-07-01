let arr1 = [1, 2, 3, 4, 5]
let arr2 = arr1 // shallow copy

console.log(arr1 == arr2);
console.log(arr1 === arr2);

//  shallow copy
let arr3 = [...arr1]; // spread operator
console.log(arr1 == arr3);
console.log(arr1 === arr3);

// deep copy
let arr4 = JSON.parse(JSON.stringify(arr1)); // JSON methods
console.log(arr1 == arr4);
console.log(arr1 === arr4);