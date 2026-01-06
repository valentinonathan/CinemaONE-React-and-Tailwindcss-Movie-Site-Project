import ActorCard from "./components/ActorCard";
import MovieSection from "./components/MovieSection";
import ActorSection from "./components/ActorSection";
import { useEffect, useState } from "react";
import { getGenre } from "../../services/movie";

function Movies(props) {

    const [genre, setGenre] = useState([]);

    useEffect(() => {
        async function genreRequest() {
            const genreTemp = await getGenre();
            props.callbackMovie({genre: genreTemp});
            setGenre(g => genreTemp);
        }
        genreRequest();
    }, [])

    return (
        <div className="pl-5 pt-5 pr-3 pb-8 flex flex-col gap-8">
            <MovieSection title="Now Playing" movieListType="now_playing"/>
            <ActorSection />
            <MovieSection title="Popular" movieListType="popular"/>
            <MovieSection title="Top Rated" movieListType="top_rated"/>
            <MovieSection title="Upcoming" movieListType="upcoming"/>
            {genre.map(g => <MovieSection title={g.name} withGenre={true} genreID={g.id} />)}
        </div>
    );
}

export default Movies