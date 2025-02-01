// callbacks are used to handle asynchronous operations in javascript

function getData() {
    setTimeout(() => {
        console.log('Fetching data from database');
        const data = { name: 'John Doe' };
        setTimeout(() => {
            console.log('Processing data');
            console.log(data);
        }, 2000);
    }, 2000);
}

getData();

//  ================== Callback Hell (Pyramid of DOOM)==================

// promise is the solution to callback hell

//  ================== Promise ==================
// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('got the user');
//         // resolve({ name: 'John Doe' });
//         reject('could not get the user');
//     }, 2000);
// });

// promise.then(user => {
//     console.log(user);
// }).catch(error => {
//     console.log(error);
// });
