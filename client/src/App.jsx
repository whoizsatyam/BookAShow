import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/Movies/:id' element={<MovieDetails />} />
        <Route path='/Movies/:id/:date' element={<SeatLayout />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/favourite' element={<Favourites />} />


      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
