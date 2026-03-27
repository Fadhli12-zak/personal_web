"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./Section";
import Image from "next/image";
import meImg from "@/img/me.jpg";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center print:min-h-0 print:py-8 pt-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
        className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <motion.h2 variants={fadeInUp} className="text-muted text-lg md:text-xl font-medium mb-4">
            Hello, I'm
          </motion.h2>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Fadhli Muhammad Dzaki
          </motion.h1>
          <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl text-muted font-semibold mb-6">
            Frontend Developer
          </motion.h3>
          <motion.p variants={fadeInUp} className="text-lg text-muted mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
            Building responsive and user-friendly web applications with modern technologies.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center md:justify-start gap-4 print:hidden">
            <a
              href="#projects"
              className="px-6 py-3 bg-foreground text-background font-medium rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-foreground text-foreground font-medium rounded-md hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative rounded-full overflow-hidden border-8 border-card flex items-center justify-center dark:border-dark text-muted shadow-lg"
        >
          <Image
            src={meImg}
            alt="Fadhli Muhammad Dzaki"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 14rem, 20rem"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
