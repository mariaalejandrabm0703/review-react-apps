import { useRef } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

const OMDB_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e'
// https://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e&s=marvels

function App() {
  const movies = useMovies();
  const hasMovie = movies?.length > 0;    

  const handleSubmit = (event) => {
    event.preventDefault();
    const { movie } = Object.fromEntries(new window.FormData(event.target));
    console.log(movie);
    if(movie === '') return
  }

  return (
    <div className="container">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input name="movie" placeholder='Avengers, Start Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {hasMovie ?
          <Movies movies={movies} />
          :
          <p>No hay peliculas disponibles con esa busqueda</p>
        }
      </main>
    </div>
  )
}

export default App
    