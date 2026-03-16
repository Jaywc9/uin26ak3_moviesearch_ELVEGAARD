import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieList from '../components/MovieList'
import { searchMovies } from '../api'

function Home() {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [bondMovies, setBondMovies] = useState([])
  const [loading, setLoading] = useState(false)
  // TODO: kanskje vise feilmeldingen tydeligere?
  const [error, setError] = useState(null)

  useEffect(() => {
    async function hentBondFilmer() {
      try {
        const filmer = await searchMovies('James Bond')
        setBondMovies(filmer.slice(0, 10))
      } catch (err) {
        console.error('Noe gikk galt ved henting av Bond-filmer:', err)
      }
    }

    hentBondFilmer()
  }, [])

  useEffect(() => {
    if (query.length < 3) {
      setSearchResults([])
      setError(null)
      return
    }

    setLoading(true)

    const timeout = setTimeout(async () => {
      try {
        const resultater = await searchMovies(query)
        setSearchResults(resultater)
        setError(null)
      } catch (err) {
        setError('Klarte ikke å hente filmer. Sjekk tilkoblingen og prøv igjen.')
      } finally {
        setLoading(false)
      }
    }, 500)

    return () => clearTimeout(timeout)
  }, [query])

  const viserSok = query.length >= 3

  return (
    <main className="home-page">
      <header className="page-header">
        <h1>Filmsøk</h1>
        <p>Søk blant tusenvis av filmer fra OMDB-databasen</p>
      </header>

      <SearchBar value={query} onChange={setQuery} />

      {loading && <p className="status-text">Søker...</p>}
      {error && <p className="error-text">{error}</p>}

      {viserSok ? (
        <MovieList
          movies={searchResults}
          heading={`Resultater for "${query}"`}
        />
      ) : (
        <MovieList
          movies={bondMovies}
          heading="James Bond-filmer"
        />
      )}
    </main>
  )
}

export default Home
