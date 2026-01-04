function ActorCard(props) {
    return(
        <div className="max-h-[125px] max-w-[125px] rounded-full overflow-hidden bg-gray-100/25 shrink-0">
            <img className="object-cover rounded-full w-125px h-125px" src={"https://image.tmdb.org/t/p/w1280" + props.actor.profile_path} />
        </div>
    );
}

export default ActorCard