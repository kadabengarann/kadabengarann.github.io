import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation, useParams } from "react-router-dom";

import Footer from "./Footer";
import "../style/projects.scss";
import NoMatchPage from './NoMatchPage';

const projects = require("./projects");

const ProjectPage = ({ projectId }) =>{
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  // const { projectId } = useParams();
  // let query = useQuery();
  // const projectId = query.get("id");
  console.log('woy tot');
  // console.log(projectId);

  const project = projects.find((p) => p.id === Number(id));
  console.log(project);
  return (
    <>
    {project ? (<section className="section2" data-scroll-section id="data-sec2">
        <div className="content_section" data-scroll data-scroll-speed="0">

              HAHA {project.name}
        </div>
      </section>): (
        <NoMatchPage/>
      )}
              </> 
  );
};

export default ProjectPage;
