import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import heroImage from '../assets/public/ppf.png'
import cv from '../assets/public/Muhammad_Asim_CV.pdf'
import { fadeUp, staggerContainer } from '../lib/motion'

const Homepage = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-28 lg:pt-44"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent2/20 blur-[110px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-16">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-start gap-5 text-left lg:w-3/5"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="eyebrow text-xs uppercase">Available for new opportunities</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="headline text-4xl text-paper sm:text-5xl md:text-6xl">
            Hi, I&apos;m Muhammad Asim.
          </motion.h1>

          <motion.h2 variants={fadeUp} className="headline text-2xl text-accent sm:text-3xl md:text-4xl">
            Full Stack Engineer — Backend &amp; AI Automation
          </motion.h2>

          <motion.p variants={fadeUp} className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
            I design scalable APIs and AI-powered automation — turning complex ideas into fast,
            production-ready systems.
          </motion.p>

          <motion.div variants={fadeUp} className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <Link to="contact" smooth duration={600} offset={-64} className="w-full sm:w-auto">
              <button className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] sm:w-auto">
                Let&apos;s Talk
              </button>
            </Link>
            <a
              href={cv}
              download="Muhammad_Asim_CV.pdf"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-300 transition-colors hover:text-accent"
            >
              <FontAwesomeIcon icon={faDownload} className="text-xs" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-2/3 sm:w-1/2 lg:w-2/5"
        >
          <img
            src={heroImage}
            alt="Muhammad Asim"
            className="block w-full"
            style={{ clipPath: 'circle(45.5% at 49% 51%)' }}
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>

      <Link
        to="aboutme"
        smooth
        duration={600}
        offset={-64}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-gray-500 sm:flex"
      >
        <span className="eyebrow text-[10px] uppercase">Scroll</span>
        <FontAwesomeIcon icon={faArrowDown} className="animate-bounce text-xs" />
      </Link>
    </section>
  )
}

export default Homepage
