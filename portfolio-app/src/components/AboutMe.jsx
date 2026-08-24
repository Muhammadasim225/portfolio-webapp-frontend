import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/images/webinar22.png';
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion';
import Section from './Section';

const FACTS = [
  { title: 'Experience', lines: ['2+ years', 'Full Stack Development'] },
  { title: 'Focus', lines: ['Backend & AI Automation', 'Python · FastAPI · Node.js'] },
  { title: 'Education', lines: ['BS Software Engineering', 'NUML Islamabad · Jan 2026'] },
];

const AboutMe = () => {
  return (
    <Section id="aboutme" tone="light" eyebrow="Get To Know Me" title="About Me">
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="w-full max-w-sm shrink-0 lg:w-2/5"
        >
          <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xl shadow-black/5">
            <img
              src={aboutImage}
              alt="Developer illustration"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex w-full flex-col gap-8"
        >
          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div key={fact.title} className="rounded-xl border border-black/5 bg-white p-4 shadow-sm">
                <p className="font-mono text-xs font-semibold uppercase tracking-wide text-accent">
                  {fact.title}
                </p>
                {fact.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
            <p>
              I&apos;m Muhammad Asim, a Full Stack Software Engineer with a strong backend focus and a
              passion for building scalable, production-ready applications. I work across the MERN
              stack and Python/FastAPI backends, and I&apos;m comfortable owning a feature end to end —
              from API design and authentication (JWT &amp; Redis) to Docker-based deployment.
            </p>
            <p>
              Lately I&apos;ve been focused on AI-powered automation — integrating LLMs (OpenAI, Gemini,
              Groq) and building agentic workflows with LangChain, LangGraph, and n8n to turn manual,
              repetitive processes into reliable, automated systems.
            </p>
            <p>
              I care about performance, scalability, and long-term maintainability. Good software
              isn&apos;t just functional — it&apos;s reliable, well-tested, and built to grow.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutMe;
