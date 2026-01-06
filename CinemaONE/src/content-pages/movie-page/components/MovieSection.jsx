import MovieCard from "./MovieCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getMovie, getMovieByGenre } from "../../../services/movie";

function MovieSection(props) {
    const [index, setIndex] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function movieAPIRequest() {
            if (!props.withGenre) {
                const moviesTemp = await getMovie(props.movieListType);
                setMovies(m => moviesTemp);
            }
            else {
                const moviesTemp = await getMovieByGenre(props.genreID);
                setMovies (m => moviesTemp);
            }
        }
        movieAPIRequest();
    }, [props.withGenre, props.genreID, props.movieListType]);

    function handleIncrementIndex() {
        setIndex(i => i + 1);
    }
    function handleDecrementIndex() {
        setIndex(i => i === 0 ? i : i - 1);
    }

    return(
        <section id={props.genreID} className="relative text-white flex flex-col gap-5 w-full overflow-hidden">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <div className="w-max flex gap-2 relative transition-transform duration-500 ease-out overflow-hidden" style={{transform: `translateX(-${(index * 268)}px)`}}>
                {movies.map(m => <MovieCard key={m.id} movie={m} />)}
            </div>
            <div onClick={handleDecrementIndex} className="h-[146px] absolute left-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity hover:bg-gradient-to-r from-black/60 to-transparent">
                <button><ChevronLeft /></button>
            </div>
            <div onClick={handleIncrementIndex} className="h-[146px] absolute right-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-gradient-to-l from-black/60 to-transparent">
                <button><ChevronRight /></button>
            </div>
        </section>
    );
}

export default MovieSection