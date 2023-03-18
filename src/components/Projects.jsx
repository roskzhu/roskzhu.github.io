import { project } from "../constants";
import styles, { layout } from "../style";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="projects" className={`${styles.paddingY} ${styles.flexStart} ml-8 flex-col relative`}>
    
    {/* gradient hover */}
    {/* <div className="absolute z-[0] w-[40%] h-[40%] -right-1/2 rounded-full purple__gradient bottom-40" /> */}
    <div className="absolute z-[3] -left-1/2 w-[45%] h-[45%] rounded-full purple__gradient" />

        {/* gradient start */}
        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
        {/* <div className="absolute z-[0] w-[60%] h-[60%] -left-1/2 bottom-0 rounded-full blue__gradient" /> */}
        {/* gradient end */}
    
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Projects
      </h2>
      {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Here are some projects I've worked on.
      </p>   */}
      <br className="sm:block hidden" /> {" "}
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full project-container relative z-[1]">
      {project.map((card) => <ProjectCard key={card.id} {...card} />)}
    </div>
  </section>
);


export default Projects;