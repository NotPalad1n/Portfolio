import React from 'react'
import { HashLink } from "react-router-hash-link";

import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <span>© All rights reserved by</span> Younes Oumast
      </p>
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
          <HashLink to="#Home">🡡</HashLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer