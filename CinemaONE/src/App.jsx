import { useState } from 'react'
import { Search } from 'lucide-react'
import Movies from './content-pages/Movies'
import "./index.css"

function App() {

  return (
    <div className="bg-gradient-to-b from-[#B65B00] from-0% to-[#502800] to-17% w-full min-h-screen">
     <header className="flex justify-between bg-[#FF7F00]/35 p-5 sticky top-0 z-50">
      <div>
        <h1 className="text-white text-3xl font-bold">CinemaONE</h1>
      </div>
        <nav className="flex gap-10 justify-center items-center text-white font-bold">
          <button>Home</button>
          <button>Movies</button>
          <button>TV</button>
        </nav>
      <div className="flex justify-center items-center gap-2">
        <button> <Search className="text-white"/> </button>
        <input type="search" placeholder="Search Movies and TV shows" className="focus:bg-[#D9D9D9]/25 focus:outline-none focus:text-sm text-sm text-white/80 bg-[#D9D9D9]/20 border border-2 border-white  rounded-xl min-h-7 min-w-45 placeholder:text-[85%] placeholder:text-white/60 pl-2 pb-1" />
      </div>
    </header>
    <main className="flex">
      <aside className="h-[calc(100vh-76px)] bg-[#3A1D00]/60 flex flex-col pl-5 pt-3 pr-20 sticky top-[76px] gap-3">
      <div>
        <a className="text-white text-xl font-semibold">Dicover</a>
      </div>
      <div className="text-sm flex flex-col gap-2 ml-3">
        <a className="text-white">Fictional</a>
      </div>
      </aside>
      <section>
        <Movies />
      </section>
    </main>
    </div>
  )
}

export default App
