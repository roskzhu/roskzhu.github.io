import styles from './style';

import { Navbar, Button, Footer, Projects, Hero } from './components';
import { herobg } from './assets';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div className="bg-cover bg-herobg w-full overflow-hidden noise">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar style={{zIndex: 2}}/>
        </div>
      </div>
      <div className={`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          {/* <div class="w-full h-full" style="background-image: url('https://thumbs.gfycat.com/AggravatingThoseArieltoucan-size_restricted.gif')"/> */}
        </div>
      </div>
    </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} noise`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
          {/* <AboutMe /> */}
          {/* <ContactMe /> */}
          <Footer />
        </div>
      </div>
  </div>
  // </div>
  
);

export default App;