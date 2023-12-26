import React from 'react'
import { FaEnvelope, FaPhone, FaGithub  } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dnfvnp', 'template_0ms2iv9', e.target, '4LBZe8hPHsozx8Kj1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };
    const resumeUrl = '/src/assets/AyushiJoshiResume.pdf';
    const handleDownload = () => {
   
        window.location.href = resumeUrl;
      };
  return (
    <section id='con' class=" con-c mx-auto  my-8 p-8 text-white">
          <h1  class="text-2xl font-bold mb-4">Contact</h1>
          <div className='flex lg:flex-row flex-col '>
          <div className="lg:flex lg:flex-col lg:w-[30%] mt-2 p-4 ">
        <div className="w- full lg:space-y-6 space-y-8  lg:flex lg:flex-col ">
          <li className="flex">
            <FaEnvelope size={25} color="#0e7490" className='me-3' /> ayuhsij103@gmail.com
          </li>
          <li className="flex">
            <FaPhone size={25} color="#0e7490" className='me-3' /> 6267844633
          </li>
          <li className="flex "> <FaGithub color="#0e7490"  size={25} className='me-3' />
            <a href="https://github.com/ayushi-joshi" target="_blank" rel="noopener noreferrer">
               github.com/ayushi-joshi
            </a>
          </li>
        </div>
        <div className='mt-2 lg:mt-2'>
        <a href={resumeUrl} download="AyushiJoshiResume.pdf">
      <button onClick={handleDownload} className="bg-teal-700 text-white px-4  mt-2 py-2 rounded-md w-[50%] ">
        Download Resume
      </button></a>
    </div>
   
      </div>
      <div  className=' flex w-[70%] h-full justify-center' >
      <form className='flex flex-col lg:w-[80%] w-full' onSubmit={sendEmail}   >
      <label>
        Name </label>
        <input type="text" required name="name" className=' mt-2 h-10 bg-transparent border' />
     
      <label className='mt-2'>
        Email  </label>
        <input type="email" required name="email" className=' mt-2 h-10 bg-transparent border' />
    
      <label className='mt-2'>
        Message</label>
        <textarea name="message" required  className=' mt-2 h-32 bg-transparent border'/>
      
      <button type="submit" className=' mt-4 h-10 font-bold rounded-md bg-cyan-700 w-1/2'>Submit</button>
    </form>
</div>
          </div>
            
     
         
      </section>
  )
}

export default Contact
