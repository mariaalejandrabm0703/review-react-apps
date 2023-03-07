import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';

const OMDB_API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e'
// https://www.omdbapi.com/?i=tt3896198&apikey=f810fa4e&s=marvels

function useSearch() {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = movie === ''
      return
    }

    if (movie === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (movie.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (movie.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [movie])
  return { movie, setMovie, error }
}

function App() {
  const movies = useMovies();
  const hasMovie = movies?.length > 0;
  const { movie, setMovie, error } = useSearch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(movie);
  }

  const handleChangeMovie = (event) => {
    setMovie(event.target.value);
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid gray',
            borderColor: error ? 'red' : 'gray'
          }} value={movie} onChange={handleChangeMovie} placeholder='Avengers, Start Wars, The Matrix' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {hasMovie
          ? (<Movies movies={movies} />)
          : (<p>No hay peliculas disponibles con esa busqueda</p>)
        }
      </main>
    </div>
  )
}

export default App
