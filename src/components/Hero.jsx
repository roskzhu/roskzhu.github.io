import styles from '../style';
import { herobg, icon, cropicon, transicon, terrain } from '../assets';
import SayHi from './SayHi';
import Button from './Button';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} 
              // style={{ backgroundImage: {herobg}, 
              // backgroundSize: "cover" }}
              >
          {/* <img src={herobg} alt="herobg" className="top-0 left-0 absolute w-full h-screen object-cover z-[0]" /> */}
          <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>


    {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full white__gradient" /> */}

      <div className="object-center">

        {/* <div class="bg-cover bg-center relative z-[5] style=herobg"></div> */}
        {/* icon & purple center gradient */}
        <div className="absolute z-[1] w-[450px] h-[450px] rounded-full purple__gradient" />

        <img src={icon} alt="icon" className="w-[400px] h-[400px] relative z-[4]" />
      </div>

      {/* images on right side of the page */}
      {/* <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}> */}
        {/* <img src={cropicon} alt="cropicon" className="w-[100%] h-[50%] relative z-[5]" /> */}

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      {/* </div> */}

      {/* title */}
      <div classname="flex flex-row justify-between items-center w-full z-[5]">
        <h1 className="flex-1 font-universo font-semibold ss:text-[62px] text-[40px] text-white ss:leading-[100px] leading-[74px] z-[5]">
          Hi, {" "} 
          {/* the line below adds a new line */}
          {/* <br className="sm:block hidden" /> {" "} */}
          <span className="text-gradient" id="gradient-header1">
            I'm Rosanne.
          </span>
        </h1>

      {/* about me section */}
      <p className={`${styles.paragraph} text-center justify-center mt-5`}>
      A CS student @ the University of Waterloo. 
      </p>
      <p className={`${styles.paragraph} text-center justify-center`}>
      Here’s some of my work.
      </p>
      <br className="sm:block hidden" /> {" "}
      <br className="sm:block hidden" /> {" "}

      {/* arrow button */}
      <div className="ss:flex hidden justify-center md:mr-4 mr-0">
          <a href="mailto:rkzhu@uwaterloo.ca">
            <button>
              <Button />
            </button>
          </a>
        </div>

      <br className="sm:block hidden" /> {" "}
      {/* <br className="sm:block hidden" /> {" "} */}


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
      </div>
      
    </div>



      {/* say hi button for mobile devices */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <SayHi />
      </div>

  </section>
)


export default Hero