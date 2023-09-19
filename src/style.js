const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    cover: "font-poppins font-semibold ss:text-[50px] text-[60px] text-white ss:leading-[100px] leading-[74px] w-full",
    heading1: "font-poppins font-bold italic text-[40px] leading-[40px] text-white",
    heading2: "font-poppins font-semibold xs:text-[35px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    bigText: "font-poppins font-normal text-white text-[20px] leading-[42.5px] opacity-100",
    smallText: "font-poppins font-normal text-dimWhite text-[14px] leading-[1.8] tracking-wide",
    paragraph: "font-poppins font-normal text-dimWhite text-[16px] leading-[1.8] tracking-wide",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-36 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-6 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col ml-5`,
  };
  
  export default styles;