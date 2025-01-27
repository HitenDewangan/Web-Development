function changeColor(){
    document.getElementById('mydiv').style.color = "yellow";
}


const anodiv = document.querySelector('#anodiv');

anodiv.addEventListener(
    'click', ()=>anodiv.style.color = "red"
);

// function to completely chhange the theme of the page
const body = document.querySelector('body');

function changeTheme(){
    if(body.style.backgroundColor == "black"){
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }else{
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
}

//function to change the theme to random gradient colors
function changeThemeRandom(){
    body.style.background = `linear-gradient(to right, ${getRandomColor()}, ${getRandomColor()})`;
}

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}