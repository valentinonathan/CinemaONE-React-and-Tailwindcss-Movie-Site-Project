import {IoStar} from "react-icons/io5"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTVDetails } from "../../services/tv";

function TVPage(props) {

    const tvId = useParams().tvId;
    const [tvDetails, setTvDetails] = useState([]);

    useEffect(() => {
        async function tvDetailsAPIRequest(tvId) {
            const tvDetailsTemp = await getTVDetails(tvId);
            setTvDetails(t => tvDetailsTemp);
            console.log(tvDetailsTemp);
        }
        tvDetailsAPIRequest(tvId);
    }, []);

    return (
    <>
    <div className="flex flex-col gap-10 w-full">
        <div className="w-full min-h-120 relative">
            <div className="w-full max-h-100 overflow-hidden">
                <img className="relative bottom-30" src={`https://image.tmdb.org/t/p/w1920/${tvDetails?.backdrop_path}`}/>
            </div>    
            <img className="z-100 absolute top-25 left-10 w-[250px] h-[375px]" src={`https://image.tmdb.org/t/p/original/${tvDetails?.poster_path}`}/>
            <h1 className="absolute left-77 top-103 text-5xl text-white font-bold">{tvDetails?.original_name}</h1>
        </div>
    </div>

    <div className="flex ">
        <div className="min-w-72.5 pl-10">
            <div className="flex items-center justify-between" style={{color:"rgba(255, 255, 255, 0.9)"}}>
                <div className="flex items-center">
                    <IoStar className=""></IoStar>
                    <p className="text-md ml-1">{tvDetails?.vote_average?.toFixed(1)}</p>
                </div>
                <p>{tvDetails?.first_air_date?.slice(0, 4)}</p>
                <p>{tvDetails?.number_of_episodes + "eps"}</p>
                <p>{tvDetails?.genres?.[0]?.name}</p>
            </div>
        </div>

        <div>
            <p className="text-white pl-5 pr-2">{tvDetails?.overview}</p>
        </div>
    </div>
    </>

    );
}

export default TVPage