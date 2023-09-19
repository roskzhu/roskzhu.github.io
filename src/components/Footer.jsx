import styles from "../style";
import { donuticon } from "../assets";
import { socialMedia } from "../constants";

const Footer = () =>  (
  <section className={` ${styles.paddingY} ml-8 mr-8 -mt-8 -mb-4 flex-col w-full`}>
    <div>
      <h2 className={`${styles.flexLeft} font-poppins italic font-regular cursor-pointer text-[20px] leading-[34px] text-white my-1`}
          // style={{paddingBottom:"50px"}}
          >
      {/* <h4 className="font-poppins font-semibold italic text-[40px] leading-[64px] text-white my-1" */}
      LET'S BUILD SOMETHING IMPACTFUL.
      </h2>
    </div>

    <div className={`${styles.flexRight} flex items-end justify-between flex-row md:mt-0 mt-6 w-full`}
    >
      <p> 
      <span className="font-poppins font-normal text-left text-[13px] leading-[27px] mt-2 text-dimWhite">
            Resume is available upon request. <br/>
          </span> 
            <span className="font-poppins font-normal text-left text-[13px] leading-[22px] mt-2 text-dimWhite" 
            style={{ textDecoration: "underline" }}>
        <a href="mailto:rosannezhu@gmail.com">Email</a> <br/>
        <a href="https://www.linkedin.com/in/rosanne-zhu" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a> <br/>
        <a href="https://github.com/roskzhu" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        </span> 
      </p>
      <p className="font-poppins font-regular place-self-end	text-right text-[18px] 
                    leading-[20px] mt-5 text-dimWhite "
        >
          <span className="italic">
            Built by {" "}
        <span className="font-poppins font-semibold place-self-end text-gradient italic">Rosanne.</span></span></p>
      </div>
  </section>
)


export default Footer