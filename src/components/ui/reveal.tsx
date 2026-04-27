"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header" | "footer";
  amount?: number;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  amount = 0.2,
}: RevealProps) {
  const reduced = useReducedMotion();

  const Component = motion[as];

  if (reduced) {
    const Plain = as as keyof JSX.IntrinsicElements;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
