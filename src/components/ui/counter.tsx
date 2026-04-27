"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
}

export function Counter({
  to,
  duration = 1.6,
  className,
  prefix,
  suffix,
  format,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduced = useReducedMotion();

  const value = useMotionValue(0);
  const spring = useSpring(value, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
    duration,
  });
  const display = useTransform(spring, (latest) => {
    const rounded = Math.round(latest);
    return format ? format(rounded) : rounded.toLocaleString("fr-FR");
  });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      value.set(to);
      return;
    }
    value.set(to);
  }, [inView, to, value, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
