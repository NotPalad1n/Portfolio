import React from "react";
import { HashLink } from "react-router-hash-link";

import "../styles/Hero.css";

import Github from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Hero = () => {
  return (
    <div className="hero" id="Home">
      <div className="text">
        <h1>Younes Oumast</h1>
        <div className="paragraph">
          <p className="dash">-</p>
          <p>
            <span>Frontend Developer</span>, with knowledge in web development
            and design. I offer quality work resulting in the best projects.
          </p>
        </div>
        <div className="scroll">
          <HashLink to="#About" className="scrollButton">
            🡣
          </HashLink>
          <p>Scroll Down</p>
        </div>
      </div>
      <div className="image">
        <div className="picture"></div>
        <div className="icons">
          <div className="icon">
            <a href="https://www.instagram.com/younesoumast/" target="_blank">
              <img src={Instagram} alt="" />
            </a>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/younes-oumast/"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/NotPalad1n" target="_blank">
              <img src={Github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
