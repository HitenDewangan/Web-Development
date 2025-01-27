let x = 10;
let y = x/0;

console.log(y);
console.log('hi');

const str = `{
    name: 'John',
    age : 30
    color: 'white'
}`;

function parseJSON(str) {
    try {
        const plantObject = JSON.parse(str);
    }
    catch(error) {
        console.log("JSON parse error");
    }
}

parseJSON(str);

// console.log(str);

// const plantObject = JSON.parse(str);
// console.log(plantObject.name);
// console.log(plantObject.age);


// const stringRepresentationJSON = JSON.stringify(JSON.parse(str));
// console.log(stringRepresentationJSON);