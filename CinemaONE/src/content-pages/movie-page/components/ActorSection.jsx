import ActorCard from "./ActorCard";
import { getPopularActors } from "../../../services/actor";
import { useEffect, useState } from "react";

function ActorSection() {

    const [actors, setActors] = useState([]);

    useEffect(() => {
        async function actorsAPIRequest() {
            const actorsTemp = await getPopularActors();
            setActors(a => actorsTemp);
        }
        actorsAPIRequest();
    }, [])

    return(
        <section className="text-white flex flex-col gap-5 overflow-hidden">
            <h1 className="text-2xl font-semibold">Popular Actors</h1>
            <div className="flex gap-5.5">
                {actors.slice(0, 11).map(actor => (
                    <ActorCard key={actor.id} actor={actor} />
                ))}
            </div>
        </section>
    );
}

export default ActorSection