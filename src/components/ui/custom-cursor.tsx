"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 320, damping: 28, mass: 0.4 });

  const [variant, setVariant] = useState<"default" | "hover" | "drag">("default");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || reduced) return;
    setHidden(false);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], [role="slider"], input, select, textarea, label, [data-cursor="hover"]',
      );
      const slider = target.closest('[role="slider"], [data-cursor="drag"]');

      if (slider) setVariant("drag");
      else if (interactive) setVariant("hover");
      else setVariant("default");
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y]);

  if (hidden) return null;

  return (
    <>
      <motion.div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: variant === "hover" ? 44 : variant === "drag" ? 64 : 10,
            height: variant === "hover" ? 44 : variant === "drag" ? 64 : 10,
            backgroundColor:
              variant === "default"
                ? "#F8F4ED"
                : "rgba(248, 244, 237, 0)",
            border:
              variant !== "default"
                ? "1px solid #F8F4ED"
                : "1px solid rgba(248, 244, 237, 0)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
        />
      </motion.div>
    </>
  );
}
