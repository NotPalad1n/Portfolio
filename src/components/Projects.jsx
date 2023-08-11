import React from "react";

import ProjectCard from "./ProjectCard";
import ProjectsData from "../data/ProjectsData";

import "../styles/Projects.css";

const Projects = () => {
  const [projectsData, setProjectsData] = React.useState(ProjectsData);

  const projectElements = projectsData.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <div className="projects" id="Projects">
      <h1>Projects.</h1>
      <div className="cards">{projectElements}</div>
    </div>
  );
};

export default Projects;
