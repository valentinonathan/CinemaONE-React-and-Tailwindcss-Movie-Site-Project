import { useState } from 'react'
import { Search } from 'lucide-react'
import Movies from './content-pages/movie-page/Movies'
import Aside from './components/Aside'
import "./index.css"

function App() {

  const [dataMovie, setDataMovie] = useState({genre:[]});
  const [pageSelector, setPageSelector] = useState({home: false, movie: true, tv: false});

  function callbackMovie(data) {
    setDataMovie(d => data);
  }
  function handleHomeButton() {
    setPageSelector({home: true, movie: false, tv: false});
  }
  function handleMovieButton() {
    setPageSelector({home: false, movie: true, tv: false});
  }
  function handleTVButton() {
    setPageSelector({home: false, movie: false, tv: true});
  }

  return (
    <div className="bg-gradient-to-b from-[#B65B00] from-0% to-[#502800] to-17% w-full h-screen">
     <header className="flex justify-between bg-[#FF7F00]/35 p-5 sticky top-0 z-50">
      <div>
        <h1 className="text-white text-3xl font-bold hover:cursor-pointer hover:text-white/80">CinemaONE</h1>
      </div>
        <nav className="flex gap-10 justify-center items-center text-white font-bold">
          <button onClick={handleHomeButton} style={{color: pageSelector.home ? "white" : "rgba(255, 255, 255, 0.5)"}} className="hover:cursor-pointer">Home</button>
          <button onClick={handleMovieButton} style={{color: pageSelector.movie ? "white" : "rgba(255, 255, 255, 0.5)"}} className="hover:cursor-pointer">Movies</button>
          <button onClick={handleTVButton} style={{color: pageSelector.tv ? "white" : "rgba(255, 255, 255, 0.5)"}} className="hover:cursor-pointer">TV</button>
        </nav>
      <div className="flex justify-center items-center gap-2">
        <button> <Search className="text-white hover:text-white/80 hover:cursor-pointer"/> </button>
        <input type="search" placeholder="Search Movies and TV shows" className="focus:bg-[#D9D9D9]/25 focus:outline-none focus:text-sm text-sm text-white/80 bg-[#D9D9D9]/20 border border-2 border-white  rounded-xl min-h-7 min-w-45 placeholder:text-[85%] placeholder:text-white/60 pl-2 pb-1" />
      </div>
    </header>
    <main className="flex h-[calc(100vh-76px)]">
      <Aside pageSelector={pageSelector} dataMovie={dataMovie}/>
      <section className="overflow-y-auto">
        {pageSelector.home 
          ? null
          : pageSelector.movie
            ? <Movies callbackMovie={callbackMovie}/>
            : pageSelector.tv 
              ? null
              : null}
      </section>
    </main>
    </div>
  )
}

export default App
