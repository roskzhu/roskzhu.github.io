import styles from '../style';
import { donut } from '../assets';
import SayHi from './SayHi';
import Button from './Button';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-initial ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="absolute z-[0] w-full h-full top-0 left-0">
        {/* background gradients */}
        <div className="absolute z-[0] w-3/6 h-3/6 animate-spin-slow animate-pulse-slow rounded-full white__gradient" style={{ left: '-584px', top: '564px' }}/>
        <div className="absolute z-[0] w-3/6 h-3/6 animate-spin-slow animate-pulse-slow rounded-full blue__gradient" style={{ left: '184px', top: '64px' }}/>
        <div className="absolute z-[0] w-3/6 h-4/6 animate-spin-slow animate-pulse-slow rounded-full pink__gradient" style={{ left: '384px', top: '164px' }}/>
        <div className="absolute z-[0] w-3/6 h-4/6  animate-spin-slow animate-pulse-slow rounded-full purple__gradient" style={{ left: '-20vw' }}/>
        <div className="absolute z-[0] w-3/6 h-4/6 animate-spin-slow animate-pulse-slow rounded-full yellow__gradient" style={{ left: '-106px', top: '343px' }}/> 
      </div>

      <Fade clear delay={500}>
        <h1 className={`${styles.cover} text-white ss:leading-[100px] leading-[74px] w-full text-white text-left mt-5 z-[4]`}
        style={{ paddingTop: '100px'}}>
          Hi, I'm {' '}
          <span className="highlight text rounded-3xl">
          Rosanne
          </span>
          .
        </h1>
      </Fade>

      <Fade clear delay={1500}>
        <p className={`${styles.heading2} text-left mt-5 z-[4] text`}
            style={{ paddingBottom: '30px'}}>            
              I'm a software engineer <br/> developing innovative <br/> solutions for complex <br/> problems.      
        </p>
      </Fade>

      {/* <Fade clear delay={1500}> */}
      <p className={`${styles.bigText} text-left mt-5 z-[4] w-full`}
          style={{ paddingBottom: '200px'}}>
          <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString('Scroll down to see some of my work.')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(10000)
                .callFunction(() => {
                  console.log('All strings were deleted');
                })
                .start();
            }}
          />
          {/* <Typewriter
            options={{
              strings: ['Scroll down to see some of my work.'],
              delay: 200,
              // startDelay: 10000,
              autoStart: true,
              // speed: 10200,
            }}
          /> */}
      </p>
      {/* </Fade> */}

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
      {/* </div> */}

    {/* images on right side of the page */}
    <div className={`flex-initial flex relative md:my-0 my-10 z-[1] w-full xl:w-1/2 xl:absolute right-20`}>
      <div style={{ width: '80%', height: '100%', position: 'relative',  marginLeft: 'auto' }}>
        <img
          src={donut}
          alt="Donut Image"
          class="float-right"
          // style={{ width: '100%', height: '100%', objectFit: 'cover'}}
        />
        </div>
        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>
    </div>


      {/* say hi button for mobile devices */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <SayHi />
      </div>

  </section>
)


export default Hero