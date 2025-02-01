function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('API is called');
            resolve(200); // 200 is success status code
        }, 2000);
    });
}


// async-await 
async function getWeatherData() {
    await api(); // 1st 
    await api(); // 2nd
}

function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data " + dataID);
            resolve("success");
        }, 2000);
    });
}

// promise chaining
// asyncFun3(1)
//     .then((res) => {
//         return asyncFun3(2);
//     }).then((res) => {
//         return asyncFun3(3);
//     }).then((res) => {
//         console.log(res);
//     });

// callback hell
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, () => {
//             console.log("getting data 4");
//             getData(4);
//         });
//     });
// });

async function getAllData() {
    console.log("fetching data 1 ...");
    await getData(1);
    console.log("fetching data 2 ...");
    await getData(2);
    console.log("fetching data 3 ...");
    await getData(3);
}

// using IIFE : Immediately Invoked Function Expression
(async function (){
    console.log("fetching data 1 ...");
    await getData(1);
    console.log("fetching data 2 ...");
    await getData(2);
    console.log("fetching data 3 ...");
    await getData(3);
})();