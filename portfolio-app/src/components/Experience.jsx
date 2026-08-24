import React, { useState } from "react";
import { motion } from "framer-motion";
import logAl from "../assets/images/LogoAL.png";
import octaoopLogo from "../assets/images/octaoop-logo.jpg";
import { fadeUp, staggerContainer, viewportOnce } from "../lib/motion";
import Section from "./Section";

const experiences = [
  {
    id: 1,
    title: "Junior Full Stack Developer",
    company: "FunPrime Technology",
    date: "January 2026 - Present",
    logo: "https://www.funprimetechnology.com/images/logo.png",
    description: `Own backend-focused feature development for production web applications, designing and shipping scalable REST APIs with Python and FastAPI.
Containerize services with Docker and manage CI/CD pipelines to streamline deployment and reduce release friction.
Build and maintain web scraping and data extraction pipelines, and implement automated testing with Playwright.
Collaborate directly with React.js frontend teams in a Linux production environment to deliver end-to-end features.`,
    technologies: "Python, FastAPI, ReactJS, Docker, Playwright, CI/CD, Linux",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "OCTAOOP Digital Agency",
    date: "January 2025 - December 2025",
    logo: octaoopLogo,
    description: `Built and deployed multiple blogging websites end to end, from backend architecture to production hosting.
Designed AI automation workflows using n8n and LangChain for lead management and business process automation.
Integrated multiple 3rd-party APIs and webhooks to connect internal systems with external services.
Developed backend services using Python, FastAPI, and Node.js, containerized with Docker.`,
    technologies: "Python, FastAPI, Node.js, n8n, LangChain, Docker",
  },
  {
    id: 3,
    title: "MERN Stack Intern (Remote)",
    company: "10Pearls",
    date: "September 2025 - November 2025",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTe4Lhl5x_oMPMYpfIiIBIywiN98MedMw0A&s",
    description: `Delivered a production-level Notes application with full CRUD functionality using the MERN stack.
Implemented structured logging with Pino and unit testing with Mocha/Chai and Jest.
Maintained code quality through Git pull requests and SonarQube checks, following industry best practices.`,
    technologies: "React, Node.js, MongoDB, MySQL, Jest, Mocha, Pino, SonarQube",
  },
  {
    id: 4,
    title: "Web Developer Intern (Remote)",
    company: "Appium Logics Solutions",
    date: "June 2024 - October 2024",
    logo: logAl,
    description: `Contributed to full stack web development using HTML, CSS, JavaScript, Bootstrap, PHP, and Firebase.
Designed responsive interfaces and collaborated with a remote team to optimize user experience.`,
    technologies: "HTML, CSS, JavaScript, Bootstrap, PHP, Firebase",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const CompanyLogo = ({ src, company }) => {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/30 bg-white/5 font-mono text-sm font-semibold text-accent sm:h-20 sm:w-20">
        {initials(company)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={company}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
      className="h-16 w-16 rounded-full border-2 border-accent/30 object-cover sm:h-20 sm:w-20"
    />
  );
};

const Experience = () => {
  return (
    <Section
      id="experience"
      tone="dark"
      eyebrow="Career Path"
      title="Work Experience"
      subtitle="A timeline of hands-on experience across backend engineering, AI automation, and full-stack development."
    >
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="flex flex-col gap-6"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={fadeUp}
            className="flex flex-col items-start gap-6 rounded-2xl border border-transparent bg-ink-soft p-6 shadow-lg transition-colors duration-300 hover:border-accent/30 sm:flex-row sm:items-center sm:p-8"
          >
            <CompanyLogo src={exp.logo} company={exp.company} />

            <div className="flex-1">
              <h3 className="text-xl font-bold text-paper sm:text-2xl">{exp.title}</h3>
              <p className="mb-3 text-sm font-medium text-accent sm:text-base">
                {exp.company} · {exp.date}
              </p>
              <p className="whitespace-pre-line text-sm leading-relaxed text-gray-400 sm:text-base">
                {exp.description}
              </p>
              <p className="mt-3 text-sm text-gray-300">
                <strong className="text-gray-200">Technologies:</strong> {exp.technologies}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
