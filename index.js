console.log("hello world")

const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent(inputField);
    movie.appendChild(movieTitle);
    document.querySelector("ul").appendChild(movie);

}
console.log(document.querySelector("form"));
//document.querySelector("form").addEventListener("submit", addMovie);
let form = document.querySelector(`form`);
form.addEventListener(`submit`, addMovie);
//document.querySelector(`form`).addEventListener(`submit`, addMovie)