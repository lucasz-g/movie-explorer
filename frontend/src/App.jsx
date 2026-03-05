import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'
import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'

export default function App() {

  return (
    <div>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}