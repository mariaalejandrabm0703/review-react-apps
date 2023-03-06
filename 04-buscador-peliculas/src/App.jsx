import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

const OMDB_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e'
// https://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e&s=marvels

function App() {
  const movies = useMovies();
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
          <Movies movies={movies} />
          :
          <p>No hay peliculas</p>
        }
      </main>
    </div>
  )
}

export default App
    