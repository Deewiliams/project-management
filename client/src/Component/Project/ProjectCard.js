import React from "react";
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "start",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <h3>{project.name}</h3>
        <Link to={`/project/${project.id}`}>
        <Button>View</Button>
        </Link>
      </div>
      <p
        style={{
          textAlign: "start",
            }}
      >
        Status: <span  style={{
          color: "black",
          fontWeight: "bold",
        }}>{project.status}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
