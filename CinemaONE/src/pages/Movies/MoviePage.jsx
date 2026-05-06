import {IoStar} from "react-icons/io5"

function MoviePage(props) {
    return (
    <>
    <div className="flex flex-col gap-10 w-full">
        <div className="w-full min-h-120 relative">
            <div className="w-full max-h-100 overflow-hidden">
                <img className="relative bottom-30" src="https://image.tmdb.org/t/p/original/p8777bPIlyFYcjqP2hU8htoz1RG.jpg"/>
            </div>    
            <img className="z-100 absolute top-25 left-10 w-[250px] h-[375px]" src="https://image.tmdb.org/t/p/original/nA5otwVxAfpBP4PVgeuBk3qHcLY.jpg"/>
            <h1 className="absolute left-77 top-103 text-5xl text-white font-bold">Apex Predator</h1>
        </div>
    </div>

    <div className="flex ">
        <div className="min-w-72.5 pl-10">
            <div className="flex items-center justify-between" style={{color:"rgba(255, 255, 255, 0.9)"}}>
                <div className="flex items-center">
                    <IoStar className=""></IoStar>
                    <p className="text-md ml-1">9</p>
                </div>
                <p>2025</p>
                <p>1hr 45min</p>
                <p>Romance</p>
            </div>
        </div>

        <div>
            <p className="text-white pl-4">This is apex predator movie and I think this is good</p>
        </div>
    </div>
    </>

    );
}

export default MoviePage