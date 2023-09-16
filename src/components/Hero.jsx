import styles from '../style';
import { donut } from '../assets';
import SayHi from './SayHi';
import Button from './Button';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';


const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="absolute z-[0] w-full h-[100%] top-15 left-0">
        <Fade clear delay={500}>
        <div className="absolute z-[0] w-3/6 h-3/6 animate-spin-slow animate-pulse-slow rounded-full white__gradient" style={{ left: '-584px', top: '564px' }}/>
        <div className="absolute z-[0] w-3/6 h-3/6 animate-spin-slow animate-pulse-slow rounded-full blue__gradient" style={{ left: '184px', top: '64px' }}/>
        <div className="absolute z-[0] w-3/6 h-4/6 animate-spin-slow animate-pulse-slow rounded-full pink__gradient" style={{ left: '384px', top: '164px' }}/>
        <div className="absolute z-[0] w-3/6 h-4/6  animate-spin-slow animate-pulse-slow rounded-full purple__gradient" style={{ left: '-20vw' }}/>
        <div className="absolute z-[0] w-3/6 h-4/6 animate-spin-slow animate-pulse-slow rounded-full yellow__gradient" style={{ left: '-106px', top: '343px' }}/> 
        </Fade>
      </div>

      <Fade clear delay={500}>
        <h1 className={`${styles.cover} text-white italic ss:leading-[80px] 
        leading-[64px] w-full text-white text-left z-[4] left-50 ml-20`}
        style={{ marginLeft: '200px'
        , paddingTop: '120px'
      }}
        >
          <span className="text-gradient">Hi, I'm {' '}Rosanne. </span>
        </h1>
      </Fade>

      <Fade clear delay={1500}>
        <p className={`${styles.heading2} text-left mt-5 z-[4] text left-20`}
            style={{ marginLeft: '200px'
            // , paddingBottom: '30px'
          }}
          >            
              I'm a {' '}
              <span className="stroke">
              software engineer  {' '}
              </span>
               developing <br/>innovative solutions for  complex problems.      
        </p>
      </Fade>

      <p className={`${styles.bigText} text-left mt-5 z-[4] w-full`}
          style={{ marginLeft: '200px', paddingBottom: '200px'}}
          >
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
      </p>

  </div>

      {/* say hi button for mobile devices */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <SayHi />
      </div>

  </section>
)


export default Hero