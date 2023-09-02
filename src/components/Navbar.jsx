import React from 'react'
import { HashLink } from "react-router-hash-link";

import "../styles/Navbar.css"

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false)
  
  function toggle(){
    setIsClicked(!isClicked)
  }

  return (
    <div className={isClicked ? "navbar toggle" : "navbar"}>
      <div className="logo">
        <p className="icon">Y</p>
        <p>Younes Oumast</p>
      </div>
      <ul className={isClicked ? "nav-links active" : "nav-links"}>
        <li>
          <HashLink to="#Home" onClick={toggle}>Home</HashLink>
        </li>
        <li>
          <HashLink to="#About" onClick={toggle}>About Me</HashLink>
        </li>
        <li>
          <HashLink to="#Services" onClick={toggle}>Services</HashLink>
        </li>
        <li>
          <HashLink to="#Projects" onClick={toggle}>Projects</HashLink>
        </li>
        <li>
          <HashLink to="#Contact" className="button" onClick={toggle}>
            Contact Me
          </HashLink>
        </li>
      </ul>
      <div className="hamburger-button" onClick={toggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
}

export default Navbar