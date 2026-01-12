import { baseURL } from "./movie";
const API_KEY = "9540bb593401c1f6b8ee464243b6d0fa"

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

export { getTV, getGenreTV, getTVByGenre };