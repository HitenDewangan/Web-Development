let str = "Hello World!";
console.log(str.length); // 12
console.log(str.charAt(0)); // H
console.log(str.charAt(str.length - 1)); // !
console.log(str.charAt(str.length)); // empty string
console.log(str.charAt(str.length + 1)); // empty string
console.log(typeof str.charAt(str.length)); // string
console.log(str.charAt(str.length).length); // 0

console.log(str.charAt(-1)); // empty string
console.log(typeof str.charAt(-2)); // string

// similar with charCodeAt
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(str.length - 1)); // 33
console.log(str.charCodeAt(str.length)); // NaN
console.log(str.charCodeAt(str.length + 1)); // NaN
console.log(str.charCodeAt(-1)); // NaN
console.log(str.charCodeAt(-2)); // NaN
console.log(typeof str.charCodeAt(str.length)); // number