const URL = "https://catfact.ninja/fact";  
const factPara = document.querySelector("#fact");  
const btn = document.querySelector("#btn");  

// // using async-await
// const getFacts = async () => {  
//     console.log("getting data .....");  

//     let response = await fetch(URL);  
//     console.log(response); // JSON format  

//     let data = await response.json();  
//     console.log("API response : ", data.fact);
//     factPara.innerText = data.fact;  
// };  

// using promise-chaining, but async-await is better
function getFacts() {   
    fetch(URL)  
        .then((response) => {
            return response.json()
        })  
        .then((data) => {  
            console.log("API response : ", data.fact);  
            factPara.innerText = data.fact;  
        });  
};

btn.addEventListener("click", getFacts);

// let promise = fetch(URL);
// console.log(promise); // pending promise