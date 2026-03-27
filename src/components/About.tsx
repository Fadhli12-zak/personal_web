"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./Section";

export function About() {
  return (
    <motion.div>
      <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-foreground tracking-tight">
        About Me
      </motion.h2>
      <div className="space-y-6 text-muted text-lg leading-relaxed max-w-3xl">
        <motion.p variants={fadeInUp}>
          I am a Junior Frontend Developer with a strong foundation in modern web
          technologies such as HTML, CSS, JavaScript, React, and Next.js. I have
          experience building responsive web applications using Tailwind CSS and
          integrating REST APIs for seamless data communication.
        </motion.p>
        <motion.p variants={fadeInUp}>
          In addition to frontend development, I have experience in backend development
          using Laravel and mobile development using Flutter. I enjoy working in
          collaborative environments and continuously improving my technical skills.
        </motion.p>
      </div>
    </motion.div>
  );
}
