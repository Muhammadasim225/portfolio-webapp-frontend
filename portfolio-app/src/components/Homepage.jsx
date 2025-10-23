import React from 'react'
import Header from './Header'
import blurry from "../assets/images/ppf.png"
import AboutMe from './AboutMe'
import { motion ,AnimatePresence, easeInOut} from "framer-motion"
import { useRef } from 'react'
import cv from "../assets/public/cvv.pdf"
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
    
     <div 
  className="mt-8 flex flex-col-reverse items-start px-6 pt-8 pb-8
             lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:pt-16 lg:pb-10"
>
  {/* Left Text Section */}
  <motion.div  
    variants={container} 
    animate="animate"  
    className="lg:pb-5 md:pb-5 xl:pb-5 sm:pb-5 pb-3 2xl:pb-5 flex flex-col space-y-3 text-black w-full lg:w-3/5"
  >
    <motion.h1 
      variants={vari} initial="initial" animate="anima"  
      className='text-left text-2xl font-extrabold lg:text-5xl lg:text-left'
    >
      Hi, I Am Muhammad Asim,
    </motion.h1>

    <motion.h1 
      variants={vari} initial="initial" animate="anima" 
      className='text-left text-2xl font-extrabold text-orange-500 lg:text-5xl lg:text-left'
    >
      Full Stack Engineer.
    </motion.h1>

    <motion.p 
      variants={vari} initial="initial" animate="anima" 
      className=' lg:pt-8 md:pt-8 sm:pt-8 xl:pt-8 pt-6 text-left leading-relaxed text-md text-gray-800 lg:text-gray-800'
    >
      I’m a Full-Stack Engineer who builds scalable, user-focused web apps using MERN, Next.js, and PostgreSQL. I specialize in clean UI/UX, AI-powered integrations, and automation with Docker, CI/CD, and n8n — helping teams deliver fast, reliable, and production-ready products.
    </motion.p>

    {/* Buttons */}
  {/* Buttons */}
<motion.div 
  variants={vari} initial="initial" animate="anima" 
  className="flex flex-col space-y-4 lg:pt-8 md:pt-8 sm:pt-8 xl:pt-8 pt-6 w-full items-stretch
             sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center sm:flex-nowrap"
>
  <a href={cv} download="Muhammad_Asim_CV.pdf" className="w-full sm:w-auto">
    <button className='w-full sm:w-auto min-w-[120px] border border-orange-500 text-orange-500 px-5 py-2 rounded-md font-bold text-sm hover:bg-orange-500 hover:text-white transition'>
      DOWNLOAD CV
    </button>
  </a>

  <Link to="contact" smooth={true} duration={700} className="w-full sm:w-auto">
    <motion.button 
      whileTap={{ scale:1.05, ease:easeInOut }} 
      transition={{ duration:0.01 }}  
      className='w-full sm:w-auto min-w-[120px] bg-[#3C9189] text-white px-5 py-2 rounded-md font-bold text-sm'
    >
      CONTACT INFO
    </motion.button>
  </Link>
</motion.div>

  </motion.div>

  {/* Right Image */}
  <motion.img 
    src={blurry} alt="pic" 
    className='w-3/4 mx-auto mb-6 lg:w-1/3 lg:mb-0
               grayscale hover:grayscale-0 hover:scale-105 transition duration-300'
  />
</div>

    </>
  )
}

export default Homepage;
