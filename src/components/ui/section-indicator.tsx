"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Section {
  id: string;
  number: string;
  label: string;
}

interface SectionIndicatorProps {
  sections: Section[];
}

export function SectionIndicator({ sections }: SectionIndicatorProps) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 rounded-full border-[0.5px] border-sable/70 bg-ivoire/82 px-3 py-4 backdrop-blur-md"
          aria-hidden="true"
        >
          <div className="overflow-hidden h-6">
            <motion.div
              animate={
                reduced ? undefined : { y: -active * 24 }
              }
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
              className="flex flex-col"
            >
              {sections.map((s) => (
                <div
                  key={s.id}
                  className="h-6 flex items-center gap-3 text-[11px] uppercase tracking-label tabular-nums text-encre"
                >
                  <span>{s.number}</span>
                  <span className="text-gris-chaud">— {s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex flex-col gap-1.5">
            {sections.map((s, i) => (
              <span
                key={s.id}
                className="block h-px transition-all duration-300"
                style={{
                  width: i === active ? "32px" : "12px",
                  background: i === active ? "#B8732C" : "#E2D8C6",
                }}
              />
            ))}
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
