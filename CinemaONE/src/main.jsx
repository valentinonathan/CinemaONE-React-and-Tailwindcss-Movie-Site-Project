import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import Movies from './pages/Movies/Movies.jsx'
import TV from './pages/TV/TV.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <MainLayout />,
    children: [
      {index: true, element: <Home />, handle: {aside: "home"}},
      {path: "movies", element:<Movies />, handle: {aside: "movies"}},
      {path: "tv", element: <TV />, handle: {aside: "tv"}}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
