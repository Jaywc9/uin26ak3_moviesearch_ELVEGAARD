import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movie" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App