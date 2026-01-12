import { useEffect, useState } from "react";
import TVSection from "./components/TVSection";
import { getGenreTV } from "../../services/tv";

function TV(props) {

    const [genre, setGenre] = useState([])

    useEffect(() => {
        async function genreRequest() {
            const genreTemp = await getGenreTV();
            setGenre(g => genreTemp);
            props.callbackTV({genre: genreTemp});
        }
        genreRequest();
    }, [])

    return (
        <div className="pl-5 pt-5 pr-3 pb-8 flex flex-col gap-8">
            <TVSection title="Airing Today" withGenre={false} tvListType="airing_today" />
            <TVSection title="Popular" withGenre={false} tvListType="popular"/>
            <TVSection title="On The Air" withGenre={false} tvListType="on_the_air"/>
            <TVSection title="Top Rated" withGenre={false} tvListType="top_rated"/>
            {genre.map(g => <TVSection title={g.name} withGenre={true} genreID={g.id} />)}
        </div>
    );
}

export default TV