import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import Movies from '../pages/Movies/Movies'
import Aside from '../components/Aside'
import TV from '../pages/TV/TV'
import Home from '../pages/Home/Home'
import "../index.css"
import { getGenreTV } from '../services/tv'
import MoviePage from '../pages/Movies/MoviePage'
import { Outlet, Link, useMatches } from "react-router-dom"

function MainLayout() {

  const [dataMovie, setDataMovie] = useState({genre:[]});
  const [dataTV, setDataTV] = useState({genre:[]});

  const pageSelector = useMatches()[1]?.handle?.aside;

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
        <h1 className="text-white text-3xl font-bold hover:cursor-pointer hover:text-white/80">CinemaONE</h1>
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
      <div className="flex justify-center items-center gap-2">
        <button> <Search className="text-white hover:text-white/80 hover:cursor-pointer"/> </button>
        <input type="search" placeholder="Search Movies and TV shows" className="focus:bg-[#D9D9D9]/25 focus:outline-none focus:text-sm text-sm text-white/80 bg-[#D9D9D9]/20 border border-2 border-white  rounded-xl min-h-7 min-w-45 placeholder:text-[85%] placeholder:text-white/60 pl-2 pb-1" />
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
