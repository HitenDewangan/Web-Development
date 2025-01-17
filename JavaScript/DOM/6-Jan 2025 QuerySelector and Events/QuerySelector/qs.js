function changeColorFirst(){
    document.querySelector(".movie").style.color = "orange";
    document.querySelector(".movie").style.fontSize = "5px";
}

function changeColorAll(){
    const movies = document.querySelectorAll(".movie")
    // for each
    movies.forEach(movie => {
        movie.style.color = "blue";
        movie.style.fontSize  = "20px";
    });
}