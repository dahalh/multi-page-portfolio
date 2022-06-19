import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, desc, shortDesc, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <p>{shortDesc}</p>
    </div>
  );
};

export default ProjectItem;
