import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Services = () => {
  const kale = {
    hide: {
      opacity: 0,
      y: 100,
    },
    view: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0,
        duration: 2,
      },
    },
  };

  const services = [
    {
      title: 'Full Stack Web Development',
      description: 'I build scalable and responsive web applications using the MERN stack or Next.js — optimized for speed, performance, and modern UI standards.',
      link: 'https://www.fiverr.com/s/VY0rvLl',
    },
    {
      title: '3D Modelling',
      description: 'I create clean, detailed 3D models with realistic textures — perfect for product showcases, AR/VR, or concept visualizations.',
      link: 'https://www.fiverr.com/s/P204aYx',
    },
    {
      title: 'Manual API Testing',
      description: 'I manually test your APIs with Postman, validating their functionality, reliability, and response handling under different scenarios.',
      link: 'https://www.fiverr.com/s/dDR0q33',
    },
    {
      title: 'UI/UX Design & Wireframing',
      description: 'I design intuitive, user-centered interfaces and clickable wireframes using Figma — ensuring smooth user flow and clean visuals.',
      link: 'https://www.fiverr.com/s/Ld03Ej0',
    },
  ];

  return (
    <motion.div
      id="services"
      variants={kale}
      initial="hide"
      whileInView="view"
      viewport={{ once: true }}
      className="w-full lg:pt-16 pt-12 sm:pt-14 sm:px-12 lg:pb-10 bg-[#0f0f0f] lg:px-6"
    >
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h1 className="mx-8 headline font-extrabold text-white lg:text-6xl sm:text-4xl text-3xl">
          My Awesome <span className="text-orange-500">Services For You</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto px-6">
          I offer expert services in full stack development, 3D modeling, UI/UX design, and API testing — all tailored to meet your project’s goals with precision and quality.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 py-10 px-10 font-custom">
        {services.map((service, index) => (
          <div key={index} className="bg-[#1b1b1b] text-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <a href={service.link} target="_blank" rel="noopener noreferrer" className="w-full block">
              <button className="flex items-center justify-between w-full pl-4 pr-2 py-1 border-2 border-white rounded-full hover:bg-white hover:text-black group">
                <span className="text-sm font-bold">READ MORE</span>
                <div className="flex items-center justify-center w-8 h-8 ml-2 bg-white rounded-full group-hover:bg-orange-500">
                  <FontAwesomeIcon icon={faArrowRight} className="text-black" />
                </div>
              </button>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
