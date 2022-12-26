import styles from '../style';
import { arrow, email } from '../assets';

const SayHi = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[50px] rounded-full bg-blue-gradient p-[1px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
                    <span className="text-gradient">Say hi!</span>
                </p>
                <img src={email} alt="email" className="w-[25px] h-[25px] object-contain ml-2"/>
            </div>
        </div>
    </div>
)


export default SayHi