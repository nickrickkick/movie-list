const message = document.querySelector("#message");
console.log("hello world")

const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    var movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
    deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector("ul").appendChild(movie);
    inputField.value = "";
}

const deleteMovie = (event) => {
    event.target.parentNode.remove() 
    message.textContent = `${event.target.parentNode.nodeName} deleted!`;
    revealMessage();
}

const crossOffMovie = (event) => {
    event.target.classList.toggle("checked") 
    if (event.target.classList.contains("checked")){
        message.textContent = `${event.target.textContent} Watched!`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}
const callback = () => {
    message.classList.add("hide");
   // console.log("working");
}

const revealMessage = () => {
    //console.log("working");
    message.classList.remove("hide")
    setTimeout(callback, 1000);
}


document.querySelector("form").addEventListener("submit", addMovie);
