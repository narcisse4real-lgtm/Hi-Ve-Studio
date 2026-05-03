"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Compass, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/content/home";

const essentials = [
  {
    title: "Image",
    text: "Votre niveau se voit dès les premières secondes.",
    icon: Compass,
    detail: "Photos, hiérarchie, ton, preuves.",
  },
  {
    title: "Visibilité",
    text: "Une structure propre pour exister en local.",
    icon: Search,
    detail: "Pages claires, vitesse, mobile, balises.",
  },
  {
    title: "Contact",
    text: "Le visiteur sait quoi faire ensuite.",
    icon: MessageCircle,
    detail: "Appel, devis ou rendez-vous au bon endroit.",
  },
];

export function MinimalApproachSection() {
  return (
    <section id="approche" className="relative overflow-hidden bg-ivoire py-20 md:py-32">
      <motion.div
        className="pointer-events-none absolute left-[-12%] top-24 hidden h-64 w-64 rounded-full border-[0.5px] border-sable/80 lg:block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[8%] top-24 hidden h-2 w-2 rounded-full bg-miel lg:block"
        animate={{ y: [0, 18, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
      />

      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Approche</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-5 text-[clamp(2.2rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.035em] text-balance">
                Moins de bruit. Plus de demandes.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <p className="max-w-xl text-lg leading-[1.65] text-gris-chaud lg:ml-auto">
              On enlève ce qui brouille. On garde ce qui rassure, guide et
              déclenche une prise de contact.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal className="min-h-[440px]">
            <div className="relative h-full overflow-hidden rounded-[26px] border-[0.5px] border-sable bg-[#fffaf2] p-5 md:p-7">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(226,216,198,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(226,216,198,0.45)_1px,transparent_1px)] bg-[size:42px_42px]" />
              <motion.div
                className="absolute left-8 top-8 w-[58%] rounded-[20px] border-[0.5px] border-sable bg-creme p-4 shadow-[0_24px_60px_-48px_rgba(26,24,20,0.7)]"
                initial={{ opacity: 0, y: 24, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gris-clair">
                    Avant
                  </span>
                  <span className="h-2 w-10 rounded-full bg-sable" />
                </div>
                <div className="space-y-2">
                  <span className="block h-5 w-3/4 rounded-full bg-sable" />
                  <span className="block h-3 w-full rounded-full bg-sable/80" />
                  <span className="block h-3 w-2/3 rounded-full bg-sable/70" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <span className="h-16 rounded-xl bg-sable/70" />
                  <span className="h-16 rounded-xl bg-sable/60" />
                  <span className="h-16 rounded-xl bg-sable/50" />
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-7 right-6 w-[68%] rounded-[24px] border-[0.5px] border-encre/10 bg-encre p-4 text-ivoire shadow-[0_32px_80px_-48px_rgba(26,24,20,0.9)] md:right-8"
                initial={{ opacity: 0, y: 30, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-ivoire/52">
                    Après
                  </span>
                  <motion.span
                    className="h-2 w-2 rounded-full bg-miel"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                  />
                </div>
                <p className="font-serif text-[32px] leading-[0.95] md:text-[42px]">
                  clair.
                  <br />
                  crédible.
                  <br />
                  contactable.
                </p>
                <div className="mt-7 flex items-center justify-between rounded-full border-[0.5px] border-ivoire/14 bg-ivoire/[0.06] px-4 py-3 text-sm">
                  <span>Demande qualifiée</span>
                  <ArrowRight className="size-4 text-miel" />
                </div>
              </motion.div>

              <motion.div
                className="absolute left-7 bottom-9 hidden rounded-full border-[0.5px] border-sable bg-ivoire px-4 py-2 text-xs text-gris-chaud md:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              >
                le bon message, au bon moment
              </motion.div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {essentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} as="article" delay={index * 0.08}>
                  <motion.div
                    className="group relative overflow-hidden rounded-[22px] border-[0.5px] border-sable bg-[#fffaf2] p-6 transition-colors duration-300 hover:border-miel md:p-7"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <motion.div
                      className="absolute right-[-32px] top-[-32px] size-28 rounded-full border-[0.5px] border-sable"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 28 + index * 8, ease: "linear" }}
                    />
                    <div className="relative flex items-start gap-5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-[0.5px] border-sable bg-ivoire text-miel transition-colors duration-300 group-hover:border-miel">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl text-encre">{item.title}</h3>
                        <p className="mt-2 text-[15px] leading-[1.6] text-gris-chaud">
                          {item.text}
                        </p>
                        <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-gris-clair transition-colors duration-300 group-hover:text-miel">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MinimalProofMarquee() {
  return (
    <section className="overflow-hidden border-y-[0.5px] border-sable bg-creme py-12 md:py-16">
      <div className="container mb-8 flex items-end justify-between gap-6">
        <Reveal>
          <Eyebrow>Avis clients</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="hidden max-w-sm text-right text-sm leading-[1.55] text-gris-chaud md:block">
            Des retours concrets, parce qu'une belle vitrine doit aussi créer
            de la confiance.
          </p>
        </Reveal>
      </div>

      <Marquee speed="slow" pauseOnHover>
        {testimonials.map((testimonial, index) => (
          <figure
            key={`${testimonial.name}-${index}`}
            className="w-[84vw] max-w-[430px] shrink-0 rounded-[18px] border-[0.5px] border-sable bg-[#fffaf2] p-6 shadow-[0_24px_60px_-48px_rgba(26,24,20,0.45)] md:w-[430px]"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.18em] text-gris-chaud">
                Avis client
              </span>
              <span className="tabular-nums text-[11px] text-gris-clair">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <blockquote className="font-serif text-[21px] leading-[1.24] text-encre md:text-[23px]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t-[0.5px] border-sable pt-4">
              <p className="text-sm font-medium text-encre">{testimonial.name}</p>
              <p className="mt-1 text-[13px] text-gris-chaud">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}

export function MinimalAuditCtaSection() {
  return (
    <section id="audit-gratuit" className="studio-canvas py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow tone="ivoire">Audit gratuit</Eyebrow>
            <h2 className="heading-h2 mt-6 text-[clamp(2.4rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.045em] text-ivoire text-balance">
              Votre site donne-t-il envie de vous contacter ?
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.6] text-ivoire/62">
              Envoyez votre site, votre fiche Google ou le nom de votre
              entreprise. On vous répond sous 48h avec une lecture claire.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {["Image", "Mobile", "Contact", "Visibilité"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border-[0.5px] border-ivoire/12 bg-ivoire/[0.045] px-3 py-1.5 text-xs text-ivoire/58"
                >
                  <Check className="size-3 text-miel" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/audit-gratuit" variant="studioSolid">
                Recevoir mon audit
              </Button>
              <Button href="/showroom" variant="studio">
                Voir le showroom
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
