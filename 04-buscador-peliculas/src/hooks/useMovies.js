const API_KEY = 'f810fa4e'

export const useMovies = async ({ search, setMovies }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    const results = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
      type: movie.Type
    }))

    setMovies(results);
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
