import { useState, useEffect, useRef } from "react";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const ProjectList = ({ project }) => {
    const htmlFrom  = (htmlString, isTrim) => {
      let cleanHtmlString;
          if (isTrim) {
            cleanHtmlString = DOMPurify.sanitize(htmlString.slice(0, lim)+ "..." ,
            { USE_PROFILES: { html: true } });
  
          }else{
            cleanHtmlString = DOMPurify.sanitize(htmlString,
            { USE_PROFILES: { html: true } });

          }
          const html = parse(cleanHtmlString);
          return html;
  }

  const lim = 200;
  const lim2 = 20;
  const isExpandableT = project.desc.length > lim;
  const [viewText] = useState(
    project.desc && htmlFrom(project.desc, isExpandableT)
  );
  // const nameProj = project.name.replace(/\s/g, "&nbsp;");
  const isLongTitle = project.name.length > lim2;
  const nameProj = 
  isLongTitle ? project.name+'\u00A0 |\u00A0\u00A0' : project.name
  
  const ref = useRef(null);
  const marqcont = useRef(null);
  const speed = 40;
  let duration;
  useEffect(() => {
    console.log("width", ref.current.offsetWidth);
    duration = (ref.current.offsetWidth * 2) / speed;
    console.log(duration);
    marqcont.current.style.animationDuration = `${duration}s`;
 
  }, []);
  return (
    <>
      <section className="block_details">
        <div className="block_details_inner"  data-scroll-repeat="false"
            data-scroll
            data-scroll-offset="200">
          <div
            className="block_details_text"
            data-scroll-repeat="false"
            data-scroll
            data-scroll-offset="200"
          >
            <div className="marquee">
              <a href={`/project?id=` + project.id} className="marquee-wrap a-move">
                <div ref={marqcont} className={"marquee-title " + (isLongTitle ? '' : 'no-marq')}>
                  <h1 ref={ref} className="_w-title wt1 block_details_title">
                  {nameProj}
                  </h1>
                  {isLongTitle &&
                 Array.from(Array(3), (e, i) => {
                  return <h1 key={i}  className="_w-title wt1 block_details_title">
                  {nameProj}</h1>
                })
                  }
                </div>
              </a>
            </div>

            <p>{viewText}</p>

            <div className="block_details_links" data-scroll>
              <a href={`/project?id=` + project.id} className="o-link a-move">
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
                <a href={`/project?id=` + project.id} className="o-link a-move">
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
              data-scroll-speed="0"
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectList;
