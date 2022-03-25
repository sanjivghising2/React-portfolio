import React from 'react'
import "../css/navbar.css";
const Navbar = () => {
  return (
    <div>
     <header id="header">
        <a id="logo" href="n">Nice</a>
        <nav id="nav">
          <button aria-label="To Open Menu" aria-haspopup="true" aria-expanded="false" aria-controls="menu" id="btn-mobile">
            <span id="hamburguer" />
          </button>
          <ul id="menu" role="menu">
            <li><a href="#About">About Me</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>
      </header>

    </div>
  )
}

export default Navbar;