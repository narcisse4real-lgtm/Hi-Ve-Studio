import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { AuditForm } from "@/components/sections/audit-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";

export const metadata: Metadata = {
  title: "Audit gratuit — Diagnostic complet sous 48h",
  description:
    "Recevez un audit gratuit de votre présence en ligne : image, visibilité Google, points bloquants et pistes d'amélioration concrètes.",
  alternates: { canonical: "/audit-gratuit" },
};

const analysed = [
  {
    title: "Votre image actuelle",
    body: "Cohérence avec votre niveau de qualité réel. Première impression. Différenciation locale.",
  },
  {
    title: "Votre visibilité Google",
    body: "Position sur les recherches métier locales. Fiche Google Business. Indexation et structure.",
  },
  {
    title: "Vos points de conversion",
    body: "Parcours du visiteur. Boutons d'action. Lisibilité du contact. Rapidité de réponse.",
  },
  {
    title: "Votre site (s'il existe)",
    body: "Performance, mobile, accessibilité, structure des pages, lisibilité des contenus.",
  },
];

export default function AuditPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36 pb-24">
        <section className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Audit gratuit</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="heading-display mt-6 text-[clamp(2.25rem,5.5vw,3.75rem)] text-balance">
                  Votre site vous aide-t-il vraiment à obtenir des clients ?
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-[1.65] text-gris-chaud">
                  Envoyez-nous le lien de votre site, votre fiche Google ou simplement le nom de votre entreprise. On vous renvoie un diagnostic clair, honnête, et des pistes concrètes — sous 48h.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-12 space-y-6">
                  <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                    Ce qu'on analyse
                  </p>
                  {analysed.map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="relative shrink-0">
                        <Hexagon size={28} className="text-miel" />
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-miel tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-medium leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[14.5px] leading-[1.55] text-gris-chaud">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-12 text-[14px] leading-[1.6] text-gris-chaud border-l-2 border-miel pl-5 max-w-md">
                  Sans engagement. Sans relance commerciale agressive. Juste un
                  regard professionnel sur votre présence en ligne.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:pl-4">
              <Reveal delay={0.1}>
                <AuditForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
