import React from 'react';
import { motion } from 'framer-motion';
import js from '../assets/images/JavaScript-Logo.png';
import html from '../assets/images/html-removebg-preview.png';
import css from '../assets/images/css-logo.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import mysql from '../assets/images/mysql.png';
import mongodb from '../assets/images/mongodb.png';
import python from '../assets/images/python.png';
import docker from '../assets/images/dockers.png';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Section from './Section';

const CATEGORIES = [
  {
    name: 'Frontend',
    skills: [
      { label: 'React.js', icon: react },
      { label: 'Javascript', icon: js },
      { label: 'HTML', icon: html },
      { label: 'CSS', icon: css },
      { label: 'Next.js' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { label: 'Node.js', icon: nodejs },
      { label: 'Python', icon: python },
      { label: 'FastAPI' },
      { label: 'Express.js' },
      { label: 'REST APIs' },
      { label: 'JWT Auth' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { label: 'MongoDB', icon: mongodb },
      { label: 'MySQL', icon: mysql },
      { label: 'PostgreSQL' },
      { label: 'Redis' },
      { label: 'SQL Server' },
    ],
  },
  {
    name: 'AI & Automation',
    skills: [
      { label: 'LangChain' },
      { label: 'LangGraph' },
      { label: 'n8n' },
      { label: 'HuggingFace' },
      { label: 'RAG Pipelines' },
      { label: 'LLM Integration' },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { label: 'Docker', icon: docker },
      { label: 'CI/CD' },
      { label: 'Linux' },
      { label: 'Git & GitHub' },
      { label: 'VPS Deployment' },
    ],
  },
];

const SkillChip = ({ label, icon }) => (
  <div className="flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 shadow-sm">
    {icon && <img src={icon} alt="" loading="lazy" decoding="async" className="h-5 w-5 object-contain" />}
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </div>
);

const Skills = () => {
  return (
    <Section
      id="skills"
      tone="light"
      eyebrow="What I Work With"
      title="Skills"
      subtitle="A practical toolkit built around backend engineering, AI automation, and modern full-stack development."
    >
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {CATEGORIES.map((category) => (
          <motion.div
            key={category.name}
            variants={fadeUp}
            className="rounded-2xl border border-black/5 bg-paper-soft p-6"
          >
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-wide text-accent">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <SkillChip key={skill.label} label={skill.label} icon={skill.icon} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
