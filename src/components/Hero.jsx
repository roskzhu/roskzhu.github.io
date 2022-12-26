import styles from '../style';
import { donut, robot, linkedin, github, email } from '../assets';
import SayHi from './SayHi';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full white__gradient" />


      {/* title */}
      <div classname="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[74px]">
          Hi, 
          {/* the line below adds a new line */}
          <br className="sm:block hidden" /> {" "}
          <span className="text-gradient">
            I'm Rosanne.
          </span>
        </h1>

      {/* about me section */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I'm a computer science student at the University of Waterloo. 
        I have great interest in full-stack development, machine learning, and cryptography.
      </p>
      <br className="sm:block hidden" /> {" "}
      {/* <br className="sm:block hidden" /> {" "} */}

      {/* say hi button */}
      <div className="ss:flex hidden md:mr-4 mr-0">
          <a href="mailto:rkzhu@uwaterloo.ca">
            <button>
              <SayHi />
            </button>
          </a>
        </div>

      <br className="sm:block hidden" /> {" "}
      {/* <br className="sm:block hidden" /> {" "} */}


      {/* linkedin and github */}
      <div className="ss:flex hidden md:mr-4 mr-0">
          <a href="https://www.linkedin.com/in/rosanne-zhu-17bbaa1b5/">
            <button>
              <img src={linkedin} alt="linkedin" className="w-[30px] h-[30px] object-contain ml-2"/>
            </button>
          </a>
          <a href="https://github.com/me50/roskzhu">
            <button>
              <img src={github} alt="github" className="w-[30px] h-[30px] object-contain ml-6"/>
            </button>
          </a>
          {/* <a href="mailto:rkzhu@uwaterloo.ca">
            <button>
              <img src={email} alt="email" className="w-[30px] h-[30px] object-contain ml-6"/>
            </button>
          </a> */}
        </div>
      </div>
      
    </div>

      {/* images on right side of the page */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* say hi button for mobile devices */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <SayHi />
      </div>

  </section>
)


export default Hero