import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project mt-3">
      {/* <h1 className="name">{project.name}</h1> */}
      <img className="mt-5" src={project.image} alt="project pic" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p className="desc">{project.desc}</p>
      <div className="links mt-3 mb-4">
        <a target="_blank" rel="noreferrer" href={project.chrome}>
          <i class="fa-brands fa-chrome fa-2x"></i>
        </a>
        <a target="_blank" rel="noreferrer" href={project.git}>
          <i class="fa-brands fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectDisplay;
