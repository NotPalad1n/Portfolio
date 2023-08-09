import React from "react";
import "../styles/Hero.css";

import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <h1>Younes Oumast</h1>
        <div className="paragraph">
          <p className="dash">{"-"}</p>
          <p>
            <span>Frontend Developer</span>, with knowledge in web development
            and design. I offer quality work resulting in the best projects.
          </p>
        </div>
        <div className="scroll">
          <p className="scrollButton">🡣</p>
          <p>Scroll Down</p>
        </div>
      </div>
      <div className="image">
        <div className="picture"></div>
        <div className="icons">
          <div className="icon">
            <img src={Instagram} alt="" />
          </div>
          <div className="icon">
            <img src={Linkedin} alt="" />
          </div>
          <div className="icon">
            <img src={Github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
