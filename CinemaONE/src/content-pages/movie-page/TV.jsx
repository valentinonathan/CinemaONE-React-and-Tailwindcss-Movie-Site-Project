import { useEffect } from "react";
import TVSection from "./components/TVSection";
import { getGenreTV } from "../../services/tv";

function TV(props) {

    useEffect(() => {
        async function genreRequest() {
            const genreTemp = await getGenreTV();
            props.callbackTV({genre: genreTemp});
        }
        genreRequest();
    }, [])

    return (
        <div className="pl-5 pt-5 pr-3 pb-8 flex flex-col gap-8">
            <TVSection title="Airing Today" tvListType="airing_today"/>
            <TVSection title="Popular" tvListType="popular"/>
            <TVSection title="On The Air" tvListType="on_the_air"/>
            <TVSection title="Top Rated" tvListType="top_rated"/>
        </div>
    );
}

export default TV