import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { Button } from "@/components/ui/button";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";
import { AtelierMockup } from "@/components/mockups/atelier-mockup";
import { LyriaMockup } from "@/components/mockups/lyria-mockup";
import { AvelineMockup } from "@/components/mockups/aveline-mockup";

export const metadata: Metadata = {
  title: "Showroom — Trois métiers, trois vitrines",
  description:
    "Découvrez nos trois projets de démonstration : Atelier Morel, Cabinet Lyria et Maison Aveline. Trois vitrines complètes pour imaginer la vôtre.",
  alternates: { canonical: "/showroom" },
};

const showroomEntries = [
  {
    slug: "atelier-morel",
    label: "Artisan menuisier",
    name: "Atelier Morel",
    objective:
      "Générer des demandes de devis qualifiées pour des projets sur-mesure haut de gamme.",
    description:
      "Une vitrine éditoriale qui met le savoir-faire au centre. Photos d'atelier, galerie filtrable par type de projet, et un parcours de devis pensé pour qualifier la demande dès le formulaire.",
    features: [
      "Galerie de réalisations filtrable",
      "Formulaire de devis multi-étapes",
      "Click-to-call mobile",
      "Page savoir-faire en storytelling",
    ],
    pour: "Artisans haut de gamme — menuisiers, ébénistes, marbriers, artisans d'art.",
    Mockup: AtelierMockup,
    url: "ateliermorel.fr",
  },
  {
    slug: "cabinet-lyria",
    label: "Profession libérale santé",
    name: "Cabinet Lyria",
    objective:
      "Faciliter la prise de rendez-vous et rassurer les nouveaux patients avant la première consultation.",
    description:
      "Un design épuré, une voix calme. La prise de RDV en ligne libère le temps administratif, la FAQ rassure, et la présentation des praticiens crée le lien avant le cabinet.",
    features: [
      "Prise de rendez-vous Cal.com intégrée",
      "Pages praticiens avec parcours et formations",
      "FAQ sur le déroulement de la séance",
      "Plan d'accès et informations pratiques",
    ],
    pour: "Professionnels de santé, thérapeutes, praticiens à RDV.",
    Mockup: LyriaMockup,
    url: "cabinet-lyria.fr",
  },
  {
    slug: "maison-aveline",
    label: "Beauté & bien-être",
    name: "Maison Aveline",
    objective:
      "Créer du désir, présenter les prestations comme des rituels et faciliter la réservation.",
    description:
      "Une vitrine éditoriale et sensorielle. Photographies macro, typographie italique, ambiance institut. La grille de prestations précise les prix et l'expérience, la réservation se fait en deux clics.",
    features: [
      "Grille de prestations avec prix et durées",
      "Système de réservation en ligne",
      "Galerie immersive de l'institut",
      "Feed Instagram intégré",
    ],
    pour: "Instituts beauté, salons, spas, praticien·ne·s premium.",
    Mockup: AvelineMockup,
    url: "maison-aveline.fr",
  },
];

const mockups = {
  AtelierMockup,
  LyriaMockup,
  AvelineMockup,
};

export default function ShowroomPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36 pb-24">
        <section className="container">
          <Reveal>
            <Eyebrow>Showroom Hi-Ve</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-display mt-6 text-[clamp(2.5rem,6vw,4.25rem)] text-balance max-w-4xl">
              Trois métiers, trois vitrines, trois résultats.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-gris-chaud">
              Chaque démo est un site complet, pensé pour un secteur précis.
              Naviguez librement, ouvrez chaque page, testez les formulaires.
              Imaginez ce que pourrait donner votre activité.
            </p>
          </Reveal>
        </section>

        <section className="container mt-20 md:mt-28">
          <div className="space-y-24 md:space-y-32">
            {showroomEntries.map((entry, i) => {
              const Mockup = entry.Mockup;
              const reverse = i % 2 === 1;
              return (
                <Reveal key={entry.slug}>
                  <article className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
                    <div
                      className={`lg:col-span-7 ${
                        reverse ? "lg:order-2" : ""
                      }`}
                    >
                      <Link
                        href={`/demo/${entry.slug}`}
                        className="block group"
                        aria-label={`Voir la démo ${entry.name}`}
                      >
                        <div className="rounded-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-30px_rgba(26,24,20,0.3)]">
                          <BrowserFrame url={entry.url}>
                            <Mockup />
                          </BrowserFrame>
                        </div>
                      </Link>
                    </div>

                    <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                      <div className="flex items-center gap-2.5 mb-5">
                        <Hexagon size={11} filled className="text-miel" />
                        <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                          Démo {String(i + 1).padStart(2, "0")} —{" "}
                          {entry.label}
                        </span>
                      </div>
                      <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
                        {entry.name}
                      </h2>
                      <p className="mt-5 text-[15.5px] leading-[1.65] text-gris-chaud">
                        {entry.description}
                      </p>

                      <div className="mt-7 border-t-[0.5px] border-sable pt-6">
                        <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                          Objectif du site
                        </p>
                        <p className="mt-2 text-[15px] leading-[1.55]">
                          {entry.objective}
                        </p>
                      </div>

                      <ul className="mt-7 space-y-2.5 text-[14.5px]">
                        {entry.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <Check
                              className="size-4 mt-0.5 text-miel shrink-0"
                              strokeWidth={2}
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-6 text-[13px] text-gris-chaud border-l-2 border-sable pl-4">
                        <span className="text-encre font-medium">Pour qui ?</span>{" "}
                        {entry.pour}
                      </p>

                      <div className="mt-8">
                        <Button href={`/demo/${entry.slug}`}>
                          Explorer la démo
                        </Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="container mt-28 md:mt-36">
          <div className="bg-encre text-ivoire rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 opacity-10"
            >
              <Hexagon size={260} className="text-miel" />
            </div>
            <div className="relative max-w-3xl">
              <Eyebrow tone="ivoire">Et la vôtre ?</Eyebrow>
              <h2 className="heading-h2 mt-5 text-[clamp(2rem,4.5vw,3rem)] text-balance">
                Imaginons ensemble votre vitrine.
              </h2>
              <p className="mt-5 text-ivoire/70 text-lg leading-[1.6] max-w-xl">
                Chaque démo a été conçue à partir d'un brief réaliste. Le vôtre
                pourrait être le quatrième. Commençons par un audit gratuit de votre présence actuelle.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  href="/audit-gratuit"
                  className="bg-ivoire text-encre hover:bg-miel-clair hover:text-encre"
                >
                  Recevoir mon audit gratuit
                </Button>
                <Link
                  href="/methode"
                  className="inline-flex items-center gap-2 text-ivoire/85 hover:text-miel-clair transition-colors px-3 py-2 text-[14px]"
                >
                  Découvrir notre méthode
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
