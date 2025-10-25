import React from "react";
import { motion } from "framer-motion";
import logAl from "../assets/images/LogoAL.png";
import ariesian from "../assets/images/ariesian.jpg";

const experiences = [
  {
    id: 1,
    title: "MERN Stack Intern (Remote)",
    company: "10Pearls",
    date: "September 2025 - Present",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTe4Lhl5x_oMPMYpfIiIBIywiN98MedMw0A&s",
    description: `Selected as a Shine Intern (Cohort 6) focused on full-stack development under mentorship.
Built a Notes App featuring authentication, CRUD, and a rich-text editor.
Implemented logging (Pino), testing (Mocha/Chai, Jest), and database integration (MongoDB + MySQL).
Maintained code quality with SonarQube and version control via Git/GitHub.`,
    technologies: "React, Node.js, MongoDB, MySQL, Jest, Mocha, Pino, Git, SonarQube",
    learning: "→ Strengthened scalable app development, clean coding, and testing practices under mentor guidance."
  },
  {
    id: 2,
    title: "Web Developer Intern (Remote)",
    company: "Appium Logics Solutions",
    date: "June 2024 - October 2024",
    logo: logAl,
    description: `Contributed to both front-end and back-end web projects using HTML, CSS, JavaScript, Bootstrap, PHP, and Firebase.
Designed responsive user interfaces and integrated database connectivity.
Collaborated in a small remote team to enhance web functionality and optimize UX.`,
    technologies: "HTML, CSS, JavaScript, Bootstrap, PHP, Firebase",
    learning: "→ Strengthened my understanding of full-stack workflows and user-centered web design."
  },
  {
    id: 3,
    title: "Front-End Developer Intern (Remote)",
    company: "Ariesian Tech",
    date: "September 2024 - October 2024",
    logo: ariesian,
    description: `Worked on front-end development tasks in a collaborative environment.
Developed responsive web pages using HTML, CSS, JavaScript, and ReactJS.
Improved UI consistency and accessibility for ongoing projects under mentor guidance.`,
    technologies: "ReactJS, HTML, CSS, JavaScript",
    learning: "→ Enhanced UI/UX design approach and teamwork skills through real project collaboration."
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.9,
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  }),
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-[#0f0f0f] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, type: 'spring', stiffness: 60 },
          },
        }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">
          Work <span className="text-orange-500">Experience</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          A timeline of my hands-on experience in full-stack and front-end web development,
          shaped through real-world mentorship, teamwork, and professional learning.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#1b1b1b] p-6 sm:p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.03]  border border-transparent hover:border-orange-500/30"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 8 }}
              className="flex-shrink-0"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-4 border-[#4d5c8f]"
              />
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-orange-500 text-sm sm:text-base mb-3 font-medium">
                {exp.company} · {exp.date}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
              <p className="text-gray-300 text-sm sm:text-base mt-3">
                <strong>Technologies Used:</strong> {exp.technologies}
              </p>
              <p className="italic text-gray-500 text-xs sm:text-sm mt-2">
                {exp.learning}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
