import React from 'react'


const ProjectCard = ({ content, name, title, img }) => (
    <div className="justify-between flex-col px-10 py-12 rounded-[20px] max-w-[558px] md:mr-10 sm:mr-5 mr-0 my-5 project-card">
      {/* image */}
      {/* <div className={`w-[350px] h-[344px] justify-center rounded-[20px] mb-5 ${styles.flexCenter} bg-black border-2 `}>
        <img src={img} alt="star" className="w-[100%] h-[100%] object-contain" />
      </div> */}
      <div className= "rounded-[20px] ${styles.flexCenter} mb-5">
        <img src={img} alt={img} className="w-[502px] h-[352px] rounded-[20px]" />
      </div>
      
      {/* project name and description */}
      <h4 className="font-poppins font-semibold text-[40px] leading-[64px] text-white">
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
  )


export default ProjectCard