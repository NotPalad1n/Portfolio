import React from 'react'
import { HashLink } from "react-router-hash-link";

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
          <HashLink to="#Home">Home</HashLink>
        </li>
        <li>
          <HashLink to="#About">About Me</HashLink>
        </li>
        <li>
          <HashLink to="#Services">Services</HashLink>
        </li>
        <li>
          <HashLink to="#Projects">Projects</HashLink>
        </li>
        <li>
          <HashLink to="#Contact" className="button">
            Contact Me
          </HashLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar