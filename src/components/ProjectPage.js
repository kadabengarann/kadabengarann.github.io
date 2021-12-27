import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import "../style/projects.scss";

const projects = require("./projects");

const ProjectPage = ({ match, location }) =>{
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === Number(projectId));
  console.log(project);
  return (
              <><section className="section2" data-scroll-section id="data-sec2">
        <div className="content_section" data-scroll data-scroll-speed="0">

              <div className="projects_section" id="direction">
            <h1 className="section-title projects" data-scroll-call="testEvent1" data-scroll-repeat="true" data-scroll
              data-scroll-offset="-1000">
              <div className="section-title-container" data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="1" data-scroll-target="#direction">
                <div className="section-title-inner">
                  <span className="section-title-inner-text">{project.name}</span>
                </div>
                <div className="section-title-inner">
                  <span className="section-title-inner-text">Projects</span>
                </div>
                <div className="section-title-inner">
                  <span className="section-title-inner-text">Projects</span>
                </div>
              </div>
            </h1>
            {projects.map((project, index) => (
              <div key={index}><section className="block_details">
                <div className="block_details_inner">
                  <div className="block_details_text" data-scroll-repeat="false" data-scroll data-scroll-offset="200">
                    <h1 className="block_details_title" >{project.name}</h1>
                    <p>
                      {project.desc}
                    </p>
                    <div className="block_details_links" data-scroll>
                    <a href={project.demo} target="_blank"
                    className="o-link">
                    Visit website
                  </a>
                    </div>
                  </div>
                  <div className="block_details_photo" data-scroll data-scroll-offset="200">
                    <div className="base">
                      <div className="hole">
                          <a href={`/project/`+(index+1)} 
                    className="o-link">
                    View details
                  </a>
                      </div>
                    </div>
                    <div style={{   
  backgroundImage: "url(" + project.thumb + ")" }} className="back" data-scroll data-scroll-speed="-0.8"></div>
                  </div>
                </div>
              </section></div>
            ))}
            <a className="anchor" id="contact" data-scroll></a>
          </div>
          <Footer/>
        </div>
      </section></> 
  );
};

export default ProjectPage;
