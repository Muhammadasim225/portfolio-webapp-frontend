import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { fadeUp } from '../lib/motion';

const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const { title, description, tags, link, media } = project;
  const showVideo = isActive && media.video;

  return (
    <motion.article
      variants={fadeUp}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/10"
    >
      <div
        className="video-container"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        tabIndex={0}
      >
        {showVideo ? (
          <video src={media.video} poster={media.poster} autoPlay muted loop playsInline />
        ) : media.poster ? (
          <img src={media.poster} alt={title} loading="lazy" decoding="async" />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${media.gradient}`}>
            <FontAwesomeIcon icon={media.icon} className="text-5xl text-white/90" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-bold text-ink sm:text-xl">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent2/10 px-3 py-1 font-mono text-[11px] font-medium text-accent2"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex w-fit items-center gap-2 text-sm font-semibold text-accent transition-transform hover:translate-x-0.5"
          >
            View Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
