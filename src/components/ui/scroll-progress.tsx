"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 inset-x-0 h-[2px] bg-miel z-[60] pointer-events-none"
    />
  );
}
