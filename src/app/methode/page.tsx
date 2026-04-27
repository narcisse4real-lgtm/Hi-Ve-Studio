import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { MethodeSection } from "@/components/sections/methode";
import { FaqSection } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";

export const metadata: Metadata = {
  title: "Notre méthode — Trois étapes simples, sans jargon",
  description:
    "Diagnostic, création, mise en ligne. Hi-Ve travaille en trois étapes claires, validées avec vous, sans surprise.",
  alternates: { canonical: "/methode" },
};

const phases = [
  {
    label: "Phase 01",
    title: "Diagnostic",
    duration: "1 à 2 jours",
    steps: [
      "Audit de votre présence en ligne actuelle (site, fiche Google, réseaux)",
      "Entretien d'1h pour comprendre votre métier et vos enjeux",
      "Analyse de 3 à 5 concurrents locaux directs",
      "Restitution écrite : forces, points bloquants, recommandations",
    ],
  },
  {
    label: "Phase 02",
    title: "Création",
    duration: "2 à 4 semaines",
    steps: [
      "Direction artistique : moodboard, palette, typographies (validation 1)",
      "Architecture des pages et copywriting des contenus clés",
      "Maquettes des pages principales (validation 2)",
      "Intégration responsive, animations, optimisation",
      "Recette interne : performance, accessibilité, contenus",
    ],
  },
  {
    label: "Phase 03",
    title: "Mise en ligne",
    duration: "1 jour + accompagnement",
    steps: [
      "Configuration du nom de domaine et de l'hébergement",
      "Mise en ligne, tests croisés desktop/mobile",
      "Configuration de la fiche Google Business si pertinent",
      "Formation 30 min à 1h pour modifier vos contenus",
      "Suivi sur 30 jours inclus",
    ],
  },
];

export default function MethodePage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36 pb-20">
        <section className="container">
          <Reveal>
            <Eyebrow>Notre méthode</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-display mt-6 text-[clamp(2.5rem,6vw,4.25rem)] text-balance max-w-4xl">
              Trois étapes pour passer d'une présence floue à une vitrine qui inspire confiance.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-gris-chaud">
              Pas de promesse magique, pas de jargon technique. On vous montre
              chaque étape, on valide ensemble, et on avance à un rythme qui
              respecte votre quotidien.
            </p>
          </Reveal>
        </section>

        <MethodeSection />

        <section className="container py-20 md:py-28">
          <div className="space-y-20">
            {phases.map((phase, i) => (
              <Reveal key={phase.label}>
                <article className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative">
                        <Hexagon size={48} className="text-miel" />
                        <span className="absolute inset-0 flex items-center justify-center font-serif text-base font-medium text-miel tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                      {phase.label} · {phase.duration}
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium mt-3">
                      {phase.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-7 lg:col-start-6">
                    <ul className="border-t-[0.5px] border-sable">
                      {phase.steps.map((step, idx) => (
                        <li
                          key={step}
                          className="border-b-[0.5px] border-sable py-5 flex items-start gap-5"
                        >
                          <span className="text-[11px] uppercase tracking-label text-miel tabular-nums mt-1">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[15.5px] leading-[1.65]">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <FaqSection />

        <section className="container">
          <div className="bg-encre text-ivoire rounded-3xl p-10 md:p-16 relative overflow-hidden">
            <div className="relative max-w-2xl">
              <h2 className="heading-h2 text-[clamp(2rem,4.5vw,3rem)] text-balance">
                Prêt à démarrer le diagnostic ?
              </h2>
              <p className="mt-5 text-ivoire/70 text-lg leading-[1.6]">
                C'est gratuit et sans engagement. Réponse sous 48h.
              </p>
              <div className="mt-8">
                <Button
                  href="/audit-gratuit"
                  className="bg-ivoire text-encre hover:bg-miel-clair hover:text-encre"
                >
                  Recevoir mon audit gratuit
                </Button>
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
