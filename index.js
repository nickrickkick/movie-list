console.log("hello world")

addMovie = (Event) => {
    //event.preventDefault()
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent(inputField);
    movie.appendChild(movieTitle);
    document.querySelector("ul").appendChild(movie);

}
document.querySelector("form").addEventListener("submit", addMovie());