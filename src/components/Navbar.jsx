import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import "./Navbar.css"


function Navbar() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      })
    }
  }
  
  return (
    <div className="navb">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul className="navbar-list">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('projects')}>Projects</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </div>
  
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button 
            id="navbarToggle"
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarToggleExternalContent" 
            aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar