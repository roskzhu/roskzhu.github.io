import { project } from "../constants";
import styles, { layout } from "../style";
import ProjectCard from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Fade from 'react-reveal/Fade';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
  <section id="projects" className={`${styles.paddingY} ${styles.flexStart} flex-col relative`}>
    
      {/* gradients */}
      {/* <div className="absolute z-[0] w-[40%] h-[40%] -right-1/2 rounded-full purple__gradient bottom-40" /> */}
      {/* <div className="absolute z-[3] -left-1/2 w-[45%] h-[45%] rounded-full purple__gradient" /> */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient" /> */}
    
     <div className={layout.sectionInfo}>
          <Fade left delay={150}>
          <h1 className={`${styles.cover} text-white ss:leading-[100px] leading-[74px] w-full text-white text-left mt-5 z-[4]`}>
          <span className="text-gradient text rounded-3xl italic">
            Projects
          </span>
        </h1>
        </Fade>
          </div>

    <div className="flex flex-wrap sm:justify-start justify-items-center w-full 
    project-container relative z-[1]">
      {project.map((card, i) => 
                    <FadeInSection delay={`${i + 1}00ms`}>
      <ProjectCard key={card.id} {...card} />
      </FadeInSection>

      )}
    </div>
  </section>
  );
};


export default Projects;