import React from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from '../src/images/background.jpg'


function App() {
  return (
    <div className='App'>
      <div className='Home' style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        maxWidth: '100%'
      }}>
      <div className='Navbar'>
        <Navbar />
      </div>
        <Home />
      </div>
      <div id="about" className='About'>
        <About />
      </div>
      <div id="projects" className='Portfolio'>
        <Portfolio />
      </div>
      <div id="contact" className='Contact'>
        <Contact />
      </div>
    </div>
  ); 
}

export default App;
