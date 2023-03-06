import responseMovies from '../mocks/results.json';

export function useMovies () {
  return responseMovies.Search?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
    type: movie.Type
  }))
}
