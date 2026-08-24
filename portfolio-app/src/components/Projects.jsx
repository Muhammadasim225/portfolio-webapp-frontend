import React from 'react';
import { motion } from 'framer-motion';
import { faMapLocationDot, faRobot } from '@fortawesome/free-solid-svg-icons';

import botSite from '../assets/videos/video_bot.mp4';
import chatSite from '../assets/videos/chat_video.mp4';
import chatPic from '../assets/images/chatPic.png';
import fypPic from '../assets/images/fypPic.jpg';
import realStatePic from '../assets/images/realStatePic.jpg';
import videoDownloaderPic from '../assets/images/video-downloader-project.png';

import { staggerContainer, viewportOnce } from '../lib/motion';
import Section from './Section';
import ProjectCard from './ProjectCard';

const PROJECTS = [
  {
    id: 'real-estate',
    title: 'AI Real Estate Lead Manager',
    description:
      'An AI-powered system that automatically captures, qualifies, and follows up with property leads — replacing manual calling and spreadsheets with an assistant that talks to buyers 24/7 and routes only high-quality leads to agents.',
    tags: ['FastAPI', 'React.js', 'Node.js', 'AI Automation'],
    link: 'https://github.com/Muhammadasim225/RealEstate-AI-Lead-Manager',
    media: { poster: realStatePic },
  },
  {
    id: 'smart-location',
    title: 'AI Smart Location & Lifestyle Advisor',
    description:
      'A location recommendation agent built with FastAPI and LangChain/LangGraph — combining OpenWeather, Geoapify, and OpenStreetMap data through a multi-step workflow (intent detection → lookup → recommendation) with PostgreSQL-based checkpointing.',
    tags: ['Python', 'LangGraph', 'LangChain', 'PostgreSQL'],
    media: { icon: faMapLocationDot, gradient: 'from-accent2 to-ink' },
  },
  {
    id: 'video-downloader',
    title: 'Video Downloader & Media Aggregation Platform',
    description:
      'A backend service to download and stream media from 15+ social platforms, with Playwright-based scraping pipelines for reels and videos, containerized with Docker and deployed to a production VPS.',
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Playwright'],
    media: { poster: videoDownloaderPic },
  },
  {
    id: 'chatbot',
    title: 'AI-Powered Chatbot',
    description:
      'A secure full-stack chatbot integrating Hugging Face models, with JWT-authenticated sessions, rate limiting, and chat history — built on Next.js, Express, Supabase, and Prisma ORM.',
    tags: ['Next.js', 'Express', 'Hugging Face', 'Supabase'],
    link: 'https://github.com/Muhammadasim225/AI-Powered-Chatbot',
    media: { video: botSite, icon: faRobot, gradient: 'from-slate-600 to-ink' },
  },
  {
    id: 'fitvision',
    title: 'FitVision — Smart Mirror (FYP)',
    description:
      'A Final Year Project delivering an AI-powered virtual try-on experience — computer vision and AR overlays on a smart mirror, with a Flutter companion app and a FastAPI + Firebase backend.',
    tags: ['Computer Vision', 'FastAPI', 'Flutter', 'Firebase'],
    link: 'https://github.com/fitvision032-bit/fitvision',
    media: { poster: fypPic },
  },
  {
    id: 'realtime-chat',
    title: 'Real-Time Chat Application',
    description:
      'A full-stack real-time messaging platform with instant delivery over WebSockets, secure authentication, and a responsive chat UI built with the MERN stack and Socket.IO.',
    tags: ['MERN', 'Socket.IO', 'WebSockets'],
    link: 'https://github.com/Muhammadasim225/Real-TIme-Chat-App',
    media: { poster: chatPic, video: chatSite },
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      tone="light"
      eyebrow="Selected Work"
      title="Projects"
      subtitle="A curated set of projects spanning AI automation, backend systems, and full-stack products — each one shipped end to end."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
