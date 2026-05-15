import {IoStar} from "react-icons/io5"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/movie";

function MoviePage(props) {

    const movieId = useParams().movieId;
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        async function movieDetailsAPIRequest(movieId) {
            const movieDetailsTemp = await getMovieDetails(movieId);
            setMovieDetails(b => movieDetailsTemp);
        }
        movieDetailsAPIRequest(movieId);

        return () => {
            setMovieDetails([]);
        }
    }, [movieId]);

    return (
    <>
    <div className="flex flex-col gap-10 w-full">
        <div className="w-full min-h-120 relative">
            <div className="w-full max-h-100 overflow-hidden">
                <img className="relative bottom-30" src={`https://image.tmdb.org/t/p/w1920/${movieDetails?.backdrop_path}`}/>
            </div>    
            <img className="z-100 absolute top-25 left-10 w-[250px] h-[375px]" src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}/>
            <h1 className="absolute left-77 top-103 text-5xl text-white font-bold">{movieDetails?.original_title}</h1>
        </div>
    </div>

    <div className="flex ">
        <div className="min-w-72.5 pl-10">
            <div className="flex items-center justify-between" style={{color:"rgba(255, 255, 255, 0.9)"}}>
                <div className="flex items-center">
                    <IoStar className=""></IoStar>
                    <p className="text-md ml-1">{movieDetails?.vote_average?.toFixed(1)}</p>
                </div>
                <p>{movieDetails?.release_date?.slice(0, 4)}</p>
                <p>{movieDetails?.runtime + " min"}</p>
                <p>{movieDetails?.genres?.[0]?.name}</p>
            </div>
        </div>

        <div>
            <p className="text-white pl-5 pr-2">{movieDetails?.overview}</p>
        </div>
    </div>
    </>

    );
}

export default MoviePage