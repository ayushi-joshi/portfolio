import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Section = () => {
    const skillsData = [
        { name: 'HTML', img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png", level: 'Advanced' },
        { name: 'CSS', img:"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",level: 'Advanced' },
        { name: 'JavaScript',img:"https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png", level: 'Intermediate' },
        { name: 'React', img:"https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png", level: 'Intermediate' },
        { name: 'Redux',img:"https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png", level: 'Intermediate' },
        { name: 'Bootstrap', img:"https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Bootstrap-New-900x0.png", level: 'Intermediate' },
        { name: 'Tailwind', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png", level: 'Intermediate' },
        { name: 'Material Ui', img:"https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png", level: 'Beginner' },
        // Add more skills as needed
      ];
      const getProgressBarStyles = (level) => {
        let percentage = 0;
    
        switch (level.toLowerCase()) {
          case 'beginner':
            percentage = 25;
            break;
          case 'intermediate':
            percentage = 50;
            break;
          case 'advanced':
            percentage = 75;
            break;
          default:
            percentage = 0;
        }
        return {
            width: `${percentage}%`,
            backgroundColor: getProgressBarColor(level),
          }
        }
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024, // Large screens
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768, // Medium screens
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 500, // Small screens
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Set up automatic scrolling every 5 seconds
    const intervalId = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
      const getProgressBarColor = (level) => {
        switch (level.toLowerCase()) {
          case 'beginner':
            return '#FF5733'; // Red
          case 'intermediate':
            return '#FFD700'; // Gold/Yellow
          case 'advanced':
            return '#008000'; // Green
          default:
            return '#ccc'; // Default color
        }
      };
  return (
    <section id="skill" className=" mx-auto my-8 p-8  " >
      <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
     
      <Slider {...settings} ref={sliderRef}>
      {skillsData.map((skill, index) => (
          <div key={index} className="border card-container text-white  p-4 rounded-md ">
         <div className='flex items-center justify-between '> <h3 className="lg:text-lg text-sm font-bold mb-2">{skill.name}</h3>
       <img className='h-10' src={skill.img} alt="" /></div>
          <p>Proficiency: {getProgressBarStyles(skill.level).width}</p>
            
            <div className="progress-bar">
              <div
                className="progress-indicator"
                style={{ width: '70%', backgroundColor: getProgressBarColor(skill.level) }}/>
            </div>
            
          </div>
        
        ))}
   
      </Slider>
      
    </section>
  )
}

export default Section
