import React, { useEffect } from 'react'
import ecommerceSite from '../assets/videos/video_website.mp4'
import botSite from '../assets/videos/video_bot.mp4'
import plumaSite from '../assets/videos/pluma_video.mp4'
import chatSite from '../assets/videos/chat_video.mp4'
import ariesian_task2 from '../assets/videos/ariesian task-2.mp4'
import imageGallery from '../assets/videos/ariesian task-1.mp4'
import todovideo from '../assets/videos/todovideo.mp4'
import first_taskVideo from '../assets/videos/first_taskvideo.mp4'
import image from '../assets/images/image.png'
import todopic from '../assets/images/todopic.jpg'
import firsttasktravel from '../assets/images/firsttasktravel.jpg'
import imageGalleryPic from '../assets/images/imageGalleryPic.jpg'
import ecommercePic from '../assets/images/ecommercePic.jpg'
import plumaPic from '../assets/images/plumaPic.jpg'
import chatPic from '../assets/images/chatPic.png'
import quotePic from '../assets/images/quotePic.jpg'



import { useRef } from 'react';
import {motion} from "framer-motion"

const Projects = () => {


  const kk=useRef();
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
  const projectsRef = useRef(null);
  const scrollToSection = (refName) => {

  if (refName === 'projectsRef' && projectsRef.current) {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}

const ecommerceWeb=()=>{
  window.location.href="https://github.com/Muhammadasim225/Ecommerce-App";
}
const imageGalleryApp=()=>{
  window.location.href="https://github.com/Muhammadasim225/Ariesian-Tech/tree/main/Task-1/Image%20Gallery";
}
const calculator=()=>{
  window.location.href="https://github.com/Muhammadasim225/Ariesian-Tech/tree/main";
}
const explorePak=()=>{
  window.location.href="https://github.com/Muhammadasim225/Tasks-1";
}
const todoApp=()=>{
  window.location.href="https://github.com/Muhammadasim225/TodoList_react";
}
const pluma=()=>{
  window.location.href="https://github.com/Muhammadasim225/pluma-social-blog";
}

  const quoteClick=()=>{
      window.location.href="https://github.com/Muhammadasim225/quote-app";

  }
    
  
  return (
    <>
        <motion.div id="projects" ref={projectsRef}  variants={kale} initial="hide" whileInView="view" viewport={{ once: true }} className="w-full lg:px-16 sm:px-16 md:px-0 md:pt-6 md:pb-0 px-10 pt-6 lg:pt-16 sm:pt-14 pb-14">
        <div className="head flex flex-col items-center align-middle lg:space-y-3 sm:space-y-3 md:space-y-3 space-y-1 mb-6 ">
        <h6 className=' text-orange-500 lg:text-lg text-sm sm:text-sm font-semibold'>My recent projects
</h6>
        <h1 className='font-extrabold text-black headline lg:text-6xl sm:text-4xl text-3xl '>Projects</h1> 
        </div>

        <div className="content flex flex-wrap gap-10 justify-center lg:my-20 sm:my-10 w-full">

           <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={botSite} muted></video>
            </div>
            <div className="card-body sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">AI-Powered Chatbot</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
A secure, full-stack chatbot application integrating Hugging Face models with a production-ready setup. Built with Next.js, Express, Supabase, and Prisma ORM to ensure scalability and security.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>AI responses powered by Hugging Face Transformers</li>
                <li>Secure signup/login with JWT & cookies</li>
                <li>Rate limiting & protected routes for abuse prevention</li>
                <li>Chat history & user data stored with Supabase + Prisma</li>
                <li>RESTful APIs with Express.js backend</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>

          
        <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={ecommerceSite} poster={ecommercePic} muted></video>
            </div>
            <div className="card-body sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Ecommerce Platform</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A full-stack eCommerce platform built using the MERN stack. It includes a functional user authentication system, product browsing, shopping cart ,add to cart functionality, add to favorites and checkout.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>User authentication with secure login and registration</li>
                <li>Browse and view detailed product information</li>
                <li>Fully functional shopping cart and checkout process</li>
                <li>Smooth UI animations with Framer Motion</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={ecommerceWeb} className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>


          <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={plumaSite} poster={plumaPic} muted></video>
            </div>
            <div className="card-body sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Pluma – Social Blogging Platform</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
A modern, full-stack social blogging platform built with Next.js, GraphQL, PostgreSQL, and Prisma. Designed for creators and readers, it offers rich content creation, social engagement, and a scalable architecture.A modern, full-stack social blogging platform built with Next.js, GraphQL, PostgreSQL, and Prisma. Designed for creators and readers, it offers rich content creation, social engagement, and a scalable architecture.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Secure authentication with OAuth & Passport</li>
                <li>Create, edit, and publish blog posts with images & tags</li>
                <li>Engage with likes, comments, and follows</li>
                <li>Advanced search by title, tags, or author</li>
                <li>Dockerized setup & CI/CD with GitHub Actions</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={pluma} className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>

           <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={chatSite} poster={chatPic} muted></video>
            </div>
            <div className="card-body sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Real-Time Chat Application</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
A full-stack real-time chat platform built with React, Node.js, Express, MongoDB, and Socket.IO. It supports instant communication, user authentication, and modern chat features for an interactive experience.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Real-time messaging powered by WebSockets (Socket.IO)</li>
                <li>Secure user authentication & session handling</li>
                <li>Emoji support & rich text messaging</li>
                <li>Responsive UI with smooth chat interface</li>
                <li>Instant updates for new messages and online users</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>


             <div className="card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl ">
            <div className="video-container bg-black h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" poster={quotePic} muted></video>
            </div>
            <div className="card-body sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Quote Application</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
A modern full-stack Quote App built with React, Apollo Client, GraphQL, and MongoDB, designed for secure and engaging content sharing.              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>User authentication with JWT (signup/login)</li>
                <li>Create, update, and delete personal quotes</li>
                <li>View personal and other users’ profiles</li>
                <li>Responsive design with Materialize CSS</li>
                <li>Apollo Client cache for efficient state management</li>
              </ul>
              <div className="flex justify-end mt-6">
                <button onClick={quoteClick} className="text-blue-400 flex items-center">
                  View <span className="ml-2">➔</span>
                </button>
              </div>
            </div>
          </div>


          
          <div ref={kk} className=  "card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl grp ">
            <div className="video-container h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"   onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={first_taskVideo} poster={firsttasktravel} muted ></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">ExplorePak Website</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A fully responsive travel website showcasing the beauty of Pakistan. It includes engaging layouts, travel packages, a gallery, and social media integration for easy exploration.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Responsive design using HTML, CSS, and JavaScript.
                </li>
                <li>Gallery with interactive image sliders.

                </li>
                <li>Travel packages section with pricing and ratings.

                </li>
                <li>Social media integration with icons and links.

                </li>
                <li>FAQ section for common queries and travel tips.
                </li>
              </ul>
              <div className="flex justify-end pt-10">
                <button onClick={explorePak} className="text-blue-400 flex items-center">
                  View <span className="ml-2" >➔</span>
                </button>
              </div>
            </div>
          </div>



          <div ref={kk} className=  "card bg-white border border-orange-500 text-black w-full sm:w-11/12 lg:w-[47%] md:w-5/12 rounded-xl grp ">
            <div className="video-container h-60 sm:mb-4 md:mb-4 lg:mb-4 mb-1 rounded-t-xl"  onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
    onMouseLeave={(e) => e.currentTarget.querySelector("video").pause()}>
              {/* Replace with <video> tag */}
              <video className="w-full h-full object-cover rounded-xl text-white" src={todovideo} poster={todopic} muted ></video>
            </div>
            <div className="card-body  sm:lg-6  md:lg-6 lg:pl-6 sm:pr-6 md:pr-6 lg:pr-6 sm:pb-2 md:pb-2 lg-pb-2 sm:pt-2 md:pt-2 lg:pt-2 pl-3 pr-3 pb-2 pt-2">
              <h2 className="sm:text-2xl md:text-2xl lg:text-2xl sm:mb-3 md:mb-3 lg:mb-3 mb-1 font-custom font-bold text-orange-500 text-xl ">Todo App</h2>
              <p className="sm:mb-4 md:mb-4 lg:mb-4 mb-2 font-custom text-black text-md lg:text-md sm:text-md md:text-md">
              A ReactJS-based Todo app designed for easy task management. The app offers users an intuitive interface to add, edit, and track daily tasks with a smooth user experience.
              </p>
              <ul className="list-disc list-inside text-blue-400 text-md">
                <li>Built with ReactJS for a dynamic and fast UI.

                </li>
                <li>Task management: Add, edit, and delete tasks.


                </li>
                <li>Real-time updates with state management.


                </li>
                <li>Minimalist and user-friendly design.


                </li>
                <li>Responsive layout for both desktop and mobile users
                </li>
              </ul>
              <div className="flex justify-end pt-4">
                <button onClick={todoApp} className="text-blue-400 flex items-center">
                  View <span className="ml-2" >➔</span>
                </button>
              </div>
            </div>
          </div>


        </div>
      </motion.div>
    </>
      
  )
}

export default Projects
