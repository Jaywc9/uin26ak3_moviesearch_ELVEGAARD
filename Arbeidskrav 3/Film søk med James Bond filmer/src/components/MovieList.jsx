import MovieCard from './MovieCard'

function MovieList({ movies, heading }) {
  if (!movies || movies.length === 0) {
    return <p className="list-empty">Ingen filmer funnet.</p>
  }

  return (
    <section className="movie-list-wrapper">
      {heading && <h2 className="list-heading">{heading}</h2>}
      <ul className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </section>
  )
}

export default MovieList
