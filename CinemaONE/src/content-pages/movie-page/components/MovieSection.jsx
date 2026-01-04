import MovieCard from "./MovieCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getPopularMovie } from "../../../services/movie";

function MovieSection(props) {
    const [index, setIndex] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function movieAPIRequest() {
            const moviesTemp = await getPopularMovie();
            setMovies(m => moviesTemp);
        }
        movieAPIRequest();
    }, []);

    function handleIncrementIndex() {
        setIndex(i => i + 1);
    }
    function handleDecrementIndex() {
        setIndex(i => i === 0 ? i : i - 1);
    }

    return(
        <section className="relative text-white flex flex-col gap-5 w-full overflow-hidden">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <div className="w-max flex gap-2 relative transition-transform duration-500 ease-out overflow-hidden" style={{transform: `translateX(-${(index * 268)}px)`}}>
                {movies.map((m, i) => <MovieCard key={i} movie={m} />)}
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