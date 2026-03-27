"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./Section";

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML, CSS, JavaScript", "React.js, Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Laravel", "REST APIs"],
    },
    {
      category: "Mobile",
      items: ["Flutter"],
    },
    {
      category: "Tools",
      items: ["Git, GitHub"],
    },
  ];

  return (
    <motion.div>
      <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8 text-foreground tracking-tight">
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 print:grid-cols-2">
        {skills.map((skillGroup, index) => (
          <motion.div variants={fadeInUp} key={index} className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">
              {skillGroup.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {skillGroup.items.map((skill, i) => (
                <li key={i} className="text-muted flex items-center">
                  <span className="mr-2 text-foreground">•</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
