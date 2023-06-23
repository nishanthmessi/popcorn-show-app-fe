import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './components/LoginModel'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
import AboutMovie from './pages/AboutMovie'
import Contact from './components/Contact'
import AddMovie from './pages/AddMovie'

export const CommonContext = React.createContext()
const apiurl = 'https://movie-booking-app-be.onrender.com'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CommonContext.Provider value={{ apiurl }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login-register' element={<Login />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/movie-overview' element={<AboutMovie />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/create-movie' element={<AddMovie />} />
          </Routes>
          <Footer />
        </CommonContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
