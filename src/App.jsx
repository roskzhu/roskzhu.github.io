import styles from './style';

import { Navbar, Button, Footer, Projects, Hero } from './components';
import { herobg } from './assets';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className="bg-cover bg-herobg w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* <div className="bg-[url('./assets/terrain2.gif')] w-full bg-cover bg-center"> */}
      {/* <div className="bg-[url('https://as1.ftcdn.net/v2/jpg/01/68/75/60/1000_F_168756060_ipLDpsVxX2DZpsYH9uOA0gngXRiQn6DM.jpg')] w-full bg-cover bg-center"> */}
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          {/* <div class="w-full h-full" style="background-image: url('https://thumbs.gfycat.com/AggravatingThoseArieltoucan-size_restricted.gif')"/> */}
        </div>
      </div>
    </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            {/* background */}
            {/* <div className="top-0 left-0 absolute z-[0]"> */}
            {/* <img src={herobg} alt="herobg" className="top-0 left-0 absolute w-full h-screen object-cover z-[0]" /> */}
          {/* </div> */}
        <div className={`${styles.boxWidth}`}>
          <Projects />
          <AboutMe />
          <ContactMe />
          <Footer />
        </div>
      </div>
  </div>
  
);

export default App;