import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[10px] max-w-[600px] max-h-[560px]
  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card outline-white"
      data-aos="fade-up"
      data-aos-delay="100"
      >
    <div className="flex">
      {/* image */}
      <div className="rounded-[10px] ${styles.flexCenter} mb-5 md:w-[550px] md:h-[363px] 
                      flex justify-center md:mb-0 md:-ml-5 md:-mt-8 md:-mr-5 outline-white">
        <img src={img} alt={img} className="w-full h-full rounded-[20px] " />
      </div>
    </div>

      {/* project name and description */}
      <h4 className="font-poppins font-semibold italic text-[40px] leading-[64px] text-white my-1"
      style={{paddingTop: '7px', paddingBottom: '7px'}}>
        {name}
      </h4>
      <p className="font-poppins font-normal text-[20px] leading-[32px] text-white"
        style={{paddingBottom: '7px'}}>
        {content}
      </p>
      
      {/* languages, libraries, tools used */}
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-dimWhite italic justify-items-end">
        {title}
      </p>
    </div>

);

export default ProjectCard;