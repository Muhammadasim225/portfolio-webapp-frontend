import React, { useRef } from 'react'
import Header from './Header'
import removebg from '../assets/images/pfp-maker.jpg'
import secondd from '../assets/images/webinar.png'
import { motion,useMotionValueEvent,useScroll, useTransform  } from 'framer-motion'
const AboutMe = () => {
    const kale = {
      hide: {
        opacity: 0,
        y:100
  
      },
      view:{
        opacity: 1,
        y:0,
        transition: {
          delay: 0,
            duration: 2
           
                // Use a number, not a string
        }
      },
    
    
    };
    const aboutMeRef = useRef(null);


    const scrollToSection = (refName) => {
      if (refName === 'aboutMeRef' && aboutMeRef.current) {
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };



  return (
    <>
    <motion.div id="aboutme" ref={aboutMeRef} // Assign reference
  variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} // Ensures animation runs only once
 className="w-full lg:pt-16 sm:pt-16 md:pt-16 lg:pb-0 md:pb-0 sm:pb-0 sm:pl-10 sm:pr-10 pt-6 pb-0 px-8">



        <div className="space-y-1 head flex flex-col items-center align-middle lg:space-y-3 mb-10 sm:space-y-3">
        <h6 className=' text-orange-500 lg:text-md font-semibold sm:text-sm text-[14px]'>Get To Know more</h6>
        <h1 className='font-extrabold text-black headline lg:text-6xl sm:text-4xl text-3xl'>About Me</h1> 
        </div>
        <div className=" content lg:flex flex flex-col lg:flex-row lg:flex-2 lg:mt-10 sm:flex sm:flex-col sm:w-4/3 sm:items-center lg:min-w-screen ">
            <div className="first lg:w-1/3 sm:w-3/4 w-full lg:ml-8 mb-6 flex sm:items-center justify-center  ">
            <img 
  src={secondd} 
  alt="Developer Illustration" 
  className="w-full max-w-full object-contain rounded-xl mx-auto"
  style={{
    width: '100%',
    maxWidth: '29rem',
  }}
/>          </div>
            <div className=" lg:ml-16 second lg:w-3/5 lg:mr-32 lg:mb-10 px-2 w-full sm:w-5/4 sm:mt-10 sm:mx-10 md:w-4/5">
                <div className="cont flex  lg:justify-between sm:justify-between justify-items-start flex-col sm:space-x-5 lg:space-x-5 md:space-x-5 sm:flex-row md:flex-row lg:flex-row space-y-4 sm:space-y-0 md:space-y-0 lg:space-y-0">
                    <div className=" fir  w-auto rounded-3xl flex flex-col  ">
                        <h1 className='font-bold text-xl font-custom mb-1 text-orange-500'>Experience</h1>
                        <p>2+ years</p>
                        <p>Web Developer</p>
                    </div>
                    <div className="tir  w-auto  rounded-3xl flex flex-col ">
                    <h1 className='font-bold text-xl font-custom mb-1 text-orange-500'>Education</h1>
                        <p>BS Software Engineering</p>
                        <p>Numl Islamabad</p>
                        <p>Graduation Feb 2026</p>
                    </div>
                </div>
                <div className="com my-6">
  <p className="font-normal text-gray-800 text-md font-custom">
    Hi, I'm Muhammad Asim — a passionate Full Stack Web Developer with 2+ years of experience building fast, scalable, and modern web applications using the MERN stack and technologies like Next.js, Tailwind CSS, and Redis.
    As a student at the National University of Modern Languages (NUML), I've built a solid foundation in software engineering and full-stack development.
  </p>

  <p className="font-normal text-gray-800 text-md font-custom">
    Through internships at Appium Logics Solutions and Ariesian Tech, I’ve worked on real-world projects involving front-end and back-end technologies.
    I specialize in crafting responsive UIs, integrating real-time features with WebSockets and WebRTC, and writing clean, maintainable code that scales.
  </p>
</div>


            </div>

        </div>
       
      
    </motion.div>
    


    
    
    </>
        
      
  )
}

export default AboutMe
