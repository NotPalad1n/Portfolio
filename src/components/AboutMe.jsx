import React from "react";

import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <div className="image">
        <div className="picture">
          <div className="orangeBar"></div>
        </div>
      </div>
      <div className="text">
        <h1>About Me.</h1>
        <div className="paragraph">
          <p className="dash">-</p>
          <p>
            Hi there! I'm <span>Younes Oumast</span>, I m 19 years old and
            passionate about creating web pages and ui/ux using{" "}
            <span>React</span>. I have honed my skills to deliver{" "}
            <span>high-quality</span>, <span>tailor-made</span> solutions for
            each client.
          </p>
        </div>
        <div className="paragraph">
          <p className="dash">-</p>
          <p>
            <span>My skills are</span> : HTML, CSS, JavaScript, React, Git &
            Github, Photoshop, C
          </p>
        </div>
        <div className="buttonContainer">
          <a href="#" className="button">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
