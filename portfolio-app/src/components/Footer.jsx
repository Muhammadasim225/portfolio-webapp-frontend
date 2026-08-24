import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const LINKS = [
  { to: 'aboutme', label: 'About' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-ink-border bg-ink px-6 py-10 text-gray-400 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-sm text-paper">
          asim<span className="text-accent">.dev</span>
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wide">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link to={link.to} smooth duration={600} offset={-64} className="cursor-pointer transition-colors hover:text-accent">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/Muhammadasim225" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-asim-764a8a273/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Muhammad Asim. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
