import {useState} from 'react';

import React from "react";
import Footer from "./Footer";
import ProjectList from './ProjectList';
import Pdf from 'url:../pdf/Resume-Ardhy-Satrio.pdf';
const projects = require("../projects").default;

function isExpandable(text) {
  let limit =100;
  return text.length > limit;
}
const Home = () => {
  return (
    <>
      <section className="section1" data-scroll-section id="data-sec">
        <div className=" home_enterance" data-scroll data-scroll-speed="0">
          <h1 className="home_title">
            <span>Ardhy</span> Satrio
          </h1>
          <div className="home_keyvisual" data-scroll data-scroll-speed="-2">
            <img src={require("../img/bg-jumbo-4.jpg")} alt="" />
          </div>
        </div>
      </section>
      <section className="section2" data-scroll-section id="data-sec2">
        <div className="content_section" data-scroll data-scroll-speed="0">
          <div className=" about_section">
            <div
              className="text_zone"
              data-scroll-repeat="false"
              data-scroll
              data-scroll-offset="300"
            >
              <div className="header">
                <h1>
                  My friends <br />
                  call me Ardi.
                </h1>
              </div>
              <div className="intro_text">
                <p>
                  Web and Mobile Developer based in Indonesia who loves to craft attractive experiences for applications & solving problems creatively with a slight addiction to coffee and music.
                </p>
                <p>
                 My flexibility as an independent developer means more dedication to enliven creative and interactive designs, all with natural usability at their core.
                </p>
              </div>
              <div className="c-cta_button-container">
              <a className="c-cta_button o-button-norm" href={Pdf} target = "_blank">
                {" "}
                Get my Resume{" "}
              </a>
              <a
                className="c-cta_button o-button"
                href="#contact"
                data-scroll-to
              >
                Let's make something special
                <span className="o-button_arrow u-icon"> → </span>
              </a>

              </div>
            </div>
            <hr className="divider" />
          </div>
          <div className="projects_section" id="direction">
            <h1
              className="section-title"
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
            {projects.slice(0, 3).map((project, index) => (
              <div key={index}>
                <ProjectList project={project}/>
              </div>
            ))}                  <div className="c-brand_logo_wrapper_wrapper -middle"  data-scroll>
            <figure className="c-brand_logo_wrapper -middle">
              <a href="/projects" className="c-brand_logo a-move" data-pjax-state="">
                See All
              </a>
            </figure>

</div>
            <a className="anchor" id="contact" data-scroll></a>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
