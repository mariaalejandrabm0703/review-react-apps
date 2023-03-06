import { useRef } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

const OMDB_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e'
// https://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e&s=marvels

function App() {
  const movies = useMovies();
  const hasMovie = movies?.length > 0;    
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
  }

  return (
    <div className="container">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder='Avengers, Start Wars, The Matrix' />
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
    