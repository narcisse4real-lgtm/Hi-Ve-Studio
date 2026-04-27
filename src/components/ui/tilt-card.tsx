"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className,
  max = 6,
  scale = 1.01,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const sx = useSpring(x, { stiffness: 220, damping: 22 });
  const sy = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const glareX = useTransform(sx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(sy, [0, 1], ["0%", "100%"]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(220px circle at ${gx} ${gy}, rgba(184,115,44,0.18), transparent 60%)`,
          ),
        }}
      />
    </motion.div>
  );
}
