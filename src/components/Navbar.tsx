"use client";

import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "#hero", icon: <Home size={18} /> },
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Skills", href: "#skills", icon: <Code size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 print:hidden"
    >
      <div className="flex items-center gap-1 md:gap-2 px-3 py-2 rounded-full bg-background/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-xl">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 md:px-5 md:py-2 text-muted hover:text-foreground hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 rounded-full transition-all duration-300 flex items-center gap-2"
            title={item.name}
          >
            {item.icon}
            <span className="hidden md:block text-sm font-semibold">{item.name}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
