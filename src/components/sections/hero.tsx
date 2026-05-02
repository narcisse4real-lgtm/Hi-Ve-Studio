"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Hexagon } from "@/components/ui/hexagon";
import { HeroCarousel } from "./hero-carousel";
import { Marquee } from "@/components/ui/marquee";
import { Magnetic } from "@/components/ui/magnetic";
import { FloatingHex } from "@/components/ui/floating-hex";
import { SplitText } from "@/components/ui/split-text";
import { clientLogos } from "@/content/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <section
      ref={ref}
      className="studio-canvas relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Decorative floating hexes */}
      <FloatingHex
        className="absolute -top-24 -right-32 text-ivoire/[0.035]"
        size={460}
        rotateDuration={120}
        intensity={0.025}
      />
      <FloatingHex
        className="hidden lg:block absolute top-[55%] left-[-60px] text-miel/30"
        size={120}
        rotateDuration={45}
        intensity={0.06}
        filled
      />
      <FloatingHex
        className="hidden lg:block absolute top-[20%] right-[18%] text-sauge/30"
        size={32}
        rotateDuration={30}
        intensity={0.1}
        filled
      />

      <motion.div style={{ opacity }} className="container relative">
        <div className="mx-auto max-w-6xl">
          <motion.div style={{ y: textY }} className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow tone="ivoire" className="justify-center">
                Sites vitrines pour artisans, PME et professions libérales
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
              className="mx-auto mt-7 max-w-2xl text-lg md:text-[19px] leading-[1.55] text-ivoire/68 text-pretty"
            >
              Hi-Ve crée des sites vitrines modernes pour les entreprises
              locales qui veulent être visibles, crédibles et contactées. Pas
              un site qui existe.{" "}
              <span className="text-ivoire">Un site qui travaille pour vous.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center"
            >
              <Magnetic strength={0.25}>
                <Button href="/audit-gratuit" variant="studioSolid">
                  Recevoir mon audit gratuit
                </Button>
              </Magnetic>
              <Magnetic strength={0.18}>
                <Button href="/showroom" variant="studio">
                  Explorer le Showroom
                </Button>
              </Magnetic>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-5 text-[13px] text-ivoire/58 flex items-center justify-center gap-2"
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
              Diagnostic gratuit, sans engagement, réponse sous 48h.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: visualY }}
            className="mx-auto mt-14 w-full max-w-5xl rounded-lg border-[0.5px] border-ivoire/10 bg-ivoire/[0.035] p-3 md:p-5"
          >
            <HeroCarousel tone="dark" />
          </motion.div>
        </div>
      </motion.div>

      {/* Logos marquee */}
      <div className="mt-20 md:mt-28">
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
              Pensé pour les entreprises locales qui se développent
            </span>
            <span className="h-px w-8 bg-ivoire/14" />
          </motion.div>
        </div>
        <Marquee speed="normal">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 whitespace-nowrap group"
            >
              <Hexagon
                size={11}
                filled
                className="text-miel/70 transition-colors group-hover:text-miel-clair"
              />
              <span className="font-serif text-xl md:text-[26px] text-ivoire/32 transition-colors group-hover:text-ivoire">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
