
function TVCard(props) {
    return(
        <div className="relative max-w-[260px] max-h-[146px] bg-gray-100/25 shrink-0 overflow-hidden">
            <div className="absolute top-0 w-[260px] h-[146px] p-3 flex flex-col justify-end opacity-0 bg-gradient-to-t from-black/70 from-5% to-transparent transition-opacity duration-300 ease-out hover:opacity-100">
                <h2 className="font-semibold text-md">{props.tv.original_name}</h2>
            </div>
            <img className="object-cover" src={"https://image.tmdb.org/t/p/w1280/" + props.tv.backdrop_path}/>
        </div>
    );
}

export default TVCard