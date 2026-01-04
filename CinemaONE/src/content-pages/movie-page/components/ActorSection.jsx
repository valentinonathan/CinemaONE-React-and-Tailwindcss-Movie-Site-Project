import ActorCard from "./ActorCard";

function ActorSection() {
    return(
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
                <ActorCard />
                </div>
        </section>
    );
}

export default ActorSection