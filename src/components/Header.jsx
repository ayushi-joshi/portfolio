import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Header = () => {
  AOS.init({
    duration: 2000,
    once: true,
  });

  return (

      <div id='home' className='bg-gray-900 text-white h-screen flex flex-col justify-center items-center relative'>
      <header class=" img text-white h-screen flex flex-col justify-center items-center">
      <img  src="https://media.licdn.com/dms/image/D4D03AQH-XC3ECqYo6Q/profile-displayphoto-shrink_800_800/0/1700571889068?e=1708560000&v=beta&t=SqHe3Sg6XduL_-wGHWv5RCC9J9hT3uhtCC08eUtltM8" alt="Your Name" class=" animate__animated animate__bounceIn rounded-full w-40 h-40 object-cover absolute top-0 -mt-12"/>
      <div className="overlay"></div>

     <div data-aos="zoom-in-up"  className='flex flex-col justify-center items-center w-full '><h1 data-aos="fade-up" class="text-4xl font-bold mb-4" >Frontend Developer</h1>
        <p data-aos="fade-up" className='lg:text-lg  max-w-screen-lg mx-auto text-sm'> I'm Ayushi, a passionate frontend developer who believes in the magic of collaboration.</p>
       <p className='lg:text-lg  max-w-screen-lg mx-auto  text-sm'>I thrive on turning ideas into interactive realities by working closely with designers, stakeholders, and end-use </p>
       <p className='lg:text-lg  max-w-screen-lg mx-auto  text-sm'>Join me on a journey where teamwork fuels innovation and brings visions to life.</p></div>
    
    </header>

        
      
      </div>
  
   
  )
}

export default Header
