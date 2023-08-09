import React from 'react'

import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="icon">Y</p>
        <p>Younes Oumast</p>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#" className="button">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar