import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import Movies from './pages/Movies/Movies'
import Aside from './components/Aside'
import TV from './pages/TV/TV'
import Home from './pages/Home/Home'
import "./index.css"
import { getGenreTV } from './services/tv'
import MoviePage from './pages/Movies/MoviePage'
import MainLayout from './layout/MainLayout'

function App() {
  return (
    <MainLayout />
  );
}

export default App
