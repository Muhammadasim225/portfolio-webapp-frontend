import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const NAV_LINKS = [
  { to: 'aboutme', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'services', label: 'Services' },
  { to: 'contact', label: 'Contact' },
];

const GITHUB_URL = 'https://github.com/Muhammadasim225';
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-asim-764a8a273/';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.to))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b shadow-lg transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        isScrolled
          ? 'border-ink-border bg-ink/80 shadow-black/20 backdrop-blur-md'
          : 'border-transparent bg-transparent shadow-transparent backdrop-blur-0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          to="home"
          smooth
          duration={600}
          className="cursor-pointer font-mono text-lg font-semibold tracking-tight text-paper"
        >
          asim<span className="text-accent">.dev</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={600}
                offset={-64}
                className={`eyebrow cursor-pointer text-xs font-medium uppercase transition-colors ${
                  activeSection === link.to ? 'text-accent' : 'text-gray-400 hover:text-paper'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 transition-colors hover:text-paper">
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 transition-colors hover:text-paper">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
          </a>
          <Link to="contact" smooth duration={600} offset={-64}>
            <button className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-semibold uppercase text-ink transition-transform hover:scale-105">
              Let's Talk <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[10px]" />
            </button>
          </Link>
        </div>

        <button
          className="text-2xl text-paper lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink-border bg-ink lg:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={closeMenu}
                    className={`eyebrow cursor-pointer text-sm font-medium uppercase ${
                      activeSection === link.to ? 'text-accent' : 'text-gray-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-6 pt-2 text-xl text-gray-300">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
