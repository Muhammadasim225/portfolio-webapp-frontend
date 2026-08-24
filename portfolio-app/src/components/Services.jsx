import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Section from './Section';

const services = [
  {
    title: 'Full Stack Web Development',
    description:
      'I build scalable and responsive web applications using the MERN stack or Next.js — optimized for speed, performance, and modern UI standards.',
    link: 'https://www.fiverr.com/s/VY0rvLl',
  },
  {
    title: 'UML Diagrams & IEEE SRS Documentation',
    description:
      'I create professional UML diagrams (class, use case, sequence, activity, ERD, DFD) and complete IEEE-standard SRS documents — clear, structured, and client-ready.',
    link: 'https://www.fiverr.com/s/1qw6Kmp',
  },
  {
    title: 'Manual API Testing',
    description:
      'I manually test your APIs with Postman, validating their functionality, reliability, and response handling under different scenarios.',
    link: 'https://www.fiverr.com/s/dDR0q33',
  },
  {
    title: 'UI/UX Design & Wireframing',
    description:
      'I design intuitive, user-centered interfaces and clickable wireframes using Figma — ensuring smooth user flow and clean visuals.',
    link: 'https://www.fiverr.com/s/Ld03Ej0',
  },
];

const Services = () => {
  return (
    <Section
      id="services"
      tone="dark"
      eyebrow="How I Can Help"
      title="Services"
      subtitle="Freelance services tailored to your project's goals — from backend architecture to documentation and design."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="flex flex-col justify-between rounded-2xl bg-ink-soft p-6 shadow-lg"
          >
            <div>
              <h3 className="mb-3 text-lg font-semibold text-paper">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-400">{service.description}</p>
            </div>
            <a href={service.link} target="_blank" rel="noopener noreferrer" className="mt-auto block">
              <button className="group flex w-full items-center justify-between rounded-full border-2 border-white/20 py-2 pl-4 pr-2 transition-all duration-300 hover:border-accent hover:bg-accent">
                <span className="text-xs font-bold uppercase text-paper group-hover:text-ink">Learn More</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 group-hover:bg-ink">
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs text-paper group-hover:text-accent" />
                </span>
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;
