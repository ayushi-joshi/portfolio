import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'




const Contact = () => {
    const resumeUrl = '/src/assets/AyushiJoshiResume.pdf';
    const handleDownload = () => {
   
        window.location.href = resumeUrl;
      };
  return (
    <section id='con' class="container con-c mx-auto my-8 p-8 bg-white shadow-md animate__animated animate__backInLeft">
          <h2 class="text-2xl font-bold mb-4">Contact</h2>
          <div className="lg:flex lg:flex-row  ">
        <div className="w-full  lg:space-x-10 space-y-8 lg:space-y-0 lg:flex lg:flex-row ">
          <li className="flex">
            <FaEnvelope size={25} color="#0e7490" className='me-3' /> ayuhsij103@gmail.com
          </li>
          <li className="flex">
            <FaPhone size={25} color="#0e7490" className='me-3' /> 6267844633
          </li>
          <li className="flex "> <img className='h-8 me-3 '  src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912097/git-icon-md.png" alt="" />
            <a href="https://github.com/ayushi-joshi" target="_blank" rel="noopener noreferrer">
               github.com/ayushi-joshi
            </a>
          </li>
        </div>
        <div className='mt-2'>
        <a href={resumeUrl} download="AyushiJoshiResume.pdf">
      <button onClick={handleDownload} className="bg-blue-500 text-white px-4 py-2 rounded-md w-[100%] ">
        Download Resume
      </button></a>
    </div>
      </div>
            
     
         
      </section>
  )
}

export default Contact
