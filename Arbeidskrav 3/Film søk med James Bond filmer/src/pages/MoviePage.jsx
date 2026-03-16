import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieByTitle } from '../api'

function MoviePage() {
  const { movie } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const [detaljer, setDetaljer] = useState(null)
  const [laster, setLaster] = useState(true)
  const [feil, setFeil] = useState(false)

  useEffect(() => {
    // hvis vi navigerte hit fra en filmkort har vi tittelen i state,
    // ellers prøver vi å gjenskape tittelen fra sluggen
    const tittel = location.state?.title ?? movie.replace(/-/g, ' ')

    async function hentFilm() {
      try {
        const data = await getMovieByTitle(tittel)
        if (data.Response === 'False') {
          setFeil(true)
        } else {
          setDetaljer(data)
        }
      } catch (err) {
        console.error(err)
        setFeil(true)
      } finally {
        setLaster(false)
      }
    }

    hentFilm()
  }, [movie])

  if (laster) {
    return (
      <main className="movie-page">
        <p className="status-text">Henter film...</p>
      </main>
    )
  }

  if (feil || !detaljer) {
    return (
      <main className="movie-page">
        <p className="error-text">Fant ikke filmen.</p>
        <button className="back-btn" onClick={() => navigate('/')}>Tilbake til forsiden</button>
      </main>
    )
  }

  return (
    <main className="movie-page">
      <nav className="breadcrumb">
        <button className="back-btn" onClick={() => navigate('/')}>Tilbake</button>
      </nav>

      <article className="film-detaljer">
        <header className="film-header">
          <h1>{detaljer.Title}</h1>
          <p className="film-meta">
            {detaljer.Year} &middot; {detaljer.Rated} &middot; {detaljer.Runtime}
          </p>
          <p className="film-genre">{detaljer.Genre}</p>
        </header>

        <section className="film-innhold">
          {detaljer.Poster !== 'N/A' && (
            <figure className="film-plakat">
              <img src={detaljer.Poster} alt={`Filmplakat for ${detaljer.Title}`} />
            </figure>
          )}

          <section className="film-tekst">
            <p className="film-plot">{detaljer.Plot}</p>

            <ul className="film-fakta">
              <li><strong>Regissør:</strong> {detaljer.Director}</li>
              <li><strong>Skuespillere:</strong> {detaljer.Actors}</li>
              <li><strong>Språk:</strong> {detaljer.Language}</li>
              <li><strong>IMDB-rangering:</strong> {detaljer.imdbRating} / 10</li>
              {detaljer.Awards !== 'N/A' && (
                <li><strong>Priser:</strong> {detaljer.Awards}</li>
              )}
            </ul>
          </section>
        </section>
      </article>
    </main>
  )
}

export default MoviePage
