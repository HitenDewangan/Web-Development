// use promise to generate a shopping
// print success message : your order will be delivered in 2 days
// print error message if delay a specific time : something went wrong, could not place order
// thanks for shopping

const placeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your order will be delivered in 2 days");
        }, 2000);
    });
};

placeOrder()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Thanks for shopping");
    });

    placeOrder().then((message) => console.log(message)).catch((error) => console.log(error)).finally(() => console.log("Thanks for shopping"));
