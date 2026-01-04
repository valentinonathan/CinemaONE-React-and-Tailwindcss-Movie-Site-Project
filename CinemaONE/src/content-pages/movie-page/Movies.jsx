import ActorCard from "./components/ActorCard";
import MovieSection from "./components/MovieSection";
import ActorSection from "./components/ActorSection";

function Movies() {
    return (
        <div className="pl-5 pt-5 pr-5 flex flex-col gap-8">
            <MovieSection title="Trending Now"/>
            <ActorSection />
            <MovieSection title="Fictional"/>
        </div>
    );
}

export default Movies