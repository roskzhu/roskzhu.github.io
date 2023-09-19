import styles from './style';
import React, { useState, useEffect } from 'react';
import { Navbar, Button, Footer, Projects, Hero } from './components';
import AboutMe from './components/AboutMe';
import Loader from "react-spinners/RingLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#6bcbff"); // loader colour

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
    <div className="App bg-primary noise">
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
              <div className={`${styles.boxWidth}`}>
              <Navbar position="fixed" sticky="top" />
              </div>
            </div>
          </div>
          <div id="home" className={`${styles.flexCenter} noise`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>
          <div id="about" className={` bg-primary ${styles.paddingX} ${styles.flexStart} noise`}>
            <div className={`${styles.boxWidth}`}>
              <AboutMe />
            </div>
          </div>
          <div id="projects" className={` bg-primary ${styles.paddingX} ${styles.flexStart} noise`}>
            <div className={`${styles.boxWidth}`}>
              <Projects />
              {/* <ContactMe /> */}
            </div>
          </div>
          <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
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