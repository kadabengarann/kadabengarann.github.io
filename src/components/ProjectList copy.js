import { useState } from "react";

const ProjectList = ({ project }) => {
  const lim = 200;
  const lim2 = 20;
  const isExpandableT = project.desc.length > lim;
  const [viewText] = useState(
    isExpandableT ? project.desc.slice(0, lim) + "..." : project.desc
  );
  // const nameProj = project.name.replace(/\s/g, "&nbsp;");
  const isLongTitle = project.name.length > lim2;
  const nameProj = 
  isLongTitle ? project.name+'\u00A0 |\u00A0\u00A0' : project.name
  
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
            <div class="marquee">
              <a href={`/project?id=` + project.id} class="marquee-wrap">
                <div className={"marquee-title " + (isLongTitle ? '' : 'no-marq')}>
                  <h1 class="_w-title wt1 block_details_title">
                  {nameProj}
                  </h1>
                  {isLongTitle &&
                 Array.from(Array(3), (e, i) => {
                  return <h1 class="_w-title wt1 block_details_title">
                  {nameProj}</h1>
                })
                  }
                </div>
              </a>
            </div>

            <p>{viewText}</p>

            <div className="block_details_links" data-scroll>
              <a href={`/project?id=` + project.id} className="o-link">
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
                <a href={`/project?id=` + project.id} className="o-link">
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
};
export default ProjectList;
