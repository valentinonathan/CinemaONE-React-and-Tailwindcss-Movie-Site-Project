function ActorCard(props) {
    return(
        <div className="flex flex-col gap-3">
        <div className="h-[125px] w-[125px] rounded-full overflow-hidden bg-gray-100/25 shrink-0">
            <img className="object-cover rounded-full w-125px h-125px" src={"https://image.tmdb.org/t/p/w1280" + props.actor.profile_path} />
        </div>
        <h2 className="text-center">{props.actor.original_name}</h2>
        </div>
    );
}

export default ActorCard