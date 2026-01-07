import MovieCard from "./MovieCard";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getTV } from "../../../services/tv";
import TVCard from "./TVCard";

function TVSection(props) {
    const [index, setIndex] = useState(0);
    const [tv, setTv] = useState([]);

    useEffect(() => {
        async function tvAPIRequest() {
                const tvTemp = await getTV(props.tvListType);
                setTv(t => tvTemp)
        }
        tvAPIRequest();
    }, []);

    function handleIncrementIndex() {
        setIndex(i => i + 1);
    }
    function handleDecrementIndex() {
        setIndex(i => i === 0 ? i : i - 1);
    }

    return(
        <section className="relative text-white flex flex-col gap-5 w-full overflow-hidden">
            <h1 className="text-2xl font-semibold">{props.title}</h1>
            <div className="w-max flex gap-2 relative transition-transform duration-500 ease-out overflow-hidden" style={{transform: `translateX(-${(index * 268)}px)`}}>
                {tv.map((t, i)=> <TVCard key={t.id} tv={t} />)} 
            </div>
            <div onClick={handleDecrementIndex} className="h-[146px] absolute left-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity hover:bg-gradient-to-r from-black/60 to-transparent">
                <button><ChevronLeft /></button>
            </div>
            <div onClick={handleIncrementIndex} className="h-[146px] absolute right-0 bottom-0 flex justify-center items-center opacity-0 hover:opacity-100 hover:bg-gradient-to-l from-black/60 to-transparent">
                <button><ChevronRight /></button>
            </div>
        </section>
    );
}

export default TVSection