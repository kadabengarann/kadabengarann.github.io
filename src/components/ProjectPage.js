import React from "react";
import ReactDOM from "react-dom";

import { useParams } from "react-router-dom";
import Footer from "./Footer";
import "../style/project.scss";

const projects = require("./projects");

const ProjectPage = () => {
  const { projectId } = useParams();
  let image = "../img/bg-jumbo-5.jpg";
  return (
    <>
            <p style={{color: "red"}}>
        <strong>Project ID: </strong>
        {projectId}
      </p>
      <p style={{color: "red"}}>
        <strong>Project Name: </strong>
        {projects[projectId - 1].name}
      </p>

    </>
  );
};

export default ProjectPage;
