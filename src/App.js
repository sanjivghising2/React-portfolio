import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Service from './components/Service'

const App = () => {
  return (
    <div>App
    <Navbar />
    <About />
    <Service />
    <Contact />
    <Footer />
    </div>
  )
}

export default App