"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/content/home";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
            <Eyebrow>Questions fréquentes</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-6 text-[clamp(2rem,4vw,2.5rem)] text-balance sticky top-28">
                Tout ce que vous vous demandez avant de nous contacter.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t-[0.5px] border-sable">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={faq.q} delay={i * 0.04}>
                    <li className="border-b-[0.5px] border-sable">
                      <button
                        type="button"
                        className="w-full text-left py-6 md:py-7 flex items-start justify-between gap-6 group"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-5 flex-1">
                          <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums mt-1.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-serif text-xl md:text-2xl font-medium leading-snug pr-4 group-hover:text-miel transition-colors">
                            {faq.q}
                          </span>
                        </div>
                        <span
                          className={cn(
                            "shrink-0 size-9 rounded-full border-[0.5px] border-encre flex items-center justify-center transition-all duration-300",
                            isOpen && "bg-encre text-ivoire rotate-45",
                          )}
                        >
                          <Plus className="size-4" strokeWidth={1.5} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-7 pl-12 pr-12 max-w-2xl text-[15.5px] leading-[1.65] text-gris-chaud">
                              {faq.a}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
