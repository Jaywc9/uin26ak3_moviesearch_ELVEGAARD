import { useNavigate } from 'react-router-dom'

function MovieCard({ movie }) {
  const navigate = useNavigate()

  function handleClick() {
    // lager slug av tittel – ikke perfekt løsning men fungerer for de fleste
    const slug = movie.Title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    navigate(`/${slug}`, { state: { title: movie.Title } })
  }

  return (
    <li className="movie-card" onClick={handleClick}>
      <figure className="movie-poster">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <p className="no-poster">Ingen plakat</p>
        )}
      </figure>
      <footer className="movie-card-info">
        <h2>{movie.Title}</h2>
        <p>{movie.Year}</p>
      </footer>
    </li>
  )
}

export default MovieCard
