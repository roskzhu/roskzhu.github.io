import { useEffect } from 'react';
import { about } from '../constants';
import styles, { layout } from '../style';
import { me} from '../assets';
import AOS from "aos";
import "aos/dist/aos.css";
import Fade from 'react-reveal/Fade';

{/* Bubly here! */}
const AboutCard = ({ icon, title, content, index }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
  <div className={`flex flex-col p-6 justify-center rounded-[20px] w-[402px] ${index !== about.length - 1 ? "mb-6" : "mb-0"}`}
  data-aos="fade-up"
  data-aos-delay="100"
  >
    {/* image */}
    <div className={`w-[350px] h-[344px] justify-center rounded-[20px] mb-5 ${styles.flexCenter} bg-black`}>
      <img src={me} alt="me" className="w-[100%] h-[100%] rounded-[20px] object-cover" />
    </div>
  </div>
);
};

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (

  <section id="about" className={layout.section}>
    
    {/* <div className={layout.sectionImgReverse}> */}
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 w-[45%] h-[45%] rounded-full purple__gradient" />
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    {/* </div> */}
          
    <div className={layout.sectionInfo} >
      <Fade left>
      <h2 className={`${styles.heading2} italic
      data-aos="fade-up"
      data-aos-delay="100"`}
      > <span className="text-highlight rounded-xl"
      style={{paddingLeft: '3px', paddingRight: '8px'}}>
        About Me  
      </span>
      </h2>
      </Fade>
      <p className={`${styles.paragraph} ml-8 max-w-[655px] mt-5`}
      data-aos="fade-up"
      data-aos-delay="100"
      >
        Hi! I'm a {" "} 
        <strong>
        computer science 
        </strong> {" "} 
        student at the 
        <strong className="text-neon"> {" "}
          University of Waterloo
        </strong>
        . I have great interest in 
        <strong> {" "}
          full-stack 
        </strong> {" "}
        development, 
        <strong> {" "}
          machine learning
        </strong>
        , and research.
      </p>  
      <p className={`${styles.paragraph} ml-8 max-w-[655px] mt-5`}
      data-aos="fade-up"
      data-aos-delay="100"
      >
        Some technologies I've been working with:
      </p>
      <div className= {`${styles.smallText} flex flex-row justify-start items-start gap-5 sm:gap-8 md:gap-14 lg:gap-24`}
            data-aos="fade-up"
            data-aos-delay="100"
            >
            <ul className="flex flex-col ml-10 mt-3">
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Python
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                C/C++
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Tensorflow
              </li>
            </ul>
            <ul className="flex flex-col mt-3">
            <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Java
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                SQL
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                React.js
              </li>
            </ul>
          </div>

      <p className={`${styles.paragraph} ml-8 max-w-[655px] mt-5`}
      data-aos="fade-up"
      data-aos-delay="100"
      >
        Outside of work, I play pickleball and minecraft. I also like painting and listening to classical music.
      </p>  
      {/* <br className="sm:block hidden" /> {" "}
      <div className="ml-8">
        <a href="mailto:rkzhu@uwaterloo.ca">
          <button>
            <SayHi styles={`mt-10`} />
          </button>
        </a>
      </div> */}
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
};

export default AboutMe