import { Button } from "@material-ui/core";
import React from "react";

const ProjectCard = ({ project }) => {
  console.log("hello projects", project);
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
        <Button>View</Button>
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
