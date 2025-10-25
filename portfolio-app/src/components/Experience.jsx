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
    description: `Building a full-stack Notes App with user authentication, CRUD, and rich-text editor.
Writing unit tests (Mocha/Chai, Jest) and using Pino for logs.
Integrated MongoDB and MySQL, maintained code quality with SonarQube.
Using Git/GitHub under mentor guidance following best practices.`,
  },
  {
    id: 2,
    title: "Web Developer Intern (Remote)",
    company: "Appium Logics Solutions",
    date: "June 2024 - October 2024",
    logo: logAl,
    description: `Built and improved web applications using HTML, CSS, JavaScript, Bootstrap, PHP, and Firebase.
Contributed to both front-end UI and back-end functionality development.`,
  },
  {
    id: 3,
    title: "Front End Developer Intern (Remote)",
    company: "Ariesian Tech",
    date: "September 2024 - October 2024",
    logo: ariesian,
    description: `Worked on front-end development tasks in a dynamic team environment.
Developed responsive web pages using HTML, CSS, JavaScript, and ReactJS.
Improved the user interface of ongoing projects with guidance from mentors.`,
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
            transition: { duration: 1, type: "spring", stiffness: 60 },
          },
        }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold">
          Work <span className="text-orange-500">Experience</span>
        </h2>
        <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          My hands-on experience in web and full-stack development under
          real-world mentorship and teamwork.
        </p>
      </motion.div>

      {/* Experience Cards */}
      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            custom={i}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#1b1b1b] p-6 sm:p-8 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.03] hover:shadow-orange-500/20 border border-transparent hover:border-orange-500/30"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {exp.title}
              </h3>
              <p className="text-orange-500 text-sm sm:text-base mb-3">
                {exp.company} · {exp.date}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
