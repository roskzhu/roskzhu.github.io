import React from 'react';

const ProjectCard = ({ content, name, title, img }) => (
  <div className="flex flex-col md:flex-row px-10 py-12 rounded-[20px] max-w-[1136px] w-full max-h-[375px] md:mr-10 sm:mr-5 mr-0 my-5 project-card">
    <div className="flex flex-col">
      {/* project name and description */}
      <h4 className="font-poppins font-semibold italic text-[40px] leading-[64px] text-white">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
      
      {/* languages, libraries, tools used */}
      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>

    {/* image */}
    {/* <div className="rounded-[20px] ${styles.flexCenter} mb-5 md:w-[550px] md:h-[263px] 
                    flex justify-end md:mb-0 md:ml-5">
      <img src={img} alt={img} className="w-full h-full rounded-[20px] " />
    </div> */}
  </div>
);

export default ProjectCard;