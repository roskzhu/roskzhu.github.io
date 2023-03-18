import { about } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import SayHi from './SayHi';
import { donut, robot, linkedin, github, email } from '../assets';

{/* Bubly here! */}
const AboutCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col p-6 justify-center rounded-[20px] w-[402px] border-2 ${index !== about.length - 1 ? "mb-6" : "mb-0"} about-card`}>
    {/* image */}
    <div className={`w-[350px] h-[344px] justify-center rounded-[20px] mb-5 ${styles.flexCenter} bg-black border-2 `}>
      <img src={icon} alt="star" className="w-[100%] h-[100%] object-contain" />
    </div>
    {/* text */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-pixeloidBold font-bold text-white text-center text-[35px] leading-[59.5px] mb-1">
        {title}
      </h4>
      <p className="font-pixeloid font-normal text-dimWhite text-center text-[18px] leading-[32.5px]">
        {content}
      </p>
    </div>
  </div>
);



const AboutMe = () => (
  <section id="about" className={layout.section}>
    
    {/* <div className={layout.sectionImgReverse}> */}
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 w-[45%] h-[45%] rounded-full purple__gradient" />
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    {/* </div> */}
          
    <div className={layout.sectionInfo} >
      <h2 className={styles.heading2}>
        About Me
      </h2>
      <p className={`${styles.paragraph} ml-8 max-w-[655px] mt-5`}>
        Hi! I'm a computer science student at the University of Waterloo. I have great interest in full-stack development, machine learning, and cryptography.
      </p>  
      <p className={`${styles.paragraph} ml-8 max-w-[655px] mt-5`}>
        Outside of work, I'm interested in following the developments of science. I also do some art and I listen to a lot of music.
      </p>  
      <p className={`${styles.paragraph} ml-8 max-w-[655px] mt-5`}>
        I’d love to get to know you! Feel free to drop a message and let’s chat. 

      {/*Don't hesitate to reach out to me for my resume. */}
      </p> 
      <br className="sm:block hidden" /> {" "}
      <div className="ml-8">
        <a href="mailto:rkzhu@uwaterloo.ca">
          <button>
            <SayHi styles={`mt-10`} />
          </button>
        </a>
      </div>
    </div>



    {/* linkedin and github */}
    <div className="ss:flex hidden md:mr-4 mr-0">
      {/* <a href="https://www.linkedin.com/in/rosanne-zhu-17bbaa1b5/">
        <button>
          <img src={linkedin} alt="linkedin" className="w-[30px] h-[30px] object-contain ml-2"/>
        </button>
      </a>
      <a href="https://github.com/me50/roskzhu">
        <button>
          <img src={github} alt="github" className="w-[30px] h-[30px] object-contain ml-6"/>
        </button>
      </a> */}
      {/* <a href="mailto:rkzhu@uwaterloo.ca">
        <button>
          <img src={email} alt="email" className="w-[30px] h-[30px] object-contain ml-6"/>
        </button>
      </a> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {about.map((about, index) => (
        <AboutCard key={about.id} {...about} index={index} />
      ))}
    </div>

    <br className="sm:block hidden" /> {" "}
    <br className="sm:block hidden" /> {" "}
    <br className="sm:block hidden" /> {" "}
    <br className="sm:block hidden" /> {" "}
    <br className="sm:block hidden" /> {" "}
  </section>


);

export default AboutMe