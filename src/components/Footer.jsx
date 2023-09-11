import styles from "../style";
import { donuticon } from "../assets";
import { socialMedia } from "../constants";

const Footer = () =>  (
  <section className={`${styles.flexCenter} ${styles.paddingY} ml-8 mr-8  flex-col`}>
    <div>
      <h2 className={styles.heading2} style={{ paddingBottom: '180px'}}>
      Let’s Build Something Impactful.
      </h2>
    </div>

    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"> */}
      {/* <div className="flex-col">
        <p className="font-poppins font-normal text-left text-[24px] leading-[27px] mt-5 text-white">
          Rosanne Zhu
        </p>
        <p className="font-poppins font-normal text-left text-[18px] leading-[27px] mt-2 text-dimWhite">
          <a href="rosannezhu@gmail.com">rosannezhu@gmail.com</a>          
        </p>
      </div> */}
    {/* </div> */}
    <div className="flex items-end flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[30px] h-[30px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
  </section>
)


export default Footer