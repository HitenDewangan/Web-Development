
const PI = 3.14;

export default PI; // eligible for eager loading

export function add(a, b){
    return a + b;
}

// export default function sub(a, b){  // error: cannot have multiple default exports
//     return a - b;
// }

// Note : 
/*
A module cannot have multiple default exports.ts(2528)
App.js(4, 16): Another export default is here.
*/