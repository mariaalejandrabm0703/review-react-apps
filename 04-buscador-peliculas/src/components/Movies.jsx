export function Movies({ movies }) {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <a target="_blank" href={`https://www.imdb.com/title/${movie.id}`}>
                        <h3>{movie.title}</h3>
                    </a>
                    <p>Año: {movie.year}</p>
                    <p>Tipo: {movie.type}</p>
                    <img src={movie.image} alt={movie.title} />
                </li>
            ))}
        </ul>
    )
}