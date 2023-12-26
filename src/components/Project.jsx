import React from 'react'
import projectv1 from "../assets/Project1.mp4";
import projectv2 from "../assets/project2.mp4";
import projectv3 from "../assets/Project3.mp4";
import { useState } from 'react';
const Project = () => {
    const projects = [
        {video: projectv1, name: 'Food App', link:"https://food-app-git-main-ayushi-joshi.vercel.app/", description: 'A food application for exploring, adding items to the cart, with increase/decrease functionality, and the ability to remove items from the cart. It includes a total order calculation and a checkout form. Built with Tailwind CSS for UI, React for functionality, Context API for state management, and React Router for navigation.' },
        { video: projectv2 ,name: 'Crypto App',link:"https://crypto-app-git-main-ayushi-joshi.vercel.app/", description:'An app that provides real-time cryptocurrency prices, market trends, live graph. Built with Bootstrap or UI and design, React for overall functionality, React Redux for state management, and React Router for navigation and Chartjs for making graph.' },
        { video: projectv3,name: 'Auth App', link:"https://auth-app-ayushi-joshi.vercel.app/login", description: 'A secure authentication app with multi-factor authentication and password manage-ment.Built with Material UI for UI, React for functionality, Context API for state management, and React Router for navigation.' },
        
      ];
      const [expandedProjects, setExpandedProjects] = useState([]);

    const toggleExpansion = (index) => {
        setExpandedProjects((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };
  return (
    <section id="project" className="mx-auto my-8 p-8 ">
            <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 " >
                {projects.map((project, index) => (
                    <div key={index} className=" border con-p p-2 rounded-md shadow-md animate__animated animate__zoomIn " >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black">
                            {project.video && (
                                <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
                                    <video className="absolute inset-0 w-full h-full object-cover" controls={false} muted autoPlay>
                                        <source src={project.video} type="video/mp4" />
                                    </video>
                                </div>
                            )}
                            <h3 className="text-lg text-white font-bold mb-2 text-center">{project.name}</h3>
                            <p className='text-white'>
                                {expandedProjects[index] ? project.description : project.description.slice(0, 120) + '...'}
                            </p>
                        </a>
                        {project.description.length > 120 && (
                            <button
                                className="mt-2 text-blue-500 hover:underline"
                                onClick={() => toggleExpansion(index)}
                            >
                                {expandedProjects[index] ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </div>
                ))}
            </div>
         
                  
            
        </section>

)
}

export default Project
