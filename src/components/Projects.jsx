import { project } from "../constants";
import styles from "../style";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    
    {/* gradient hover */}
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[40%] h-[40%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[40%] h-[40%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* <div className="absolute z-[0] w-[60%] h-[60%] -left-1/2 bottom-0 rounded-full blue__gradient" /> */}
        {/* gradient end */}

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-16 relative z-[1]">
      <h1 className={styles.heading2}>
        Projects
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Here are some projects I've worked on.
        </p>
      </div>
    </div>
    
    <div className="flex flex-wrap sm:justify-start justify-center w-full project-container relative z-[1]">
      {project.map((card) => <ProjectCard key={card.id} {...card} />)}
    </div>
  </section>
);


export default Projects;