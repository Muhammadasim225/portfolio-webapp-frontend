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
  id="homepage" 
  className="mt-8 flex flex-col-reverse items-start px-6 pt-8 pb-8
             lg:mt-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:pt-16 lg:pb-10"
>
  {/* Left Text Section */}
  <motion.div  
    variants={container} 
    animate="animate"  
    className="pb-5 flex flex-col space-y-3 text-black w-full lg:w-3/5"
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
      Full Stack Web Developer.
    </motion.h1>

    <motion.p 
      variants={vari} initial="initial" animate="anima" 
      className='text-left text-sm leading-relaxed text-gray-800 lg:text-gray-500'
    >
      A passionate Full Stack Developer with expertise in MERN, Next.js, and GraphQL. 
      I build fast, scalable, and secure applications with clean UI and real-time features 
      using WebSockets and WebRTC. Recently, I’ve expanded my skills into AI integrations 
      with Hugging Face and adopted DevOps practices to deliver reliable, production-ready 
      digital products.
    </motion.p>

    {/* Buttons */}
    <motion.div 
      variants={vari} initial="initial" animate="anima" 
      className="flex flex-col space-y-4 mt-6 lg:mt-20 w-full items-start
                 lg:flex-row lg:space-y-0 lg:space-x-4"
    >
      <a href={cv} download="Muhammad_Asim_CV.pdf">
        <button className='border border-orange-500 text-orange-500 px-5 py-2 rounded-md font-bold text-sm hover:bg-orange-500 hover:text-white transition'>
          DOWNLOAD CV
        </button>
      </a>

      <Link to="contact" smooth={true} duration={700}>
        <motion.button 
          whileTap={{ scale:1.05, ease:easeInOut }} 
          transition={{ duration:0.01 }}  
          className='bg-[#3C9189] text-white px-5 py-2 rounded-md font-bold text-sm'
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
