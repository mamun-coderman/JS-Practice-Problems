// here are the raw Javascript code for movie name slider project.

// movie names are stored in an array
const movies = ["Titanic", "The Shawshank Redemption", "Life is Beautiful", "The Nodebook", "The Reader"];
const colors = ["orange", "purple", "yellow"];
const movieElement = document.getElementById("movie-name");

let movieIndex = 0;
let colorIndex = 0;


movieElement.textContent = movies[movieIndex];
setInterval(() => {
    movieIndex = (movieIndex + 1) % movies.length;
    colorIndex = (colorIndex + 1) % colors.length;
    movieElement.textContent = movies[movieIndex];
    movieElement.style.color = colors[colorIndex];
}, 2000);