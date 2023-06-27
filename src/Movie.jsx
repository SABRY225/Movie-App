import {movies} from './data/movies'
import  './Movie.css'
function Movie() {
return (
    <div>
        <div className="Movies-class">
        <h2 className='header'>Movie App</h2>
        <ul className='movie-list' type="none">
        {
                movies.map((movie) => (
                    <li className="moive" key={movie.id}>
                        <img src={movie.Images[1]}  width="250px" height="250px" alt={movie.title}/>
                        <p>{movie.Title} by {movie.Director} was released on {movie.Year}</p>
                        <p>Language: {movie.Language}</p>
                        <p>Country: {movie.Country}</p>
                        <p>Actors: {movie.Actors}</p>
                        <p>Rating: {movie.Rated}</p>
                        <p>Genre: {movie.Genre}</p>
                    </li>
                ))
            }
        </ul>

        </div>
    </div>
)
}

export default Movie
