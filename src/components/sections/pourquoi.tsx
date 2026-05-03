"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles, Users } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";
import { SplitText } from "@/components/ui/split-text";

/**
 * Bento 2.0 — anti-3-equal-cards. Asymmetric tile sizes, gallery-style
 * labels below cards, perpetual breathing on the "live" tile.
 */
export function PourquoiSection() {
  const reduced = useReducedMotion();

  return (
    <section id="pourquoi" className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <Reveal>
            <Eyebrow>Pourquoi nous</Eyebrow>
            </Reveal>
            <SplitText
              as="h2"
              className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance"
              stagger={0.05}
              duration={0.85}
            >
              Pas une usine à sites. Un vrai accompagnement.
            </SplitText>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <blockquote className="font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.45] text-encre text-balance border-l-2 border-miel pl-6 md:pl-8">
                Pas un freelance qui disparaît après la livraison. Pas une
                agence qui vous noie sous le jargon. Hi-Ve, c'est une approche
                claire, humaine et visuelle :{" "}
                <em className="not-italic text-miel">
                  comprendre votre métier, valoriser votre image et faciliter
                  le passage à l'action de vos futurs clients.
                </em>
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Bento grid: 6 columns, 2 rows */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-6 md:auto-rows-[minmax(220px,auto)]">
          {/* TILE 1 — Approche humaine (large, with breathing dot + chat preview) */}
          <Reveal className="md:col-span-3 md:row-span-2">
            <article className="relative h-full bg-creme/40 border-[0.5px] border-sable rounded-[2rem] p-8 md:p-10 overflow-hidden flex flex-col gap-8 transition-colors duration-300 hover:border-miel/60">
              <div className="flex items-start justify-between">
                <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                  01 — La relation
                </span>
                <div className="flex items-center gap-2 text-[11px] text-sauge font-medium">
                  <motion.span
                    className="size-2 rounded-full bg-sauge"
                    animate={
                      reduced
                        ? undefined
                        : { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Disponible aujourd'hui
                </div>
              </div>

              <div>
                <Users
                  className="text-miel mb-5"
                  strokeWidth={1.5}
                  size={26}
                />
                <h3 className="font-serif text-3xl md:text-[40px] font-medium leading-[1.05] tracking-tight">
                  Approche humaine.
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.65] text-gris-chaud max-w-md">
                  Un interlocuteur dédié, pas un ticket de support. Un coup de
                  fil, un point Zoom, un message — vous savez toujours qui vous
                  répond.
                </p>
              </div>

              {/* Decorative perpetual motion: stagger of avatar pills */}
              <div className="mt-auto space-y-2">
                <div className="text-[11px] uppercase tracking-label text-gris-chaud">
                  Conversation type
                </div>
                {[
                  { from: "Vous", text: "Le menu mobile reste ouvert au scroll.", side: "right" as const },
                  { from: "Hi-Ve", text: "Vu, on push un fix dans 20 min.", side: "left" as const },
                  { from: "Vous", text: "Parfait, merci !", side: "right" as const },
                ].map((m, i) => (
                  <motion.div
                    key={i}
                    initial={
                      reduced
                        ? false
                        : { opacity: 0, x: m.side === "right" ? 12 : -12 }
                    }
                    whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex ${m.side === "right" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`text-[12.5px] px-3.5 py-2 rounded-2xl max-w-[85%] ${
                        m.side === "right"
                          ? "bg-encre text-ivoire rounded-br-sm"
                          : "bg-white border-[0.5px] border-sable text-encre rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* TILE 2 — Discours clair (small, scrambling text) */}
          <Reveal delay={0.05} className="md:col-span-3">
            <article className="relative h-full bg-encre text-ivoire rounded-[2rem] p-8 overflow-hidden flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-label text-ivoire/60 tabular-nums">
                  02 — La langue
                </span>
                <MessageCircle
                  className="text-miel-clair"
                  strokeWidth={1.5}
                  size={20}
                />
              </div>

              <div>
                <h3 className="font-serif text-3xl md:text-[34px] font-medium leading-[1.1]">
                  Discours{" "}
                  <em className="not-italic text-miel-clair italic">clair.</em>
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-ivoire/65 max-w-sm">
                  Zéro jargon. On vous explique tout, étape par étape.
                </p>
              </div>

              <ScrambleStrip reduced={!!reduced} />
            </article>
          </Reveal>

          {/* TILE 3 — Vision business (compact card with stats) */}
          <Reveal delay={0.1} className="md:col-span-3">
            <article className="relative h-full bg-ivoire border-[0.5px] border-sable rounded-[2rem] p-8 overflow-hidden flex flex-col justify-between transition-colors duration-300 hover:border-miel/60">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                  03 — L'enjeu
                </span>
                <Hexagon size={14} filled className="text-miel" />
              </div>

              <div>
                <h3 className="font-serif text-3xl md:text-[34px] font-medium leading-[1.1] tracking-tight">
                  Vision business.
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-gris-chaud max-w-sm">
                  Un site n'est pas une fin en soi. C'est un outil pour votre
                  activité.
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-4 pt-6 border-t-[0.5px] border-sable">
                {[
                  { v: "+47%", l: "appels" },
                  { v: "+62%", l: "devis" },
                  { v: "x2.3", l: "trafic" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-serif text-2xl font-medium text-encre tabular-nums">
                      {s.v}
                    </dt>
                    <dd className="text-[10.5px] uppercase tracking-label text-gris-chaud mt-1">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        </div>

        {/* Tile 4 spans full width, sticky bottom */}
        <Reveal delay={0.15} className="mt-4">
          <article className="group relative bg-creme/30 border-[0.5px] border-sable rounded-[2rem] p-8 md:p-10 overflow-hidden grid gap-8 md:grid-cols-12 md:items-center transition-colors duration-300 hover:border-miel/60">
            <div className="md:col-span-2 flex items-center gap-3">
              <Sparkles
                className="text-miel"
                strokeWidth={1.5}
                size={24}
              />
              <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums md:hidden">
                04 — Sur la durée
              </span>
            </div>
            <div className="md:col-span-7">
              <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums hidden md:inline-block mb-2">
                04 — Sur la durée
              </span>
              <h3 className="font-serif text-2xl md:text-[32px] font-medium leading-[1.15] tracking-tight">
                Accompagnement durable.
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-gris-chaud max-w-2xl">
                On reste joignables après la mise en ligne pour les
                ajustements, les questions, et les évolutions. Pas de ghosting,
                pas de retro-facturation surprise.
              </p>
            </div>
            <a
              href="/methode"
              className="md:col-span-3 md:justify-self-end inline-flex items-center justify-between md:justify-end gap-2 text-[14px] text-encre group-hover:text-miel transition-colors"
            >
              Découvrir la méthode
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Tiny perpetual-motion strip — characters cycle through a hidden charset
 * to suggest "live" decoding. Cheap (CSS keyframes, no JS work).
 */
function ScrambleStrip({ reduced }: { reduced: boolean }) {
  const tokens = ["plain words", "claires", "sans jargon"];
  return (
    <div className="mt-6 pt-5 border-t-[0.5px] border-ivoire/15">
      <div className="text-[11px] uppercase tracking-label text-ivoire/40 mb-2">
        Notre vocabulaire
      </div>
      <div className="font-mono text-[13px] text-ivoire/85 h-5 overflow-hidden">
        {reduced ? (
          <span>plain words · claires · sans jargon</span>
        ) : (
          <motion.div
            animate={{ y: [0, -20, -40, -60, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.5, 0.8, 1],
            }}
          >
            {tokens.map((t) => (
              <div key={t} className="h-5">
                {t}
              </div>
            ))}
            <div className="h-5">{tokens[0]}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
