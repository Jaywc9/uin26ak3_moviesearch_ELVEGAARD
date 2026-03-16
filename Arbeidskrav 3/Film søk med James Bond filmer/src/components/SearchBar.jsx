function SearchBar({ value, onChange }) {
  return (
    <section className="search-section">
      <label htmlFor="movie-search">Søk etter film</label>
      <input
        id="movie-search"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Skriv minst 3 tegn"
        autoComplete="off"
      />
    </section>
  )
}

export default SearchBar
