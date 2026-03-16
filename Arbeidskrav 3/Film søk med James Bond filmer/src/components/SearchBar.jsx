function SearchBar({ value, onChange }) {
  return (
    <section className="search-section">
      <label htmlFor="movie-search">Søk etter film</label>
      <input
        id="movie-search"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Skriv minst 3 tegn for å søke..."
        autoComplete="off"
      />
      {value.length > 0 && value.length < 3 && (
        <p className="search-hint">Fortsett å skrive...</p>
      )}
    </section>
  )
}

export default SearchBar
