const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function getPopularActors() {
    const response = await fetch("https://api.themoviedb.org/3/person/popular?api_key=" + API_KEY);
    if (!response.ok) {
        throw new Error("Can't fetch data at")
    } else {
        const json = await response.json();
        const results = json.results;
        return results;
    }
 
}

export { getPopularActors };