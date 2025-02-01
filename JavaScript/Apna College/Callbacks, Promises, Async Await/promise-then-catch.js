const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
        // resolve("success, good to go :)");
        reject("network failure :(");
    }); 
};

let np = getPromise();
np.then((res) => {
    console.log("promise fulfilled",res);
});

np.catch((err) => {
    console.log("rejected", err);
});