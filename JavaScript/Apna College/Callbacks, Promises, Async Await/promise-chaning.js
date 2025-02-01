function asyncFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success");
        }, 4000);
    });
}

function asyncFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("success");
        }, 4000);
    });
}

// ======== both promises will run in parallel
// console.log("fetching data 1 ...");
// let p1 = asyncFun1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data 2 ...");
// let p2 = asyncFun2();
// p2.then((res) => { 
//     console.log(res);
// });

// ======== promise chaining -> one promise will run after another
// console.log("fetching data 1 ...");
// let p3 = asyncFun1();
// p3.then((res) => {
//     console.log(res);
//     console.log("fetching data 2 ...");
//     return asyncFun2();
// }).then((res) => {
//     console.log(res);
// });

// better way to write promise chaining

function asyncFun3(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("success");
        }, 2000);
    });
}

asyncFun3(1)
    .then((res) => {
        return asyncFun3(2);
    }).then((res) => {
        return asyncFun3(3);
    }).then((res) => {
        console.log(res);
    });

// easier to understand as compared to callback hell

