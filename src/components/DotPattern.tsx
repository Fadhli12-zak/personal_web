"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, useAnimationFrame } from "framer-motion";

export function DotPattern() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Spring physics for that "lively" but smooth pointer tracking
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Time value for continuous breathing animation
  const time = useMotionValue(0);
  useAnimationFrame((t) => {
    time.set(t);
  });

  // Calculate breathing radius (spread out massively: base 600px ~ 50% background)
  const pulseRadius = useTransform(time, (t) => 600 + Math.sin(t / 600) * 40);

  // Parallax effect: moves the grid slightly in the opposite direction of the mouse
  const bgX = useTransform(smoothX, (x) => -x * 0.03);
  const bgY = useTransform(smoothY, (y) => -y * 0.03);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
      style={{
        backgroundImage: `radial-gradient(hsl(var(--foreground)) 1.5px, transparent 1.5px)`,
        backgroundSize: "40px 40px",
        backgroundPosition: useMotionTemplate`${bgX}px ${bgY}px`,
        opacity: 0.5,
        maskImage: useMotionTemplate`radial-gradient(${pulseRadius}px circle at ${smoothX}px ${smoothY}px, black, transparent)`,
        WebkitMaskImage: useMotionTemplate`radial-gradient(${pulseRadius}px circle at ${smoothX}px ${smoothY}px, black, transparent)`,
      }}
    />
  );
}
