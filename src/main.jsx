import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import Movies from './pages/Movies/Movies.jsx'
import TV from './pages/TV/TV.jsx'
import MoviePage from './pages/Movies/MoviePage.jsx'
import TVPage from './pages/TV/TVPage.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      {index: true, element: <Home />, handle: {aside: "home"}},
      {path: "movies", element:<Movies />, handle: {aside: "movies"}},
      {path: "movies/:movieId", element: <MoviePage />, handle: {aside: "moviePage"}},
      {path: "tv/:tvId", element: <TVPage />, handle: {aside: "tvPage"}},
      {path: "tv", element: <TV />, handle: {aside: "tv"}},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
