import React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProjectCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[10px] w-[280px] h-[360px]
  md:mr-10 sm:mr-5 mr-0 my-5 project-card "
      data-aos="fade-up"
      data-aos-delay="100"
      >
    <div className="flex">
      {/* image */}
      <div className="rounded-[10px] ${styles.flexCenter} mb-5 md:w-[550px] md:h-[163px] 
                      justify-center md:mb-0 md:-ml-5 md:-mt-8 md:-mr-5">
        <img src={img} alt={img} className="w-[100%] h-[100%] rounded-[10px] object-cover" />
      </div>
    </div>
    <div className="grid grid-rows-3">
      {/* project name and description */}
      <h4 className="font-poppins font-semibold text-[22px] leading-[44px] text-white my-1"
      style={{paddingTop: '1px'}}>
        {name}
      </h4>
      <p className="font-poppins font-normal text-[14px] leading-[22px] text-dimWhite"
        style={{paddingBottom: '10px'}}>
        {content}
      </p>
      
      {/* languages, libraries, tools used */}
      <p className={`font-poppins font-normal text-[12px] leading-[22px] text-dimWhite italic justify-items-end`}>
        {title}
      </p>
      </div>
    </div>

);

export default ProjectCard;