## Det som blir brukt

- React 18 + Vite
- React Router v6
- OMDB API

## Struktur

```
src/
  components/
    SearchBar.jsx     søkefelt-komponent
    MovieCard.jsx     enkelt filmkort i listevisning
    MovieList.jsx     wrapper som viser en liste med filmkort
  pages/
    Home.jsx          forside med søk og standardliste
    MoviePage.jsx     detaljside for enkeltfilm
  api.js              fetch-funksjoner mot OMDB
```