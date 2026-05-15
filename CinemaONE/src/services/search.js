const API_KEY = "9540bb593401c1f6b8ee464243b6d0fa";

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