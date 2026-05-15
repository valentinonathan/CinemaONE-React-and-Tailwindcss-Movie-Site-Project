import { useEffect, useState, useRef } from 'react'
import { Search } from 'lucide-react'
import Movies from '../pages/Movies/Movies'
import Aside from '../components/Aside'
import TV from '../pages/TV/TV'
import Home from '../pages/Home/Home'
import "../index.css"
import { getGenreTV } from '../services/tv'
import MoviePage from '../pages/Movies/MoviePage'
import { Outlet, Link, useMatches } from "react-router-dom"
import { search } from '../services/search'

function MainLayout() {

  const [dataMovie, setDataMovie] = useState({genre:[]});
  const [dataTV, setDataTV] = useState({genre:[]});
  const [searchBool, setSearchBool] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const pageSelector = useMatches()[1]?.handle?.aside;
  const searchResultRef = useRef(null);

  async function handleSearchChange(e) {
    if (document.activeElement == e.target) {
      if (e.target.value.length > 0) {
        setSearchBool(true);
        const results = await search(e.target.value);
        setSearchResults(results);
      } else {
        setSearchBool(false);
      }
    } else {
      setTimeout(() => {
        setSearchBool(false);
      }, 100)
    }
  }

  function callbackMovie(data) {
    setDataMovie(d => data);
  }
  function callbackTV(data) {
    setDataTV(d => data);
  }


  return (
    <div className="bg-gradient-to-b from-[#B65B00] from-0% to-[#502800] to-17% w-full h-screen overflow-hidden">
    <header className="flex justify-between bg-[#FF7F00]/35 p-5 sticky top-0 z-50">
      <div>
        <Link to="/">
          <h1 className="text-white text-3xl font-bold hover:cursor-pointer hover:text-white/80">CinemaONE</h1>
        </Link>
      </div>
        <nav className="flex gap-10 justify-center items-center text-white font-bold">
          <Link to="/">
            <button style={{color: pageSelector == "home" ? "white" : "rgba(255, 255, 255, 0.5)"}} className="hover:cursor-pointer">Home</button>
          </Link>
          <Link to="/movies">
            <button style={{color: pageSelector == "movies" || pageSelector == "moviePage" ? "white" : "rgba(255, 255, 255, 0.5)"}} className="hover:cursor-pointer">Movies</button>
          </Link>
          <Link to="/tv">
            <button style={{color: pageSelector == "tv" || pageSelector == "tvPage" ? "white" : "rgba(255, 255, 255, 0.5)"}} className="hover:cursor-pointer">TV</button>
          </Link>        
        </nav>

      <div ref={searchResultRef} className="flex relative justify-center items-center gap-2">
        <button> <Search className="text-white hover:text-white/80 hover:cursor-pointer"/> </button>
        <input onChange={e => handleSearchChange(e)} onFocus={e => handleSearchChange(e)} onBlur={e => handleSearchChange(e)} type="search" placeholder="Search Movies and TV shows" className="focus:bg-[#D9D9D9]/25 focus:outline-none focus:text-sm text-sm text-white/80 bg-[#D9D9D9]/20 border border-2 border-white  rounded-xl min-h-7 min-w-45 placeholder:text-[85%] placeholder:text-white/60 pl-2 pb-1" />
        <div className='flex flex-col overflow-y-scroll bg-[rgba(182,91,0,0.9)] rounded-md max-h-76 min-w-full max-w-full backdrop-blur-sm shadow-md shadow-black/25 absolute top-10 left-0' style={searchBool ? {display:"block"} : {display:"none"}}>
          {searchResults.map(s => 
            <Link to={s?.media_type == "movie" ? `/movies/${s?.id}` : `/tv/${s?.id}`} key={s?.id}>
              <div className='p-2 text-white rounded-md w-full h-full flex gap-2 hover:bg-white/15'>
                {s?.backdrop_path == null && s?.poster_path == null ? "" : <img className="object-cover w-13 h-auto" src={`https://image.tmdb.org/t/p/w1280/${s?.backdrop_path == null ? s?.poster_path : s?.backdrop_path}`}></img>}
                <p>{s?.name == null ? s?.title : s?.name}</p>
              </div>
            </Link>)
          }
        </div>
      </div>

    </header>
    <main className="flex h-[calc(100vh-76px)] w-full">
      <Aside pageSelector={pageSelector} dataMovie={dataMovie} dataTV={dataTV}/>
      <section className="overflow-y-auto w-full">
        {
        <Outlet context={{movie: callbackMovie, tv: callbackTV}} />
        }
      </section>
    </main>
    </div>
  )
}

export default MainLayout
