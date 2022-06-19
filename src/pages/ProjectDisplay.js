import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1 className="name">{project.name}</h1>
      <img src={project.image} alt="project pic" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p className="desc">{project.desc}</p>
      <div className="links">
        <a target="_blank" rel="noreferrer" href={project.chrome}>
          <i class="fa-brands fa-chrome"></i>
        </a>
        <a target="_blank" rel="noreferrer" href={project.git}>
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
