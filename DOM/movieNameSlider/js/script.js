// Here is the JavaScript code for the movie name slider functionality. It cycles through a list of movies, displaying their names and posters, while also changing the text color.


const movies = [
    {
        name: "Titanic",
        poster: "./images/titanic.jpg"
    },
    {
        name: "The Shawshank Redemption",
        poster: "./images/shawshank.jpg"
    },
    {
        name: "Life is Beautiful",
        poster: "./images/lifeIsbeautiful.jpg"
    },
    {
        name: "The Notebook",
        poster: "./images/the-notebook.jpg"
    },
    {
        name: "The Reader",
        poster: "./images/the-reader.jpg"
    }];

const colors = ["orange", "#f2f3c0", "yellow"];

const movieElement = document.getElementById("movie-name");
const posterElement = document.getElementById("movie-poster");

let movieIndex = 0;
let colorIndex = 0;

function showMovie() {
    movieElement.textContent = movies[movieIndex].name;
    posterElement.src = movies[movieIndex].poster;
    posterElement.alt = movies[movieIndex].name + " poster";

    movieElement.style.color = colors[colorIndex];

    movieIndex = (movieIndex + 1) % movies.length;
    colorIndex = (colorIndex + 1) % colors.length;
}

showMovie();

setInterval(showMovie, 4000);
