import { baseURL } from "../../../services/movie";

function MovieCard(props) {
    return(
        <div className="max-w-[260px] max-h-[146px] bg-gray-100/25 shrink-0">
            <img className="object-cover" src={"https://image.tmdb.org/t/p/w1280/" + props.movie.backdrop_path}/>
        </div>
    );
}

export default MovieCard
