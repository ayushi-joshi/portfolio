import React from 'react'
import {FaBriefcase} from "react-icons/fa"
const Experience = () => {
    const experiences = [
        {
          title: 'Intern',
          company: 'EdgeNext Webtech solution Pvt. Ltd. ',
          date: '2020',
          description:"I earned a valuable experience during my internship with Edgenext Webtech Solutions Pvt. Ltd. I successfully completed web development projects."
        },
        {
          title: 'Research Analyst',
          company: 'Datamatics Business Solutions',
          date: '2022-2023',
          description:"As a Research Analyst at Datamatics, I played a pivotal role in conducting comprehensive primary and secondary research. Collected and analyzed data from various sources,ensuring the accuracy and reliability of information for use in decision-making processes"
          
        },
        {
            title: 'Intern',
            company: 'Eskill-Web',
            date: '2023-Present',
            description:"Developed responsive user interfaces using various frameworks, including Bootstrap, Tailwind, and Material-UI.Led the development of a dynamic, responsive web application, using the React framework integrated with Redux for state management Strengthened proficiency in frontend technologies and best practices"
        },

      ];
  return (

   
    <div id='exp' class="timeline text-white mx-auto  my-8 p-8 " >
     <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div class="timeline-item flex flex-col">
        

      {
        experiences.map((item, index)=>(
            
            <div key={index} class="timeline-content p-2 border-b-2 mt-4   w-full animate__animated animate__slideInUp"  >
            <div className='flex flex-row items-center  ' >
            <div class="timeline-icon"></div>
            <FaBriefcase color='#fcd34d' size={30}/>
            </div>
            <div className='mt-2' >
            <h2 className='text-lg font-semibold'>{item.title}</h2>
            <p>{item.company}</p>
              <p>{item.date}</p>
              <p>
              {item.description}
              </p>
            </div>
            </div>
        ))
      }
      </div>
    
      
    </div>
 

  )
}

export default Experience
