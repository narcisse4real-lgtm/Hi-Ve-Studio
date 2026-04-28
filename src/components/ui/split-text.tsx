"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Highlight specific words by index (0-based across whole string) */
  highlight?: number[];
  highlightClass?: string;
}

export function SplitText({
  children,
  className,
  as = "h2",
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  highlight = [],
  highlightClass = "italic text-miel font-serif",
}: SplitTextProps) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  const words = children.split(/(\s+)/);
  let wordIndex = -1;

  // Render the highlights even in the reduced-motion path so the editorial
  // hierarchy survives.
  return (
    <Tag
      className={cn(className)}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      aria-label={children}
    >
      {words.map((token, i) => {
        if (/^\s+$/.test(token)) {
          return <Fragment key={i}>{token}</Fragment>;
        }
        wordIndex += 1;
        const isHighlighted = highlight.includes(wordIndex);

        if (reduced) {
          return (
            <span
              key={i}
              className={cn(isHighlighted && highlightClass)}
            >
              {token}
            </span>
          );
        }

        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom"
            aria-hidden="true"
          >
            <motion.span
              className={cn("inline-block", isHighlighted && highlightClass)}
              variants={{
                hidden: { y: "110%" },
                visible: { y: "0%" },
              }}
              transition={{
                duration,
                delay: delay + wordIndex * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {token}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
