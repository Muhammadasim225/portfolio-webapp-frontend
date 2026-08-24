import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { fadeUp, viewportOnce } from '../lib/motion';
import Section from './Section';

const SOCIALS = [
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/in/muhammad-asim-764a8a273/', label: 'LinkedIn' },
  { icon: faInstagram, url: 'https://www.instagram.com/muhammadasim4927/', label: 'Instagram' },
  { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=100007728857565', label: 'Facebook' },
];

const HIRE_LINKS = [
  { label: 'Fiverr', url: 'https://www.fiverr.com/s/LdXADda' },
  { label: 'Freelancer', url: 'https://www.freelancer.com/u/muhammadasim555' },
  { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~0178036dae7034b138?mp_source=share' },
];

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Great',
          text: 'Message Sent Successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#f97316',
        }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById('contactForm').reset();
          }
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Failed to send message',
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#f97316',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#f97316',
      });
    }
  };

  return (
    <Section
      id="contact"
      tone="light"
      eyebrow="Get In Touch"
      title="Contact"
      subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative flex w-full flex-col gap-5 overflow-hidden rounded-2xl bg-ink p-8 text-paper shadow-xl shadow-black/10 md:w-1/2"
        >
          <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-[80px]" />

          <h3 className="text-2xl font-bold text-paper">Find Me</h3>
          <a
            href="mailto:muhammadasim4927@gmail.com"
            className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-accent sm:text-base"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-accent" /> muhammadasim4927@gmail.com
          </a>
          <a
            href="tel:+923125818370"
            className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-accent sm:text-base"
          >
            <FontAwesomeIcon icon={faPhone} className="text-accent" /> +92 312 5818370
          </a>

          <div className="pt-4">
            <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wide text-accent">Hire Me On</h4>
            <div className="flex flex-wrap gap-3">
              {HIRE_LINKS.map((hire) => (
                <a
                  key={hire.label}
                  href={hire.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border-2 border-white/20 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                >
                  {hire.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative mt-auto flex items-center gap-4 pt-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-paper transition-colors hover:bg-accent hover:text-ink"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          id="contactForm"
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex w-full flex-col gap-4 md:w-1/2"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <input
              className="w-full rounded-lg border-2 border-black/10 p-4 outline-none transition-colors focus:border-accent"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full rounded-lg border-2 border-black/10 p-4 outline-none transition-colors focus:border-accent"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <textarea
            className="h-40 w-full rounded-lg border-2 border-black/10 p-4 outline-none transition-colors focus:border-accent sm:h-52"
            placeholder="Message"
            name="message"
            required
          />

          <button
            type="submit"
            className="mx-auto flex items-center justify-center gap-3 rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-ink transition-colors hover:bg-accent/90"
          >
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
