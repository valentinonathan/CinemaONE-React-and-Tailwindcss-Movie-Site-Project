const API_KEY = "9540bb593401c1f6b8ee464243b6d0fa";

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