"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp } from "./Section";
import Image, { StaticImageData } from "next/image";

import carbonImg from "../img/carbon_tr.png";
import lms1 from "../img/LMS-1.png";
import lms2 from "../img/LMS-2.png";
import lms3 from "../img/LMS-3.png";
import absensiImg from "../img/absensi-app.png";

const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.06 5.06 0 0 0-.1-3.82s-1.2-.38-3.9 1.4a13.4 13.4 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.06 5.06 0 0 0-.1 3.82A5.5 5.5 0 0 0 2 8.5c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
  </svg>
);

export interface ProjectProps {
  title: string;
  role: string;
  techStack: string;
  description: string[];
  images?: StaticImageData[];
  githubUrl?: string;
  websiteUrl?: string;
}

function ProjectCard({ title, role, techStack, description, images, githubUrl, websiteUrl }: ProjectProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.01 }}
      className="print-card-reset bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-700 dark:border dark:border-neutral-800 flex flex-col overflow-hidden group"
    >
      {/* Image Preview Area */}
      {images && images.length === 3 ? (
        <div className="w-full relative min-h-[300px] sm:min-h-[400px] overflow-hidden border-b border-neutral-300 dark:border-neutral-700 bg-neutral-200/50 dark:bg-neutral-800/50 p-6 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -ml-[15%] -mt-[10%] w-[60%] sm:w-[50%] aspect-video -translate-x-1/2 -translate-y-1/2 -rotate-6 rounded-xl shadow-lg overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 transition-all duration-700 group-hover:-rotate-12 group-hover:-ml-[20%] group-hover:-mt-[15%] z-10 opacity-70 group-hover:opacity-100 bg-card">
            <Image src={images[1]} alt={`${title} screenshot 2`} fill className="object-contain" placeholder="blur" />
          </div>
          <div className="absolute top-1/2 left-1/2 ml-[15%] mt-[10%] w-[60%] sm:w-[50%] aspect-video -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-xl shadow-lg overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 transition-all duration-700 group-hover:rotate-12 group-hover:ml-[20%] group-hover:mt-[15%] z-10 opacity-70 group-hover:opacity-100 bg-card">
            <Image src={images[2]} alt={`${title} screenshot 3`} fill className="object-contain" placeholder="blur" />
          </div>
          <div className="absolute top-1/2 left-1/2 w-[70%] sm:w-[60%] aspect-video -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 transition-transform duration-700 group-hover:scale-[1.05] z-20 bg-card">
            <Image src={images[0]} alt={`${title} main screenshot`} fill className="object-contain" placeholder="blur" />
          </div>
        </div>
      ) : images && images.length > 0 ? (
        <div className="w-full relative min-h-[300px] sm:min-h-[450px] overflow-hidden border-b border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-900/50 group/img flex items-center justify-center p-6">
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[400px]">
            <Image src={images[0]} alt={title} fill className="object-contain transition-transform duration-700 group-hover/img:scale-[1.03]" placeholder="blur" />
          </div>
        </div>
      ) : (
        <div className="w-full bg-neutral-200 dark:bg-neutral-800 relative min-h-[200px] sm:min-h-[300px] flex items-center justify-center border-b border-neutral-300 dark:border-neutral-700 transition-colors duration-700">
          <span className="text-muted text-sm font-medium transition-colors group-hover:text-foreground">
            [ Preview Project ]
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">
          {title}
        </h3>
        <div className="mb-4 text-sm font-medium text-muted flex flex-col xl:flex-row xl:items-center gap-1 xl:gap-3">
          <span><strong className="text-foreground font-semibold">Role:</strong> {role}</span>
          <span className="hidden xl:inline text-neutral-300 dark:text-neutral-700">|</span>
          <span><strong className="text-foreground font-semibold">Tech Stack:</strong> {techStack}</span>
        </div>
        <ul className="space-y-2 text-muted">
          {description.map((item, index) => (
            <li key={index} className="flex">
              <span className="mr-2 text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {(githubUrl || websiteUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background text-sm font-medium rounded-md transition-colors"
                title="View Source on GitHub"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background hover:bg-neutral-800 dark:hover:bg-neutral-200 text-sm font-medium rounded-md transition-colors"
                title="Visit Live Website"
              >
                <ExternalLink size={16} />
                <span>Website</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "Carbon Tracker Web App",
      role: "Frontend Developer",
      techStack: "Next.js, Tailwind CSS, REST API",
      githubUrl: "https://github.com/Fadhli12-zak/frontEnd_CarbonTracker",
      websiteUrl: "https://front-end-carbon-tracker.vercel.app/login",
      images: [carbonImg],
      description: [
        "Developed a carbon emission tracking web application",
        "Built input forms for resource consumption data",
        "Integrated REST APIs for data processing and storage",
        "Designed responsive UI for better user experience",
      ],
    },
    {
      title: "LMS Web App (Laravel)",
      role: "Laravel Developer",
      techStack: "Laravel, MySQL",
      githubUrl: "https://github.com/Fadhli12-zak/CORELASI_WEB.git",
      images: [lms1, lms2, lms3],
      description: [
        "Contributed to the development of a Learning Management System",
        "Built assignment management and grading features",
        "Implemented teacher scheduling system",
      ],
    },
    {
      title: "Attendance Mobile App",
      role: "Mobile Developer",
      techStack: "Flutter, Laravel API",
      githubUrl: "https://github.com/Fadhli12-zak/CORELASI_MOBILE.git",
      images: [absensiImg],
      description: [
        "Developed QR-based attendance scanner",
        "Integrated RESTful APIs for secure data communication",
        "Connected mobile app with LMS backend",
      ],
    },
  ];

  return (
    <motion.div>
      <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-foreground tracking-tight">
        Projects
      </motion.h2>
      <div className="space-y-8 print:space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
