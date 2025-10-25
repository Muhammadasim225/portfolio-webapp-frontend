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
    className="lg:pb-5 md:pb-5 xl:pb-5 sm:pb-5 pb-0 2xl:pb-5 flex flex-col space-y-1 lg:space-y-3 md:space-y-2 sm:space-y-2  xl:space-y-3 2xl:space-y-3 text-black w-full lg:w-3/5"
  >
    <motion.h1 
      variants={vari} initial="initial" animate="anima"  
      className='text-left text-2xl sm:text-4xl md:text-5xl  font-extrabold lg:text-5xl lg:text-left'
    >
      Hi, I Am Muhammad Asim,
    </motion.h1>

    <motion.h1 
      variants={vari} initial="initial" animate="anima" 
      className='text-left text-2xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 lg:text-5xl lg:text-left'
    >
      Full Stack Engineer.
    </motion.h1>
<motion.p
  variants={vari}
  initial="initial"
  animate="anima"
  className="pt-3 sm:pt-6 md:pt-8 lg:pt-8 xl:pt-8 
             text-left text-gray-800 leading-relaxed 
             text-sm sm:text-base md:text-sm lg:text-xl xl:text-2xl 2xl:text-[1.4rem]"
>
  I’m a Full-Stack Engineer who builds scalable, user-focused web apps using MERN, Next.js, and PostgreSQL. 
  I specialize in clean UI/UX, AI-powered integrations, and automation with Docker, CI/CD, and n8n — 
  helping teams deliver fast, reliable, and production-ready products.
</motion.p>


    {/* Buttons */}
  {/* Buttons */}
<motion.div
  variants={vari}
  initial="initial"
  animate="anima"
  className="flex flex-col space-y-3 pt-6 
             sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center w-full
             justify-center lg:justify-start"
>
  {/* DOWNLOAD CV Button */}
  <a href={cv} download="Muhammad_Asim_CV.pdf" className="w-full sm:w-auto">
    <button
      className="w-full sm:w-auto border border-orange-500 text-orange-500 
                 px-4 py-2 text-xs font-semibold rounded-md 
                 hover:bg-orange-500 hover:text-white transition 
                 md:px-6 md:py-2.5 md:text-sm 
                 lg:px-7 lg:py-3 lg:text-base 
                 xl:px-8 xl:py-3 xl:text-base 
                 2xl:px-9 2xl:py-3.5 2xl:text-lg"
    >
      DOWNLOAD CV
    </button>
  </a>

  {/* CONTACT INFO Button */}
  <Link to="contact" smooth={true} duration={700} className="w-full sm:w-auto">
    <motion.button
      whileTap={{ scale: 1.05, ease: "easeInOut" }}
      transition={{ duration: 0.01 }}
      className="w-full sm:w-auto bg-[#3C9189] text-white 
                 px-4 py-2 text-xs font-semibold rounded-md 
                 hover:opacity-90 transition 
                 md:px-6 md:py-2.5 md:text-sm 
                 lg:px-7 lg:py-3 lg:text-base 
                 xl:px-8 xl:py-3 xl:text-base 
                 2xl:px-9 2xl:py-3.5 2xl:text-lg"
    >
      CONTACT INFO
    </motion.button>
  </Link>
</motion.div>



  </motion.div>

  {/* Right Image */}
  <motion.img 
    src={blurry} alt="pic" 
    className='w-3/4 mx-auto mb-8 lg:mb-6 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 lg:w-1/3 lg:mb-0
               grayscale hover:grayscale-0 hover:scale-105 transition duration-300'
  />
</div>

    </>
  )
}

export default Homepage;
