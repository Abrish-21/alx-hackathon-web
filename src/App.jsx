import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Resources from './pages/Resources'
import Registration from './pages/Registration'
import ContactUs from './pages/ContactUs'
import CheckIn from './pages/CheckIn'
import Navbar from './layouts/Navbar'

function App() {
  return (
    <div className='bg-blue-500'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/check-in' element={<CheckIn />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App