const baseURL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function getMovie(movieListType) {
    const response = await fetch(baseURL + `movie/${movieListType}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Can't fetch data at");
    } else {
        const json = await response.json();
        const results = json.results;
        return results;
    }
}

async function getMovieDetails(movieId) {
    const response = await fetch(baseURL + `movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Can't fetch data at");
    } else {
        const json = await response.json();
        return json;
    }
}

async function getGenre() {
    const response = await fetch(baseURL + `genre/movie/list?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Can't fetch data at");
    } else {
        const json = await response.json();
        const genres = json.genres;
        return genres;
    }
}
async function getMovieByGenre(genreID) {
    const response = await fetch(baseURL + `discover/movie?api_key=${API_KEY}&with_genres=${genreID}`);
    if (!response.ok) {
        throw new Error("Can't fetch data at");
    } else {
        const json = await response.json();
        const results = json.results;
        return results;
    }
}

export { getMovie, getGenre, getMovieByGenre, getMovieDetails, baseURL };