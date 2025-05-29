import React from 'react'
import Header from './Header'
import blurry from "../assets/images/ppf.png"
import AboutMe from './AboutMe'
import { motion ,AnimatePresence, easeInOut} from "framer-motion"
import { useRef } from 'react'
import cv from "../assets/public/resume(4).pdf"
import { Link } from "react-scroll"
const Homepage = () => {
const vari = {
  initial: {
    x: -100,
    opacity: 0,
  },
  anima: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  }
};

  const container = {
    animate: {
      transition: {
        staggerChildren:1.5, // Adds delay between card animations
      },
    },
  };




  const bacha={

    hido:{
      opacity:0,
    },

    whiloo:{
      opacity:1,
    }
  }

 
  
  
  return (
    <>
      <Header />
    
      <div id="homepage" className="mt-10 md:flex-col-reverse items-center sm:flex-col-reverse flex-col-reverse lg:mt-10 sm:px-16 px-14 sm:pt-20 pt-16 sm:pl-16 pl-14 sm:pr-16 pr-14 sm:pb-10 pb-8 flex   lg:justify-left justify-center sm:items-center lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:px-16 lg:pt-16 lg:pl-16 lg:pr-16 lg:pb-10">
        {/* Adjusted the width to take more space */}
        <motion.div  variants={container} animate="animate"  className=" headline flex sm:flex-col flex-col  first lg:w-3/5 lg:space-y-4  sm:space-y-2 space-y-1 sm:w-full text-black sm:mt-0">
          <motion.h1 variants={vari} initial="initial" animate="anima"  className='lg:font-extrabold lg:text-5xl lg:text-black sm:font-extrabold sm:text-black sm:leading-tight sm:text-3xl sm:items-center sm:text-center text-2xl text-center lg:text-left md:text-4xl'>
            Hi, I Am Muhammad Asim,
          </motion.h1>
          <motion.h1 variants={vari} initial="initial" animate="anima" className='lg:text-orange-500 text-orange-500 lg:font-extrabold lg:text-5xl sm:text-3xl    sm:text-orange-500 sm: font-extrabold  sm:text-center text-2xl text-center pb-1 lg:text-left '>
            Full Stack Web Developer.
          </motion.h1>
          <motion.p variants={vari} initial="initial" animate="anima" className='lg:text-gray-500 text-gray-500 lg:font-bold font-bold lg:text-lg sm:text-md  sm:text-center text-[14px] pt-2 text-center lg:text-left sm:text-lg'>
          A passionate MERN Stack Developer skilled in building fast, scalable web applications with clean UI and real-time features. I specialize in creating responsive, user-focused solutions that turn ideas into powerful, modern digital products.         </motion.p>
          <motion.div variants={vari} initial="initial" animate="anima" className="btns lg:space-x-4 sm:space-x-3 space-x-3 sm:pt-3 pt-8 sm:mx-auto mx-auto lg:mx-0 md:mx-auto text-center lg:text-left flex-nowrap" style={{ flexWrap: 'nowrap' }}
          >
          <a href={cv} download="Muhammad_Asim_CV.pdf">
          <button className='lg:text-orange-500 text-orange-500 lg:text-md lg:border lg:border-orange-500 border border-orange-500 lg:px-6 lg:py-3 lg:hover:bg-orange-500 lg:hover:text-white transition hover:text-white lg:rounded-md lg:font-custom font-custom lg:font-extrabold  sm:text-orange-500 sm:text-md sm:border sm:border-orange-500 sm:px-6  px-3 sm:py-3 py-2 sm:rounded-md rounded-md sm:font-custom sm:font-extrabold font-extrabold lg:text-md text-sm flex-shrink-2 min-w-20'>
              DOWNLOAD CV
            </button>
            </a>
            <Link to="contact" smooth={true} duration={700}>
            <motion.button  whileTap={{scale:1.05,ease:easeInOut}} transition={{duration:0.01}}  className='lg:bg-[#3C9189] bg-[#3C9189] lg:text-white text-white lg:text-md lg:px-6 lg:py-3 lg:rounded-md lg:font-custom lg:font-extrabold sm:bg-[#3C9189] sm:text-white sm:text-md sm:px-6 px-3 sm:py-3 py-2 sm:rounded-md rounded-md sm:font-custom font-custom sm:font-extrabold font-bold text-sm min-w-20 sm:space-x-3 space-x-10'>
              CONTACT INFO
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        {/* Adjusted the width to take less space */}
        <motion.img src={blurry} alt="pic" className=' mb-8 w-[98.333333%] second lg:w-1/3 lg:flex lg:justify-center sm:mx-auto sm:w-3/5 sm:flex sm:mb-10
        
        grayscale hover:grayscale-0 hover:scale-105 transition duration-300 
        '/>
     
      </div>
    </>
  )
}

export default Homepage;
