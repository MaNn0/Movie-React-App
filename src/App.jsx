import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movielist from './pages/Movielist.jsx';
import MovieDetails from './pages/MovieDetails.jsx'
import Watchlist from './pages/Watchlist.jsx'
import Register from './components/Register.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import './App.css'
export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Movielist' element={<Movielist />} />
          <Route path='/MovieDetails/:id' element={<MovieDetails />} />
          <Route path='/Watchlist' element={<Watchlist />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/*' element='404 - Page Not Found' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}