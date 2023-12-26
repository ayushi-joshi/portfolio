import React from 'react'
import { useState } from 'react';
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai";
const EducationPanel = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
   
    const togglePanel = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div id='edu' className=" border-b-2 p-4 rounded  mb-4 overflow-hidden hover:bg-blue-500 flex flex-col" data-aos="fade-down-right">
        <div className="flex items-center justify-between" >
          <p className="lg:text-lg text-sm font-semibold">{title}</p>
          <div
            className="text-black cursor-pointer"
            onClick={togglePanel}
            role="button"
            tabIndex={0}
          >
            {isExpanded ? <AiOutlineUp  color='white' size={25} /> : <AiOutlineDown color='white' size={25} />}
          </div>
        </div>
        {isExpanded && <div className="mt-2 pt-2 p-2">{content}</div>}
      </div>
    );
  };
  
  const Education = () => {
    return (
      <div className="  mx-auto my-8 p-8 shadow-md text-white" >
        <h2 className="text-2xl font-bold mb-4">Education Details</h2>
        <EducationPanel
          title="Master of Computer Application"
          content=" I completed my Master of Computer Application (MCA) from Rajiv Gandhi Technical University, where I delved into advanced concepts in computer science and application development.
          Throughout the program, I engaged in hands-on projects, applying theoretical knowledge to real-world scenarios. This practical experience honed my problem-solving and critical-thinking skills.  "
        />
        <EducationPanel
          title="Bachelor of Science in Computer Science "
          content="   I completed my Bachelor of Science in Computer Science (BSc CS) degree from Vikram University, specializing in computer science and technology. Obtaining a Bachelor's in Computer Science from Vikram University has been a pivotal step in my academic journey, providing me with the skills and knowledge needed for the dynamic and ever-evolving field of computer science."
        />
      </div>
  );
}

export default Education
