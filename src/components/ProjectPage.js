import React from "react";
import { useState, useEffect, useRef } from "react";

import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import "../style/project.scss";
import NoMatchPage from "./NoMatchPage";
const TechStacks = require("../TechStacks").default;

const projects = require("../projects").default;
function filterById(jsonObject, id) {
  return jsonObject.filter(function (jsonObject) {
    return jsonObject["id"] == id;
  })[0];
}
const ProjectPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const project = projects.find((p) => p.id === Number(id));
  console.log(project);


  const prevId = id == 1 ? projects.length: Number(id)-1;
  console.log(prevId);
  const nextId = id == projects.length ? 1: Number(id)+1;
  console.log(nextId);
  const prev = projects.find((p) => p.id === Number(prevId));
  const next = projects.find((p) => p.id === Number(nextId));
  let techs = [];
  // let selectedObject = filterById(TechStacks, project.tech[0])
  // console.log(selectedObject);
  // techs.push(selectedObject)
  // techs.push(selectedObject)
  // project.tech.map((techs, index) => (
  //   techs.push(techs)
  // ));
  project.tech.forEach((item) => {
    let selectedObject = filterById(TechStacks, item);
    techs.push(selectedObject);
  });
  console.log("eh");

  techs.forEach((item) => {
    console.log(item);
  });
  console.log("eh");
  //  selectedObject = filterById(TechStacks, project.tech[0]);
  const refs = useRef(null);
  const marqconts = useRef(null);
  const speeds = 5;
  let duration = (project.name.length * 20 + 100) / speeds;

  useEffect(() => {
    console.log("lebar", refs.current.offsetWidth);
    // duration = (refs.current.offsetWidth *2 ) / speeds;
    console.log(duration);
    marqconts.current.style.animationDuration = `${duration}s`;
  }, []);
  return (
    <>
      {project ? (
        <section className="section2" data-scroll-section id="data-sec2">
          <div className="content_section" data-scroll data-scroll-speed="0">
            <div className="projects_section -detail" id="direction">
              <h1
                className="section-title project"
                data-scroll-call="testEvent1"
                data-scroll-repeat="true"
                data-scroll
                // data-scroll-offset="-1000"
              >
                <div
                  className="section-title-container"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="2"
                  data-scroll-target="#direction"
                >
                  <div
                    ref={marqconts}
                    className="section-title-marquee -detail"
                  >
                    <div className="section-title-inner">
                      <span ref={refs} className="section-title-inner-text">
                        {project.name}
                      </span>
                    </div>
                    <div className="section-title-inner">
                      <span className="section-title-inner-text">
                        {project.name}
                      </span>
                    </div>
                    <div className="section-title-inner">
                      <span className="section-title-inner-text">
                        {project.name}
                      </span>
                    </div>
                    <div className="section-title-inner">
                      <span className="section-title-inner-text">
                        {project.name}
                      </span>
                    </div>
                  </div>
                </div>
              </h1>
              <div className="project_images" data-scroll>
                <div className="project_images_grid">
                  <div className="o-layout_item project_images_col bottom">
                    <div
                      className="project_image_wrapper"
                      style={{
                        backgroundImage: "url(" + project.img + ")",
                      }}
                    ></div>
                  </div>
                  <div className="o-layout_item project_images_col top">
                    {" "}
                    <div
                      className="project_image_wrapper"
                      data-scroll
                      data-scroll-speed="-0.7"
                      style={{
                        backgroundImage: "url(" + project.img2 + ")",
                      }}
                    ></div>
                  </div>
                  <figure className="c-brand_logo_wrapper -top">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="c-brand_logo"
                      data-pjax-state=""
                    >
                      {project.shortName}
                    </a>
                  </figure>
                </div>
              </div>
              <div className="project_content bottom">
                <div className="project_content_inner" data-scroll>
                  <p className="project_content_text">{project.desc}</p>
                  <div>
                    <h3 className="project_content_title">
                      Tech stack used in this project
                    </h3>
                    <p className="project_content_text">
                      In this project, I employed the following technologies:
                    </p>
                    <div className="project_content_tech-stack">
                      {techs.map((techs, index) => (
                        <div key={index} className="tech-stack_item">
                          <img src={techs.image} alt="" />
                          <span>{techs.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project_content-footer">
                <div className="other-works-container">
                <a
                  href={`/project?id=` + prev.id}
                  className="cta"
                >
                  <div className="previous">
                    <img
                      src={require("../img/arrow-left.png")}
                      alt="previous work icon"
                      className="arrow-icon"
                    />
                    <div className="previous-content">
                      <span>Previous Project:</span>
                      <p>{prev.name}</p>
                    </div>
                  </div>
                </a>
                <a href={`/projects`} className="all-works cta o-link">Back to all projects</a>
<a href={`/project?id=` + next.id} className="cta">
            <div className="next">
              <div className="next-content">
                <span>Next Project:</span>
                  <p>{next.shortName}</p>
              </div>
              <img src={require("../img/arrow-right.png")} alt="next work icon" className="arrow-icon"/>
            </div>
          </a> 
                </div>
             </div>
              <a className="anchor" id="contact" data-scroll></a>
            </div>
            <Footer />
          </div>
        </section>
      ) : (
        <NoMatchPage />
      )}
    </>
  );
};

export default ProjectPage;
