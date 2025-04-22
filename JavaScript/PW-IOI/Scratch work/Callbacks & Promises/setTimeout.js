// write a function accepting fucntion as a parameter and call it at later time

function add(a, b){
    console.log(a + b);
}

function doCalc(a, b, callback){
    console.log("Before callback");

    // call at later time eg. 1000ms = 1s later
    setTimeout(() => {
        callback(a, b);
    }, 5000);

    console.log("in between callback ...");

    setTimeout(() => {
        console.log("This message will be printed after 1 second of callback"); 
      }, 6000); 
}

doCalc(3, 4, add);
