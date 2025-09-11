import React from 'react';
import js from "../assets/images/JavaScript-Logo.png";
import html from "../assets/images/html-removebg-preview.png";
import css from "../assets/images/css-logo.png";
import java from "../assets/images/java-removebg-preview.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import blender from "../assets/images/blender (2).png";
import mysql from "../assets/images/mysql.png";
import mongodb from "../assets/images/mongodb.png";
import ccc from "../assets/images/ccc.png";
import python from "../assets/images/python.png";
import docker from "../assets/images/dockers.png";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInAnimations = {
    initial: {
      opacity: 0,
      y: 5, // Add some vertical movement to the animation for better visual effect
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Adjust duration as needed
        ease: "easeOut",
      },
    },
  };


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

  const container = {
    animate: {
      transition: {
        staggerChildren: 0.2, // Adds delay between card animations
      },
    },
  };

  return (
    <>
      <motion.div id='skills'   variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} className="w-full lg:pt-16 md:pt-16 pt-10 lg:pb-0 pb-0 px-6 sm:pt-10 sm:pb-0">
        <div className="head flex flex-col items-center align-middle space-y-3">
          <h1 className="font-extrabold text-black headline lg:text-6xl sm:text-4xl text-3xl">Skills</h1>
        </div>

        {/* Grid layout for skills */}
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
className="content grid grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-6 sm:m-20 md:m-14 lg:m-20 m-6 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        >
          {/* JavaScript */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={js} alt="JavaScript" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">JavaScript</p>

          </motion.div>

          {/* HTML */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={html} alt="HTML" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">HTML5</p>

          </motion.div>

          {/* CSS */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={css} alt="CSS" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">CSS3</p>

          </motion.div>

          {/* Java */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={java} alt="Java" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">Java</p>

          </motion.div>

          {/* React */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={react} alt="React" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">Reactjs</p>

          </motion.div>

          {/* Node.js */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={nodejs} alt="Node.js" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">Nodejs</p>

          </motion.div>

          {/* MySQL */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={mysql} alt="MySQL" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">MySQL</p>

          </motion.div>

          {/* MongoDB */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
            <img src={mongodb} alt="MongoDB" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
            <p className="mt-2 text-sm sm:text-base font-semibold text-black">MongoDB</p>

          </motion.div>

          {/* C */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={ccc} alt="C Programming" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">C++</p>

          </motion.div>

          {/* Python */}
          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={python} alt="Python" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">Python</p>

          </motion.div>

          <motion.div
            variants={fadeInAnimations}
  className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"
          >
            <img src={blender} alt="Python" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <p className="mt-2 text-sm sm:text-base font-semibold text-black">Blender</p>

          </motion.div>
           <motion.div
            variants={fadeInAnimations}
               className="card flex flex-col items-center justify-center rounded-xl border border-orange-500 p-4 text-center hover:bg-gray-50 hover:transition-all"

          >
            <img src={docker} alt="Python" className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
               <p className="mt-2 text-sm sm:text-base font-semibold text-black">Docker</p>

          </motion.div>
          
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
