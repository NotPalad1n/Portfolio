import React from 'react'

import Github from "../assets/github-black.png"
import Globe from "../assets/globe.png";

import "../styles/ProjectCard.css"

const ProjectCard = (props) => {
  return (
    <div className="projectCard">
      <div className="placeholder">
        <img src={"./projects/" + props.project.img + ".png"} alt="img" />
        <a href={props.project.url} className="button">
          🡥
        </a>
      </div>
      <div className="type">
        <div className="dash"></div>
        <p>{props.project.type}</p>
      </div>
      <div className="info">
        <p className="name">{props.project.name}</p>
        <p className='description'>{props.project.description}</p>
      </div>
      <div className="links">
        <div>
          <img src={Github} alt="github" className="icon" />
          <a href={props.project.github}>View</a>
        </div>
        <div>
          <img src={Globe} alt="globe" className="icon" />
          <a href={props.project.url}>View</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard