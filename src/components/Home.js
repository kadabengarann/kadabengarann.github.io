import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Footer";

const projects = require('../projects').default;

const Home = () => {
  return (
    <><section className="section1" data-scroll-section id="data-sec">
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
            <div className="text_zone" data-scroll-repeat="false" data-scroll data-scroll-offset="300">
              <div className="header">
                <h1>
                  My friends <br />
                  call me Ardi.
                </h1>
              </div>
              <div className="intro_text">
                <p>
                  I’m a Web Developer based in Indonesia. Coding is my passion
                  and my professional career focus. Developing applications for
                  the web has become my drive
                </p>
                <p>
                  I like to think it’s because lightning strikes every time I
                  create, but I’m pretty sure they’re just trying to save on
                  syllables.
                </p>
              </div>
              <a className="c-cta_button o-button-norm" href="#">
                {" "}
                Get my Resume{" "}
              </a>
              <a className="c-cta_button o-button" href="#contact" data-scroll-to>
                Let's make something special
                <span className="o-button_arrow u-icon"> → </span>
              </a>
            </div>
            <hr className="divider" />
          </div>
          <div className="projects_section" id="direction">
            <h1 className="section-title" data-scroll-call="testEvent1" data-scroll-repeat="true" data-scroll
              data-scroll-offset="-1000">
              <div className="section-title-container" data-scroll data-scroll-direction="horizontal"
                data-scroll-speed="1" data-scroll-target="#direction">
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
            </h1>
            {projects.slice(0, 3).map((project, index) => (
              <div key={index}><section className="block_details">
                <div className="block_details_inner">
                  <div className="block_details_text" data-scroll-repeat="false" data-scroll data-scroll-offset="200">
                    <h1 className="block_details_title" >
                      <a href={`/project/`+(index+1)}>{project.name}</a>
                      </h1>
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
                            <figure className="c-brand_logo_wrapper -middle">
                  <a href="/projects" className="c-brand_logo" data-pjax-state="">
                    See All
                  </a>
                </figure>
            <a className="anchor" id="contact" data-scroll></a>
          </div>
          <Footer/>
        </div>
      </section></>  
);
};

export default Home;
