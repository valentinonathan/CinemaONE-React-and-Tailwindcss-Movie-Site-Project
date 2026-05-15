const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

async function search(query) {
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${encodedQuery}&language=en-US&api_key=` + API_KEY);
    if (!response.ok) {
        throw new Error("Can't fetch data at");
    } else {
        const json = await response.json();
        const results = json.results;
        return results;
    }
}

export { search };