import MovieCard from "./MovieCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

function MovieSection(props) {
    return(
        <section className="text-white flex flex-col gap-5 w-full">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <div className="flex gap-2 overflow-hidden relative">
                <div className="h-full absolute left-0 top-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity hover:bg-gradient-to-r from-black/60 to-transparent">
                    <button><ChevronLeft /></button>
                </div>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <div className="h-full absolute right-0 top-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-gradient-to-l from-black/60 to-transparent">
                    <button><ChevronRight /></button>
                </div>
            </div>
        </section>
    );
}

export default MovieSection