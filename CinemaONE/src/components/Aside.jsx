import { useEffect } from "react";

function Aside(props) {
    return (
        <aside className="h-[calc(100vh-76px)] bg-[#3A1D00]/60 flex flex-col pl-6 pt-4 pr-15 max-w-45 sticky left-0 top-0 gap-3">
            {props.pageSelector.home 
                ? null
                : props.pageSelector.movie 
                    ? <>
                    <div>
                        <a className="text-white text-xl font-bold">Dicover</a>
                      </div>
            
                    <ul className="text-sm flex flex-col gap-2 ml-0.5 min-w-max">
                        {props.dataMovie.genre.map(g => <li key={g.id}><a href={`#${g.id}`} className="text-white hover:text-white/50">{g.name}</a></li>)}
                    </ul>
                    </>
                    : props.pageSelector.tv
                        ? <>
                        <div>
                            <a className="text-white text-xl font-bold">Dicover</a>
                        </div>
            
                            <ul className="text-sm flex flex-col gap-2 ml-0.5 min-w-max">
                                {props.dataTV.genre.map(g => <li key={g.id}><a href={`#${g.id}`} className="text-white hover:text-white/50">{g.name}</a></li>)}
                            </ul>
                        </>
                        : null}
        </aside>
    );
}

export default Aside