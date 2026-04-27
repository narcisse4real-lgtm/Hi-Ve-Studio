"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Hexagon } from "@/components/ui/hexagon";
import { HeroCarousel } from "./hero-carousel";
import { Marquee } from "@/components/ui/marquee";
import { clientLogos } from "@/content/site";

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative hex grid */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -right-32 opacity-[0.07] pointer-events-none"
      >
        <Hexagon size={420} className="text-encre" />
      </div>

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow>
                Sites vitrines pour artisans, PME et professions libérales
              </Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="heading-display mt-6 text-[clamp(2.5rem,6.5vw,4.5rem)] text-balance"
            >
              Votre savoir-faire mérite une vitrine{" "}
              <em className="not-italic text-miel font-serif relative">
                à sa hauteur.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-xl text-lg md:text-[19px] leading-[1.6] text-gris-chaud text-pretty"
            >
              Hi-Ve crée des sites vitrines modernes pour les entreprises
              locales qui veulent être visibles, crédibles et contactées. Pas
              un site qui existe.{" "}
              <span className="text-encre">Un site qui travaille pour vous.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <Button href="/audit-gratuit">Recevoir mon audit gratuit</Button>
              <Button href="/showroom" variant="secondary">
                Explorer le Showroom
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-5 text-[13px] text-gris-chaud flex items-center gap-2"
            >
              <Hexagon size={9} filled className="text-sauge" />
              Diagnostic gratuit, sans engagement, réponse sous 48h.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <HeroCarousel />
          </motion.div>
        </div>
      </div>

      {/* Logos marquee */}
      <div className="mt-20 md:mt-28">
        <div className="container mb-6">
          <p className="text-[11px] uppercase tracking-label text-gris-chaud text-center">
            Pensé pour les entreprises locales qui se développent
          </p>
        </div>
        <Marquee speed="slow">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 whitespace-nowrap"
            >
              <Hexagon size={11} filled className="text-miel/60" />
              <span className="font-serif text-xl md:text-[26px] text-encre/40">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
