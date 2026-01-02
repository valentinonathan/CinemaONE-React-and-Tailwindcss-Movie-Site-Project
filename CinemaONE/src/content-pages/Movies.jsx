import MovieCard from "../components/MovieCard";

function Movies() {
    return (
        <div className="pl-5 pt-5 max-w-max">
            <section className="text-white flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">Trending Now</h1>
                <div className="flex gap-2">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </section>
        </div>
    );
}

export default Movies