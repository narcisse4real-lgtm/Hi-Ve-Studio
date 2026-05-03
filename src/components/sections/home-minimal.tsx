import { Check, Compass, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

const essentials = [
  {
    title: "Image",
    text: "Un design calme, crédible, aligné avec votre niveau.",
    icon: Compass,
  },
  {
    title: "Visibilité",
    text: "Une base propre pour Google, surtout en local.",
    icon: Search,
  },
  {
    title: "Contact",
    text: "Appel, devis ou rendez-vous visibles au bon moment.",
    icon: MessageCircle,
  },
];

const steps = [
  ["01", "Diagnostic", "On comprend votre activité."],
  ["02", "Création", "On pose la direction, les pages, les contenus."],
  ["03", "Mise en ligne", "On publie, on forme, vous gardez la main."],
];

const packs = [
  ["Essentiel", "1 990 €", "Une présence claire."],
  ["Vitrine Pro", "2 990 €", "Le bon niveau pour générer des demandes."],
  ["Signature", "4 500 €", "Une image plus éditoriale, plus premium."],
];

const proofItems = [
  "Un site qui inspire confiance.",
  "Un message compris en quelques secondes.",
  "Un contact évident sur mobile.",
  "Une image locale plus forte.",
  "Une vitrine qui travaille vraiment.",
];

export function MinimalApproachSection() {
  return (
    <section id="approche" className="bg-ivoire py-20 md:py-28">
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
              Hi-Ve crée des sites vitrines simples à comprendre, beaux à
              parcourir et prêts à convertir une visite en prise de contact.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[18px] border-[0.5px] border-sable bg-sable md:grid-cols-3">
          {essentials.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} as="article" className="bg-[#fffaf2] p-6 md:p-8">
                <div className="flex size-11 items-center justify-center rounded-full border-[0.5px] border-sable text-miel">
                  <Icon className="size-4" />
                </div>
                <h3 className="mt-8 font-serif text-3xl text-encre">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-gris-chaud">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MinimalProofMarquee() {
  return (
    <section className="overflow-hidden border-y-[0.5px] border-sable bg-creme py-6">
      <Marquee speed="normal" pauseOnHover={false} fade={false}>
        {proofItems.map((item) => (
          <div key={item} className="flex items-center gap-5 whitespace-nowrap">
            <span className="size-2 rounded-full bg-miel" aria-hidden="true" />
            <span className="font-serif text-[clamp(1.8rem,4vw,4rem)] leading-none text-encre/75">
              {item}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

export function MinimalMethodPricingSection() {
  return (
    <section id="methode" className="bg-ivoire py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Méthode & tarifs</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-5 text-[clamp(2rem,4.4vw,4rem)] leading-none tracking-[-0.03em] text-balance">
                Un cadre simple. Un devis clair.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[17px] leading-[1.65] text-gris-chaud">
                Vous savez ce qui est prévu, ce que ça coûte, et ce qui se passe
                après la mise en ligne.
              </p>
            </Reveal>
          </div>

          <div className="space-y-10">
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map(([number, title, text]) => (
                <Reveal key={number} as="article" className="border-t-[0.5px] border-sable pt-5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-gris-clair">
                    {number}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-encre">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.6] text-gris-chaud">{text}</p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="rounded-[18px] border-[0.5px] border-sable bg-creme p-4 md:p-5">
                <div className="grid gap-3 md:grid-cols-3">
                  {packs.map(([name, price, text]) => (
                    <div key={name} className="rounded-[14px] bg-ivoire p-5">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-gris-chaud">
                        {name}
                      </p>
                      <p className="mt-4 font-serif text-3xl text-encre">{price}</p>
                      <p className="mt-2 text-sm leading-[1.55] text-gris-chaud">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-4 border-t-[0.5px] border-sable pt-5 md:flex-row md:items-center md:justify-between">
                  <p className="max-w-xl text-sm leading-[1.6] text-gris-chaud">
                    Le référencement local avancé se travaille en accompagnement,
                    jamais en promesse magique.
                  </p>
                  <Button href="/tarifs" variant="secondary" size="sm">
                    Voir les tarifs
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
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
