import React from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import "../style/project.scss";
import NoMatchPage from "./NoMatchPage";

const projects = require("../projects").default;

const ProjectPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("id");
  const project = projects.find((p) => p.id === Number(id));
  console.log(project);
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
                data-scroll-offset="-1000"
              >
                <div
                  className="section-title-container"
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="1"
                  data-scroll-target="#direction"
                >
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
              </h1>
              <div className="project_images">
                <div className="project_images_grid">
                  <div className="o-layout_item project_images_col bottom">
                    <div
                      className="project_image_wrapper"
                      style={{
                        backgroundImage:
                          "url(" + project.img + ")",
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
                        backgroundImage:
                          "url(" + project.img2 + ")",
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
                <div className="project_content_inner">
                  <p className="project_content_text">
                    {project.desc}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eaque eos officiis alias sed fugit iusto, sunt unde dolorum.
                    Impedit dolores perferendis sunt, repellendus nostrum
                    debitis at possimus asperiores. Ullam, facere?
                  </p>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="project_content_link o-button"
                  >
                    Visit website
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
