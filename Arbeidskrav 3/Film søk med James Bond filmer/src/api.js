const API_KEY = import.meta.env.VITE_OMDB_KEY
const BASE_URL = 'https://www.omdbapi.com/'

// søk returnerer alltid maks 10 resultater fra OMDB per side
export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`)
  const data = await res.json()

  if (data.Response === 'False') return []
  return data.Search
}

export async function getMovieByTitle(title) {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(title)}&plot=full`)
  const data = await res.json()
  return data
}
