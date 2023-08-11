import React from "react";

import "../styles/Services.css";

import Globe from "../assets/globe.png"
import Phone from "../assets/phone.png"
import Code from "../assets/code.png"

const Services = () => {
  return (
    <div className="services" id="Services">
      <h1>Services.</h1>
      <div className="cards">
        <div className="card">
          <div className="placeholder">
            <img src={Globe} alt="" className="icon" />
            <div className="orangeBox"></div>
          </div>
          <p className="header">Web Design</p>
          <p>
            Beautiful and elegant designs with interfaces that are intuative,
            efficient and pleasant to use for the user.
          </p>
        </div>
        <div className="card">
          <div className="placeholder">
            <img src={Code} alt="" className="icon" />
            <div className="orangeBox"></div>
          </div>
          <p className="header">Development</p>
          <p>
            Custom web development tailored to your specifications designed to
            provide a flawless user experience
          </p>
        </div>
        <div className="card">
          <div className="placeholder">
            <img src={Phone} alt="" className="icon" />
            <div className="orangeBox"></div>
          </div>
          <p className="header">Mobile App</p>
          <p>
            Responsive websites that work on both computer and mobile screens to
            provide a great experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
