import React from "react";
import { useState, useEffect, useRef } from "react";

import Footer from "./Footer";
import "../style/projects.scss";
import ProjectList from "./ProjectList";

const projects = require("../projects").default;

const ProjectsPage = () => {
  return (
    <>
      <section className="section2" data-scroll-section id="data-sec2">
        <div className="content_section projectsList" data-scroll data-scroll-speed="0">
          <div className="projects_section --projects" id="direction">
            <h1
              className="section-title --projects"
              data-scroll-call="testEvent1"
              data-scroll-repeat="true"
              data-scroll
              data-scroll-offset="-1000"
            >
              <div
                className="section-title-container"
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="2"
                data-scroll-target="#direction"
              >
                <div className="section-title-marquee">
                  <div className="section-title-inner">
                  <span className="section-title-inner-text">Projects</span>
                </div>
                <div className="section-title-inner">
                  <span className="section-title-inner-text">Projects</span>
                </div>
                <div className="section-title-inner">
                  <span className="section-title-inner-text">Projects</span>
                </div>
                <div className="section-title-inner">
                  <span className="section-title-inner-text">Projects</span>
                </div>
                </div>
              </div>
            </h1>
            {projects.map((project, index) => (
              <div className="itemProj" key={index}>
                <ProjectList project={project}/>
              </div>
            ))}
            <a className="anchor" id="contact" data-scroll></a>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
