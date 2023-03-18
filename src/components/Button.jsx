import styles from '../style';
import { arrow, email } from '../assets';
import { navLinks } from "../constants";

const Button = () => (
    // <div className={`${styles.flexCenter} w-[50px] h-[50px] rounded-full bg-blue-gradient p-[1px] cursor-pointer`}>
    <div className={`${styles.flexCenter}`}>
        {/* <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}> */}
            <div className={`${styles.flexCenter} flex-row`}>
                <a href="about">
                  <img src={arrow} alt="arrow" className="w-[32px] h-[32px] object-contain"/>
                  {/* <div class="scroll-down"></div> */}
                </a>
            </div>
        {/* </div> */}
    </div>
);


export default Button