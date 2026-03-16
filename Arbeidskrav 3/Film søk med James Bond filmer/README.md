# uin26ak3_moviesearch_LASTNAME

React-applikasjon for filmsøk med OMDB API. Laget som del av arbeidskrav 3.

## Komme i gang

```bash
npm install
npm run dev
```

Husk å opprette en `.env`-fil basert på `.env.example` og legg inn API-nøkkelen din fra OMDB.

## Teknologier

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
