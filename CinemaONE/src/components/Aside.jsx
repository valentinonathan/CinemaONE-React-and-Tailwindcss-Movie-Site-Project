import { useEffect } from "react";
import { useMatches } from "react-router-dom";

function Aside(props) {
    const matches = useMatches();
    const current = matches[1];
    const tab = current?.handle?.aside;
    console.log(tab);
    if (tab == "home") {
        return (
            <aside className="h-[calc(100vh-76px)] bg-[#3A1D00]/60 flex flex-col pl-6 pt-4 pr-15 max-w-45 sticky left-0 top-0 gap-3">
                <div>
                    <a className="text-white text-xl font-bold">Dicover</a>
                </div>
            
                <ul className="text-sm flex flex-col gap-3 ml-0.5 min-w-max">
                    <li key="1" className="text-white hover:text-white/50"><a href="#MoviesTrendingNow">Movies Trending Now</a></li>
                    <li key="2" className="text-white hover:text-white/50"><a href="#PopularTVShows">Popular TV Shows</a></li>
                    <li key="3" className="text-white hover:text-white/50"><a href="#ShowsAiringToday">Shows Airing Today</a></li>
                    <li key="4" className="text-white hover:text-white/50"><a href="#UpcomingMovies">Upcoming Movies</a></li>
                    <li key="5" className="text-white hover:text-white/50"><a href="#10751">Family TV Shows</a></li>
                    <li key="6" className="text-white hover:text-white/50"><a href="#80">Crime Movies</a></li>
                    <li key="7" className="text-white hover:text-white/50"><a href="#53">Thriller Movies</a></li>
                </ul>   
            </aside>
        );
    } else if (tab == "movies") {
        return (
            <aside className="h-[calc(100vh-76px)] bg-[#3A1D00]/60 flex flex-col pl-6 pt-4 pr-15 max-w-45 sticky left-0 top-0 gap-3">
                <div>
                    <a className="text-white text-xl font-bold">Dicover</a>
                </div>
            
                <ul className="text-sm flex flex-col gap-2 ml-0.5 min-w-max">
                    {props.dataMovie.genre.map(g => <li key={g.id}><a href={`#${g.id}`} className="text-white hover:text-white/50">{g.name}</a></li>)}
                </ul>         
            </aside>
        );
    } else if (tab == "tv") {
        return (
            <aside className="h-[calc(100vh-76px)] bg-[#3A1D00]/60 flex flex-col pl-6 pt-4 pr-15 max-w-45 sticky left-0 top-0 gap-3">
                <div>
                    <a className="text-white text-xl font-bold">Dicover</a>
                </div>
            
                <ul className="text-sm flex flex-col gap-2 ml-0.5 min-w-max">
                    {props.dataTV.genre.map(g => <li key={g.id}><a href={`#${g.id}`} className="text-white hover:text-white/50">{g.name}</a></li>)}
                </ul>        
            </aside>
        );
    }
}

export default Aside