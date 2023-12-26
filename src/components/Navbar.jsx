import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    };
  return (

      <nav class=" text-white p-4">
          <div class="container mx-auto flex justify-between items-center">
              <div class="text-2xl font-bold animate__animated animate__fadeInDownBig"  >Ayushi Joshi</div>
              <div className="  lg:hidden md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose size={25} color="white" />
          ) : (
            <AiOutlineMenu size={25} color="white" />
          )}
        </div>
        {isMenuOpen && (
          <div className="fixed top-12 right-0 h-64 w-40 bg-white p-4 z-10">
            <div className=" cursor-pointer mb-4" onClick={toggleMenu}>
              <AiOutlineClose size={25} color="white" />
            </div>
            <ul className="space-y-2 h-64 flex flex-col cursor-pointer">
              <li onClick={() => scrollToSection('home')} className="hover:text-blue-300 text-gray-800 font-semibold">
                Home</li>
              <li onClick={() => scrollToSection('skill')} className="hover:text-blue-300 text-gray-800 font-semibold">
                Skills
              </li>
              <li  onClick={() => scrollToSection('edu')} className="hover:text-blue-300 text-gray-800 font-semibold">
                Education
              </li>
              <li  onClick={() => scrollToSection('exp')} className="hover:text-blue-300 text-gray-800 font-semibold">
                Experience
              </li>
              <li  onClick={() => scrollToSection('project')} className="hover:text-blue-300 text-gray-800 font-semibold">
               Project
              </li>
              <li  onClick={() => scrollToSection('con')} className="hover:text-blue-300 text-gray-800 font-semibold">
                Contact
              </li>
            </ul>
          </div>
        )}
              <div class={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} space-x-4 sm:block hidden`}>
                  <a href="#" class="hover:text-gray-300" onClick={() => {setMenuOpen(false); scrollToSection('home')}}>Home</a>
                  <a href="#" class="hover:text-gray-300 " onClick={() => {setMenuOpen(false);scrollToSection('skill')}}>Skills</a>
                  <a href="#" class="hover:text-gray-300" onClick={() => {setMenuOpen(false) ;scrollToSection('edu')}}>Education</a>
                  <a href="#" class="hover:text-gray-300" onClick={() => {setMenuOpen(false) ;scrollToSection('exp')}}>Experience</a>
                  <a href="#" class="hover:text-gray-300" onClick={() =>{ setMenuOpen(false);scrollToSection('project')}}>Project</a>
                  <a href="#" class="hover:text-gray-300" onClick={() => {setMenuOpen(false);scrollToSection('con')}}>Contact</a>
              </div>
          </div>
      </nav>
   
  )
}

export default Navbar
