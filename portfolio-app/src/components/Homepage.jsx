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
    
      <div id="homepage" className="mt-10 md:flex-col-reverse items-center sm:flex-col-reverse flex-col-reverse lg:mt-10 sm:px-16 px-14 sm:pt-20 pt-16 sm:pl-16 pl-14 sm:pr-16 pr-14 sm:pb-10 pb-8 flex   lg:justify-left justify-center sm:items-center lg:flex lg:flex-row lg:items-center lg:w-full lg:justify-between lg:px-16 lg:pt-16 lg:pl-16 lg:pr-16 lg:pb-10">
        {/* Adjusted the width to take more space */}
        <motion.div  variants={container} animate="animate"  className=" headline flex sm:flex-col flex-col  first lg:w-3/5 lg:space-y-4  sm:space-y-2 space-y-1 sm:w-full text-black sm:mt-0">
          <motion.h1 variants={vari} initial="initial" animate="anima"  className='lg:font-extrabold lg:text-5xl lg:text-black sm:font-extrabold sm:text-black sm:leading-tight sm:text-3xl sm:items-center sm:text-center text-2xl text-center lg:text-left md:text-4xl'>
            Hi, I Am Muhammad Asim,
          </motion.h1>
          <motion.h1 variants={vari} initial="initial" animate="anima" className='lg:text-orange-500 text-orange-500 lg:font-extrabold lg:text-5xl sm:text-3xl    sm:text-orange-500 sm: font-extrabold  sm:text-center text-2xl text-center pb-1 lg:text-left '>
            Full Stack Web Developer.
          </motion.h1>
       <motion.p variants={vari} initial="initial" animate="anima" className='lg:text-gray-500 ...'>
  A passionate Full Stack Developer skilled in building fast, scalable, and secure web applications. Experienced with the MERN stack, Next.js, GraphQL, and real-time technologies, I create responsive, user-focused solutions. Recently, I’ve also integrated AI models and modern DevOps practices to deliver powerful, production-ready digital products.
</motion.p>

<motion.div variants={vari} initial="initial" animate="anima" className="btns lg:space-x-4 ...">
  <a href={cv} download="Muhammad_Asim_CV.pdf">
    <button className='...'>
      DOWNLOAD CV
    </button>
  </a>
  <Link to="contact" smooth={true} duration={700}>
    <motion.button whileTap={{ scale:1.05, ease:easeInOut }} transition={{ duration:0.01 }} className='...'>
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
