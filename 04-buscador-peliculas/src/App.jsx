import './App.css';
import responseMovies from './mocks/results.json';

const OMDB_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e'
// https://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e&s=marvels

function App() {
  const movies = responseMovies.Search;
  const hasMovie = movies?.length > 0;

  return (
    <div className="container">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Start Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {hasMovie ?
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                <a target="_blank" href={`https://www.imdb.com/title/${movie.imdbID}`}>
                  <h3>{movie.Title}</h3>
                </a>
                <p>Año: {movie.Year}</p>
                <p>Tipo: {movie.Type}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
          :
          <p>No hay peliculas</p>
        }
      </main>
    </div>
  )
}

export default App
