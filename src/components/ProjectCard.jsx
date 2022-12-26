import React from 'react'


const ProjectCard = ({ content, name, title, img }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 project-card">
      
      {/* project name and description */}
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
      
      {/* languages, libraries, tools used */}
      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  )


export default ProjectCard