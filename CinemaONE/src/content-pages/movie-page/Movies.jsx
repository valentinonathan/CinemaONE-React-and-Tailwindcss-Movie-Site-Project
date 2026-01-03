import ActorCard from "./components/ActorCard";
import MovieSection from "./components/MovieSection";

function Movies() {
    return (
        <div className="pl-5 pt-5 pr-5 flex flex-col gap-8">
            <MovieSection title="Trending Now"/>
            <section className="text-white flex flex-col gap-5">
                <h1 className="text-2xl font-semibold">Popular Actors</h1>
                <div className="flex gap-3 overflow-hidden">
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />

                </div>
            </section>
            <MovieSection title="Fictional"/>
        </div>
    );
}

export default Movies