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
 className="w-full lg:pt-16 sm:pt-16 md:pt-16 lg:pb-0 md:pb-0 sm:pb-0 sm:pl-10 sm:pr-10 pt-6 pb-0 
        px-3">



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
                        <p>3+ years</p>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className="tir  w-auto  rounded-3xl flex flex-col ">
                    <h1 className='font-bold text-xl font-custom mb-1 text-orange-500'>Education</h1>
                        <p>BS Software Engineering</p>
                        <p>NUML Islamabad</p>
                        <p>Graduation Jan 2026</p>
                    </div>
                </div>
                <div className="com my-6">
  <p className="font-normal text-gray-800 text-md font-custom">
I’m Muhammad Asim, a Full Stack Web Developer who designs and builds fast, scalable, and user-focused digital experiences. I help startups and businesses turn ideas into functional products using modern web technologies. My focus is always on delivering real impact — from improving user engagement to building systems that grow with the product. I care deeply about clean design, performance, and bringing creativity into problem-solving. Whether it’s developing a full-scale web app or integrating AI-driven features, I aim to make technology simple, effective, and meaningful.</p></div>


            </div>

        </div>
       
      
    </motion.div>
    


    
    
    </>
        
      
  )
}

export default AboutMe
