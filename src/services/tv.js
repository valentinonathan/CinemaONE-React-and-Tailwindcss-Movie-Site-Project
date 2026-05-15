import { baseURL } from "./movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function getTV(tvListType) {
    const response = await fetch(baseURL + `tv/${tvListType}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Cannot fetch data at");
    } else {
        const json = await response.json();
        const results = json.results;
        return results;
    }
}

async function getTVDetails(tvId) {
    const response = await fetch(baseURL + `tv/${tvId}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Can't fetch data at");
    } else {
        const json = await response.json();
        return json;
    }
}

async function getGenreTV() {
    const response = await fetch(baseURL + `genre/tv/list?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Cannot fetch data at");
    } else {
        const json = await response.json();
        const genres = json.genres;
        return genres;
    }
}

async function getTVByGenre(genreID) {
    const response = await fetch(baseURL + `discover/tv?api_key=${API_KEY}&with_genres=${genreID}`);
    if (!response.ok) {
        throw new Error("Cannot fetch data at");
    } else {
        const json = await response.json();
        const results = json.results;
        return results;
    }
}

export { getTV, getGenreTV, getTVByGenre, getTVDetails };