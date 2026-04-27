import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { OffresSection } from "@/components/sections/offres";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tarifs — Trois packs, trois abonnements",
  description:
    "Sites vitrines à partir de 1 990 €. Découvrez les trois packs Hi-Ve et les abonnements pour faire vivre votre site.",
  alternates: { canonical: "/tarifs" },
};

const featuresMatrix = [
  {
    label: "Pages incluses",
    essentiel: "3 à 4",
    pro: "5 à 7",
    signature: "Sur-mesure",
  },
  {
    label: "Design responsive",
    essentiel: true,
    pro: true,
    signature: true,
  },
  {
    label: "Formulaire de contact",
    essentiel: true,
    pro: "Avancé",
    signature: "Sur-mesure",
  },
  {
    label: "Galerie de réalisations",
    essentiel: false,
    pro: true,
    signature: true,
  },
  {
    label: "Avis clients intégrés",
    essentiel: false,
    pro: true,
    signature: true,
  },
  {
    label: "Prise de rendez-vous en ligne",
    essentiel: false,
    pro: "Optionnel",
    signature: true,
  },
  {
    label: "Pages services détaillées",
    essentiel: false,
    pro: true,
    signature: true,
  },
  {
    label: "Google Maps & SEO local",
    essentiel: "Base",
    pro: true,
    signature: "Avancé",
  },
  {
    label: "Direction artistique",
    essentiel: false,
    pro: false,
    signature: true,
  },
  {
    label: "Copywriting dédié",
    essentiel: false,
    pro: false,
    signature: true,
  },
  {
    label: "Animations sur-mesure",
    essentiel: false,
    pro: "Standard",
    signature: true,
  },
  {
    label: "Hébergement + nom de domaine 1 an",
    essentiel: true,
    pro: true,
    signature: true,
  },
  {
    label: "Mise en ligne et formation",
    essentiel: true,
    pro: true,
    signature: true,
  },
  {
    label: "Accompagnement post-livraison",
    essentiel: "30 jours",
    pro: "60 jours",
    signature: "Renforcé",
  },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="size-4 text-miel" strokeWidth={2.5} />;
  }
  if (value === false) {
    return <Minus className="size-4 text-gris-clair" strokeWidth={1.5} />;
  }
  return <span className="text-[13.5px] text-encre">{value}</span>;
}

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container">
          <Reveal>
            <Eyebrow>Tarifs</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="heading-display mt-6 text-[clamp(2.5rem,6vw,4.25rem)] text-balance max-w-4xl">
              Un pack adapté à votre besoin, pas une solution unique.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-gris-chaud">
              Tous nos prix sont indicatifs et hors taxes. Le devis final est
              établi après le diagnostic, en fonction du périmètre exact de votre projet.
            </p>
          </Reveal>
        </section>

        <OffresSection />

        <section className="container pb-28">
          <div className="max-w-2xl mb-10">
            <Reveal>
              <Eyebrow>Comparateur</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-5 text-[clamp(1.75rem,3.5vw,2.5rem)] text-balance">
                Tout, en une vue.
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-2xl border-[0.5px] border-sable bg-white">
              <table className="w-full text-left text-[14px]">
                <thead>
                  <tr className="border-b-[0.5px] border-sable">
                    <th className="py-5 pl-6 pr-4 font-medium text-[11px] uppercase tracking-label text-gris-chaud w-1/3">
                      Fonctionnalité
                    </th>
                    {[
                      { name: "Essentiel", price: "1 990 €" },
                      { name: "Vitrine Pro", price: "2 990 €", featured: true },
                      { name: "Signature", price: "4 500 €" },
                    ].map((p) => (
                      <th
                        key={p.name}
                        className={cn(
                          "py-5 px-4 font-medium text-encre",
                          p.featured && "bg-miel/5",
                        )}
                      >
                        <div className="flex flex-col items-start">
                          <span className="font-serif text-xl font-medium">
                            {p.name}
                          </span>
                          <span className="text-[12px] text-gris-chaud font-normal mt-1">
                            À partir de {p.price}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featuresMatrix.map((row, idx) => (
                    <tr
                      key={row.label}
                      className={cn(
                        "border-b-[0.5px] border-sable last:border-0",
                        idx % 2 === 1 && "bg-creme/30",
                      )}
                    >
                      <td className="py-4 pl-6 pr-4 text-encre/85">
                        {row.label}
                      </td>
                      <td className="py-4 px-4">
                        <Cell value={row.essentiel} />
                      </td>
                      <td className="py-4 px-4 bg-miel/5">
                        <Cell value={row.pro} />
                      </td>
                      <td className="py-4 px-4">
                        <Cell value={row.signature} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <p className="mt-8 max-w-2xl text-[14px] text-gris-chaud border-l-2 border-miel pl-5">
            Une fonctionnalité spécifique à votre métier ? Une contrainte
            particulière ? On adapte. Le pack Signature peut intégrer presque
            tout, sur-mesure.
          </p>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
