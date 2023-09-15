import { project } from "../constants";
import styles, { layout } from "../style";
import ProjectCard from "./ProjectCard";
import FadeInSection from "./FadeInSection";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
  <section id="projects" className={`${styles.paddingY} ${styles.flexStart} flex-col relative`}>
    
    {/* gradient hover */}
    {/* <div className="absolute z-[0] w-[40%] h-[40%] -right-1/2 rounded-full purple__gradient bottom-40" /> */}
    {/* <div className="absolute z-[3] -left-1/2 w-[45%] h-[45%] rounded-full purple__gradient" /> */}

        {/* gradient start */}
        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
        {/* <div className="absolute z-[0] w-[60%] h-[60%] -left-1/2 bottom-0 rounded-full blue__gradient" /> */}
        {/* gradient end */}
    
     <div className={layout.sectionInfo}>
          {/* <Fade delay={1000}> */}
          <h1 className={`${styles.cover} text-white ss:leading-[100px] leading-[74px] w-full text-white text-left mt-5 z-[4]`}>
          <span className="text-gradient text rounded-3xl italic">
            Projects
          </span>
        </h1>
        {/* </Fade> */}
          </div>

    <div className="flex flex-wrap sm:justify-start justify-items-center w-full 
    project-container relative z-[1]"
    // data-aos="fade-up"
    >
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