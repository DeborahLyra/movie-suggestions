const movieImage = document.querySelector('#movie-image');
const movieText = document.querySelector('#movie-text');
const btn = document.querySelector('#movie-btn');

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=feb3cd07db33054c3c0cc247463278b0&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'



async function getRandomMovie (url){
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;

    if (movies.length > 0) {
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        showMovie(randomMovie);
    } else {
        movieText.innerHTML = '<h3>No movie found</h3>';
    }
}

function showMovie(movie){
    const { overview, title, poster_path } = movie; 
    const imageUrl = IMG_PATH + poster_path;

    movieImage.src = imageUrl;
    movieImage.alt = title;
    movieText.innerHTML = `
        <h2>${title}</h2>
        <p>${overview}</p>
    `
}

btn.addEventListener('click', () => {
    getRandomMovie(API_URL);
});