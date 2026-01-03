import MovieCard from "./MovieCard";

function MovieSection(props) {
    return(
        <section className="text-white flex flex-col gap-5">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <div className="flex gap-2 overflow-hidden">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </section>
    );
}

export default MovieSection