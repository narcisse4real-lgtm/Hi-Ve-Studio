"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { Hexagon } from "./hexagon";
import { cn } from "@/lib/utils";

interface FloatingHexProps {
  className?: string;
  size?: number;
  /** 0..1 — sensitivity to mouse */
  intensity?: number;
  /** seconds for one full self-rotation */
  rotateDuration?: number;
  filled?: boolean;
  color?: string;
  reactToMouse?: boolean;
}

export function FloatingHex({
  className,
  size = 120,
  intensity = 0.04,
  rotateDuration = 50,
  filled = false,
  color = "currentColor",
  reactToMouse = true,
}: FloatingHexProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, (v) => v * intensity);
  const ty = useTransform(sy, (v) => v * intensity);

  useEffect(() => {
    if (!reactToMouse || reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2);
      y.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reactToMouse, reduced, x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: tx, y: ty }}
      className={cn("pointer-events-none will-change-transform", className)}
    >
      <motion.div
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: rotateDuration,
          ease: "linear",
        }}
      >
        <Hexagon size={size} filled={filled} style={{ color }} />
      </motion.div>
    </motion.div>
  );
}
