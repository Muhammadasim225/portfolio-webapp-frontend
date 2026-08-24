import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

const tones = {
  light: 'bg-paper text-ink',
  dark: 'bg-ink text-paper',
}

const Section = ({
  id,
  tone = 'light',
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  innerClassName = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-20 py-20 sm:py-24 px-6 sm:px-10 lg:px-16 ${tones[tone]} ${className}`}
    >
      <div className={`mx-auto w-full max-w-6xl ${innerClassName}`}>
        {(eyebrow || title || subtitle) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className={`mb-14 flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
          >
            {eyebrow && (
              <span className="eyebrow text-xs sm:text-sm font-medium uppercase text-accent">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="headline text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
            )}
            {subtitle && (
              <p className={`max-w-2xl text-sm sm:text-base ${tone === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
