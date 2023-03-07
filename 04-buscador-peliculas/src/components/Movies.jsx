export function Movies({ movies }) {
    return (
        <ul className='movies'>
            {movies.map(movie => (
                <li key={movie.id} className='movie'>
                    <a target="_blank" href={`https://www.imdb.com/title/${movie.id}`}>
                        <h3>{movie.title}</h3>
                    </a>
                    <div className='movie'> 
                        <p>Año: {movie.year}</p>
                        <p>Tipo: {movie.type}</p>
                    </div>
                    <img src={movie.image} alt={movie.title} />
                </li>
            ))}
        </ul>
    )
}