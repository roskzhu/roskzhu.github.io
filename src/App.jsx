import styles from './style';
import React, {useState, useEffect} from 'react';
import { Navbar, Button, Footer, Projects, Hero } from './components';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Loader from "react-spinners/DotLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#6b7aff"); // loader colour

  useEffect(() => {
    // Simulate some loading process
    setTimeout(() => {
      setLoading(false); // Set loading to false when the loading process is complete
    }, 4000); // Adjust the time as needed
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
  <div className="App noise">
    {loading ? (
      <div className="sweet-loading">
        <Loader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
          </div>
    ) : (
      <>
    <div className="bg-cover bg-herobg w-full overflow-hidden noise">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/* <div className={`${styles.boxWidth}`}> */}
          <Navbar style={{zIndex: 2}}/>
        {/* </div> */}
      </div>
      <div className={`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
</div>
      </div>
    </div>
      <div className={`id="projects" bg-primary ${styles.paddingX} ${styles.flexStart} noise`}>
        <div className={`${styles.boxWidth}`}>
          <Projects />
          {/* <AboutMe /> */}
          {/* <ContactMe /> */}
          <Footer />
        </div>
      </div>
      </>
            )}
            </div>
  // </div>
  
  );
};

export default App;