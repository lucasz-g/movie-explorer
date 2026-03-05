import '../css/Favorites.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

export default function Favorite() {
    const { favorites } = useMovieContext();
    
    if (favorites) {
        return (
        <div className='Favorites'>
            <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />   
                ))}
            </div>
        </div>)
    }

    return (
        <div className="favorites-empty">
            <h2>No favorites yet</h2>
            <p>Start adding movies to your favorites!</p>
        </div>
    )
}