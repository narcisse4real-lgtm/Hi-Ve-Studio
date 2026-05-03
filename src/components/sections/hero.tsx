"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Hexagon } from "@/components/ui/hexagon";
import { ClientMockupMarquee } from "./client-mockup-marquee";
import { Magnetic } from "@/components/ui/magnetic";
import { FloatingHex } from "@/components/ui/floating-hex";
import { SplitText } from "@/components/ui/split-text";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 38]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="studio-canvas relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36"
    >
      <FloatingHex
        className="absolute -right-36 -top-28 text-ivoire/[0.035]"
        size={420}
        rotateDuration={120}
        intensity={0.02}
      />

      <motion.div style={{ opacity }} className="container relative">
        <div className="mx-auto max-w-6xl">
          <motion.div style={{ y: textY }} className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow tone="ivoire" className="justify-center">
                Sites vitrines pour entreprises locales
              </Eyebrow>
            </motion.div>

            <SplitText
              as="h1"
              className="font-serif mt-6 text-[clamp(3.4rem,10vw,7.25rem)] leading-[0.88] tracking-[-0.045em] text-balance"
              stagger={0.04}
              duration={0.9}
              delay={0.15}
              highlight={[5, 6, 7]}
              highlightClass="text-miel-clair italic font-serif"
            >
              Votre savoir-faire mérite une vitrine à sa hauteur.
            </SplitText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-7 max-w-xl text-lg md:text-[19px] leading-[1.55] text-ivoire/66 text-pretty"
            >
              Une présence claire, rapide, crédible. Pour être vu, compris et
              contacté.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
            >
              <Magnetic strength={0.25}>
                <Button href="/audit-gratuit" variant="studioSolid">
                  Recevoir mon audit
                </Button>
              </Magnetic>
              <Magnetic strength={0.18}>
                <Button href="/showroom" variant="studio">
                  Voir les vitrines
                </Button>
              </Magnetic>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-5 flex items-center justify-center gap-2 text-[13px] text-ivoire/58"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "linear",
                }}
                className="inline-block"
              >
                <Hexagon size={9} filled className="text-sauge" />
              </motion.span>
              Gratuit. Sans engagement. Réponse sous 48h.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-14 md:mt-20">
        <div className="container mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-ivoire/14" />
            <span className="text-[11px] uppercase tracking-label text-ivoire/48">
              Quelques vitrines possibles
            </span>
            <span className="h-px w-8 bg-ivoire/14" />
          </motion.div>
        </div>
        <ClientMockupMarquee />
      </div>
    </section>
  );
}
