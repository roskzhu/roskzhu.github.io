import { about } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

{/* club positions here! */}
const AboutCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== about.length - 1 ? "mb-6" : "mb-0"} about-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);



const AboutMe = () => (
  <section id="about" className={layout.section}>
    
    {/* <div className={layout.sectionImgReverse}> */}
      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" /> */}
      {/* <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    {/* </div> */}
          
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Outside of work, I'm interested in following the developments of science. 
      I also listen to a lot of music. 
      </p>  
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Please don't hesitate to reach out to me for my resume.
      </p>  
      <a href="mailto:rkzhu@uwaterloo.ca">
        <button>
          <Button styles={`mt-10`} />
        </button>
      </a>

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {about.map((about, index) => (
        <AboutCard key={about.id} {...about} index={index} />
      ))}
    </div>

  </section>
);

export default AboutMe