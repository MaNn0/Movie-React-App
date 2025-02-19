import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react';
import Placeholder from 'react-bootstrap/Placeholder';
// import Movielist from './pages/Movielist.jsx';
// import MovieDetails from './pages/MovieDetails.jsx'
// import Watchlist from './pages/Watchlist.jsx'

const Movielist = React.lazy(() => import('./pages/Movielist'))
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'))
const Watchlist = React.lazy(() => import('./pages/Watchlist'))
import Register from './components/Register.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import './App.css'
import { useSelector } from 'react-redux';

export default function App() {
  const Language = useSelector(state => state.language.currentLanguage)


  return (
    <>
      <BrowserRouter>
        <div dir={Language === 'Arabic' ? 'rtl' : 'ltr'}>

          <Navbar />
          <Suspense fallback={<>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="wave">
              <Placeholder xs={12} />
            </Placeholder>
          </>}>
            <Routes>
              <Route path='/' element={<Movielist />} />
              <Route path='/MovieDetails/:id' element={<MovieDetails />} />
              <Route path='/Watchlist' element={<Watchlist />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/*' element='404 - Page Not Found' />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}
