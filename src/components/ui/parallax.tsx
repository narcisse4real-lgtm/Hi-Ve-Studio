"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Distance in px the element travels across its scroll life */
  distance?: number;
  direction?: "up" | "down";
}

export function Parallax({
  children,
  className,
  distance = 80,
  direction = "up",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range =
    direction === "up" ? [distance, -distance] : [-distance, distance];

  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : range);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
