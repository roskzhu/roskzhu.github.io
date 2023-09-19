import { project } from "../constants";
import styles, { layout } from "../style";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
  <section id="projects" className={`${styles.paddingY} ${styles.flexStart} flex-col relative`}
  style={{ paddingBottom: '70px' }}>    
     <div className={layout.sectionInfo}>
          <Fade left delay={150}>
          <h1 className={`${styles.heading2} text-white ss:leading-[100px] leading-[74px] w-full text-left mt-5 z-[4]`}>
          <span className="text rounded-3xl italic"
          style={{ marginLeft: '0px', paddingBottom: '30px'}}
          >
            <span className="text-highlight rounded-xl"
      style={{paddingLeft: '3px', paddingRight: '8px'}}>
            Software Projects
      </span>
          </span>
        </h1>
        </Fade>
          </div>

    <div className="flex flex-wrap sm:justify-start justify-items-center w-full 
    project-container relative z-[1] ml-10">
      {project.map((card, i) => 
        // <FadeInSection delay={`${i + 1}00ms`}>
        <div className="mb-2 mr-2" key={i}>
        {/* <ProjectCard key={card.id} {...card} /> */}
          <ProjectCard {...card} />
        </div>
      // </FadeInSection>

      )}
    </div>
  </section>
  );
};


export default Projects;