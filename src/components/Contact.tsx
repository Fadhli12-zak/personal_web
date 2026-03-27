"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "./Section";

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.06 5.06 0 0 0-.1-3.82s-1.2-.38-3.9 1.4a13.4 13.4 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.06 5.06 0 0 0-.1 3.82A5.5 5.5 0 0 0 2 8.5c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsApp = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export function Contact() {
  return (
    <motion.div className="text-center md:text-left print:break-inside-avoid">
      <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-6 text-foreground tracking-tight">
        Contact
      </motion.h2>
      <motion.p variants={fadeInUp} className="text-muted text-lg mb-8 max-w-2xl">
        I'm constantly looking to improve my skills and take on new challenges.
        If you have any opportunities or want to build something amazing together,
        feel free to reach out.
      </motion.p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 print:flex-col print:gap-2">
          <motion.a
            variants={fadeInUp}
            href="mailto:fadhlimudzak@gmail.com"
            className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-card hover:bg-foreground hover:text-background text-foreground font-medium rounded-lg transition-colors border border-transparent hover:border-foreground dark:border-neutral-800"
          >
            <Mail size={20} />
            <span>fadhlimudzak@gmail.com</span>
          </motion.a>
          <motion.a
            variants={fadeInUp}
            href="https://www.linkedin.com/in/fadhli-muhammad-dzaki/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-card hover:bg-foreground hover:text-background text-foreground font-medium rounded-lg transition-colors border border-transparent hover:border-foreground dark:border-neutral-800"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            variants={fadeInUp}
            href="https://github.com/Fadhli12-zak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-card hover:bg-foreground hover:text-background text-foreground font-medium rounded-lg transition-colors border border-transparent hover:border-foreground dark:border-neutral-800"
          >
            <Github size={20} />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            variants={fadeInUp}
            href="https://www.instagram.com/fdhlmdzq_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-card hover:bg-foreground hover:text-background text-foreground font-medium rounded-lg transition-colors border border-transparent hover:border-foreground dark:border-neutral-800"
          >
            <Instagram size={20} />
            <span>Instagram</span>
          </motion.a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 print:flex-col print:gap-2">
          <motion.a
            variants={fadeInUp}
            href="https://wa.me/qr/7O7VLFX4PRVZH1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-3 px-6 py-4 bg-card hover:bg-foreground hover:text-background text-foreground font-medium rounded-lg transition-colors border border-transparent hover:border-foreground dark:border-neutral-800"
          >
            <WhatsApp size={20} />
            <span>WhatsApp</span>
          </motion.a>
        </div>
      </div>

      <motion.div variants={fadeInUp} className="mt-20 print:mt-10 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Fadhli Muhammad Dzaki. Built with Next.js & Tailwind CSS.</p>
      </motion.div>
    </motion.div>
  );
}
