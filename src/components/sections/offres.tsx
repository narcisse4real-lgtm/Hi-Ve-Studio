import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Hexagon } from "@/components/ui/hexagon";
import { abonnements, packs } from "@/content/home";
import { cn } from "@/lib/utils";

export function OffresSection() {
  return (
    <section id="tarifs" className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="07">Nos offres</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
              Un pack adapté à votre besoin, pas une solution unique.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-gris-chaud max-w-2xl">
              Trois formules pensées selon votre activité, votre budget et votre ambition.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-3">
          {packs.map((pack, i) => (
            <Reveal key={pack.name} delay={i * 0.08}>
              <article
                className={cn(
                  "relative bg-white border-[0.5px] rounded-2xl p-7 md:p-8 h-full flex flex-col transition-all duration-300",
                  pack.featured
                    ? "border-miel border-2 shadow-[0_30px_60px_-30px_rgba(184,115,44,0.3)] md:-translate-y-3"
                    : "border-sable hover:border-miel hover:-translate-y-1",
                )}
              >
                {pack.featured && pack.badge ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-miel text-ivoire text-[10px] uppercase tracking-label px-3 py-1.5 rounded-full whitespace-nowrap inline-flex items-center gap-1.5">
                    <Hexagon size={9} filled className="text-miel-clair" />
                    {pack.badge}
                  </div>
                ) : null}

                <div>
                  <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                    Pack {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl md:text-[34px] font-medium leading-tight">
                    {pack.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-gris-chaud leading-[1.55] min-h-[3.5rem]">
                    {pack.tagline}
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-[12px] text-gris-chaud">
                    {pack.pricePrefix}
                  </span>
                  <span className="font-serif text-4xl md:text-[42px] font-medium text-encre tabular-nums">
                    {pack.price}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-[14.5px] flex-1">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="size-4 mt-0.5 text-miel shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-encre/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t-[0.5px] border-sable">
                  <Button
                    href="/audit-gratuit"
                    variant={pack.featured ? "primary" : "secondary"}
                    className="w-full justify-center"
                  >
                    {pack.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 max-w-3xl text-[14.5px] leading-[1.6] text-gris-chaud border-l-2 border-miel pl-5">
            Les projets démarrent à partir de 1 990 €. Le prix final dépend du
            nombre de pages, des fonctionnalités et du niveau de personnalisation.
            Nous établissons un devis clair après le diagnostic, sans engagement.
          </p>
        </Reveal>

        {/* Subscriptions */}
        <div className="mt-28 md:mt-36 pt-16 md:pt-20 border-t-[0.5px] border-sable">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-4xl">
            <div>
              <Reveal>
                <Eyebrow>Abonnements</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="heading-h2 mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)]">
                  Et après la mise en ligne ?
                </h3>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-[1.6] text-gris-chaud max-w-md">
                Trois niveaux d'accompagnement pour faire vivre votre site dans la durée.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {abonnements.map((abo, i) => (
              <Reveal key={abo.name} delay={i * 0.08}>
                <article
                  className={cn(
                    "relative bg-creme/30 border-[0.5px] rounded-xl p-6 md:p-7 h-full flex flex-col transition-all duration-300",
                    abo.featured
                      ? "border-encre"
                      : "border-sable hover:border-encre",
                  )}
                >
                  {abo.featured && abo.badge ? (
                    <span className="absolute -top-2.5 left-6 bg-encre text-ivoire text-[10px] uppercase tracking-label px-2.5 py-1 rounded-full">
                      {abo.badge}
                    </span>
                  ) : null}

                  <h4 className="font-serif text-2xl font-medium">{abo.name}</h4>
                  <p className="mt-1 text-[13px] text-gris-chaud">
                    {abo.tagline}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="font-serif text-3xl font-medium tabular-nums">
                      {abo.price}
                    </span>
                    <span className="text-[13px] text-gris-chaud">
                      {abo.interval}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2 text-[13.5px] flex-1">
                    {abo.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className="size-3.5 mt-0.5 text-sauge shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-encre/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
