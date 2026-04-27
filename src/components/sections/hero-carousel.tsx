"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { AtelierMockup } from "@/components/mockups/atelier-mockup";
import { LyriaMockup } from "@/components/mockups/lyria-mockup";
import { AvelineMockup } from "@/components/mockups/aveline-mockup";
import { cn } from "@/lib/utils";

const slides = [
  {
    name: "Atelier Morel",
    url: "ateliermorel.fr",
    href: "/demo/atelier-morel",
    component: AtelierMockup,
  },
  {
    name: "Cabinet Lyria",
    url: "cabinet-lyria.fr",
    href: "/demo/cabinet-lyria",
    component: LyriaMockup,
  },
  {
    name: "Maison Aveline",
    url: "maison-aveline.fr",
    href: "/demo/maison-aveline",
    component: AvelineMockup,
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const Active = slides[index].component;

  return (
    <div className="relative w-full">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={slides[index].href} aria-label={`Voir la démo ${slides[index].name}`}>
              <BrowserFrame url={slides[index].url}>
                <Active />
              </BrowserFrame>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Floating badge */}
        <div className="absolute -bottom-4 left-4 md:-left-4 md:-bottom-6 bg-encre text-ivoire rounded-full px-4 py-2 text-[11px] uppercase tracking-label flex items-center gap-2 shadow-[0_15px_30px_-15px_rgba(26,24,20,0.4)]">
          <span className="size-1.5 rounded-full bg-miel-clair animate-pulse" />
          Démo {index + 1} sur {slides.length}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-3">
          {slides.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setIndex(i)}
              className="group flex flex-col items-start gap-1.5 text-left"
              aria-label={`Voir le mockup ${s.name}`}
            >
              <span
                className={cn(
                  "h-px w-12 transition-all",
                  index === i ? "bg-encre w-16" : "bg-sable group-hover:bg-gris-chaud",
                )}
              />
              <span
                className={cn(
                  "text-[11px] uppercase tracking-label transition-colors",
                  index === i ? "text-encre" : "text-gris-chaud group-hover:text-encre",
                )}
              >
                {s.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
