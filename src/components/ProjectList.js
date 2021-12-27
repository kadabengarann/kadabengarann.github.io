import {useState} from 'react';

const ProjectList = ({project}) => {  
const lim = 270;
  const isExpandableT = project.desc.length > lim;
  const [viewText] = useState(
    isExpandableT ? project.desc.slice(0, lim)+"..." : project.desc
  );

      return (
          <>
                          <section className="block_details">
                  <div className="block_details_inner">
                    <div
                      className="block_details_text"
                      data-scroll-repeat="false"
                      data-scroll
                      data-scroll-offset="200"
                    >
                      <h1 className="block_details_title">
                        <a href={`/project?id=` + project.id}>{project.name}</a>
                      </h1>
                      <p>{viewText}</p>
                      
                      <div className="block_details_links" data-scroll>
                        <a
                          href={`/project?id=` + project.id}
                          target="_blank"
                          className="o-link"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                    <div
                      className="block_details_photo"
                      data-scroll
                      data-scroll-offset="200"
                    >
                      <div className="base">
                        <div className="hole">
                          <a
                            href={`/project?id=` + project.id}
                            className="o-link"
                          >
                            View details
                          </a>
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundImage: "url(" + project.thumb + ")",
                        }}
                        className="back"
                        data-scroll
                        data-scroll-speed="-0.8"
                      ></div>
                    </div>
                  </div>
                </section>

          </>
          
      );
}
export default ProjectList;
