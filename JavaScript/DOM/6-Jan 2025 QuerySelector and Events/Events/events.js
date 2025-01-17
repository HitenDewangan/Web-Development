const divElement = document.querySelector('#divid');
const txtBoxElement = document.querySelector('#txt');

divElement.addEventListener(
    'mouseenter', ()=>{
        divElement.innerHTML = "Mouse Enter";
        divElement.style.color = "red";
    }
)

divElement.addEventListener(
    'mouseleave', ()=>{
        divElement.innerHTML = "Mouse Leave";
        divElement.style.color = "green";
    }
)

divElement.addEventListener(
    'click', ()=>{
        divElement.innerHTML = "Mouse Click";
        divElement.style.color = "blue";
    }
)
