import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import "./Navbar.css"
import About from "./About"
import { Link, Route, Router } from "react-router-dom"


function navbar() {
  return (
    <div className="navb">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          {/*<h5 class="text-white h4">Esther Urzanqui</h5> */}
          <li class="nav-item">
          
          </li>
        </div>
      </div>
  
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button 
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

export default navbar