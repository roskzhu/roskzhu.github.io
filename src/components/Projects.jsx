import { project } from "../constants";
import styles, { layout } from "../style";
import { ispy } from '../assets';
import ProjectCard from "./ProjectCard";

const Projects = () => (
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
      <h2 className={styles.heading2} style={{ paddingBottom: '80px'}}>
        Projects
      </h2>
    </div>

    <div > 
      <p className={`${styles.heading1} text-left mt-5 z-[5]`}
            style={{ paddingLeft: '100px', paddingBottom: '120px'}}>
        iSpy
      </p>
      <p className={`${styles.paragraph} text-left mt-5 z-[5]`}
            style={{ paddingLeft: '80px'}}>
        Facial recognition web application.
      </p>
      <p className={`${styles.smallText} text-left mt-5 z-[5]`}
            style={{ paddingLeft: '80px', paddingBottom: '100px'}}>
        Python / OpenCV / Tensorflow / Javascript
      </p>
      <div style={{ position: 'absolute', left: '694px', top: '250px' }}> 
        <img src={ispy} alt="ispy" className="z-[2] w-[515px] h-[281px] object-contain ml-2"/>        
        <div className="absolute z-[0] w-[384px] h-[81px] rounded-full white__gradient" 
              style={{ position: 'absolute', left: '64px', top: '120px' }}/>
      </div>
    </div>


    <div className="text-right" style={{ textAlign: 'right' }}> 
      <p className={`${styles.heading1} text-right mt-5 z-[5]`}
            style={{ paddingRight: '100px', paddingBottom: '120px'}}>
        Tetris
      </p>
      <p className={`${styles.paragraph} text-right mt-5 z-[5]`}
            style={{ paddingRight: '80px'}}>
        Tetris variation, expanded for 2-player competition.
      </p>
      <p className={`${styles.smallText} text-right mt-5 z-[5]`}
            style={{ paddingRight : '80px', paddingBottom: '100px'}}>
        C++
      </p>
    </div>

    <div> 
      <p className={`${styles.heading1} text-left mt-5 z-[5]`}
            style={{ paddingLeft: '100px', paddingBottom: '120px'}}>
        Fridge Smart
      </p>
      <p className={`${styles.paragraph} text-left mt-5 z-[5]`}
            style={{ paddingLeft: '80px'}}>
        Full-stack recipe making AI.
      </p>
      <p className={`${styles.smallText} text-left mt-5 z-[5]`}
            style={{ paddingLeft: '80px', paddingBottom: '100px'}}>
        Javascript
      </p>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-items-center w-full project-container relative z-[1]">
      {project.map((card) => <ProjectCard key={card.id} {...card} />)}
    </div> */}
  </section>
);


export default Projects;