"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Spotlight Border Card — the border lights up under the cursor with a
 * radial gradient. No glow, no neon — a tinted hue that blends.
 */
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Tint colour for the spotlight (CSS color). */
  tint?: string;
}

export function SpotlightCard({
  children,
  className,
  tint = "rgba(184,115,44,0.18)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    x.set(-200);
    y.set(-200);
  };

  const background = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, ${tint}, transparent 70%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("group relative", className)}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}
