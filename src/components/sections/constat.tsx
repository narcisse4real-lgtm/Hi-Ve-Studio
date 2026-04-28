import { ArrowDownRight, EyeOff, MapPinOff, MessageSquareDashed } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Hexagon } from "@/components/ui/hexagon";
import { constatItems } from "@/content/home";

const icons = [MapPinOff, EyeOff, MessageSquareDashed];

/**
 * Constat — anti-3-equal-cards. First "symptom" pinned and 2x size, two
 * smaller cards stack on the right. Each card uses spotlight border (under-
 * cursor radial), not a glow.
 */
export function ConstatSection() {
  return (
    <section id="constat" className="relative py-24 md:py-36">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow number="01">Le constat</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
                Quand votre présence en ligne ne reflète plus votre niveau,
                vos clients le ressentent.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.65] text-gris-chaud">
                Aujourd'hui, vos futurs clients vous cherchent sur Google
                avant même de décrocher leur téléphone. Ce qu'ils trouvent —
                ou ne trouvent pas — façonne leur première impression.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Asymmetric layout: 7-col headline tile + 2x 5-col stacked tiles */}
        <div className="mt-16 md:mt-24 grid gap-5 md:grid-cols-12 md:auto-rows-[minmax(220px,auto)]">
          {/* Hero symptom — large left tile */}
          <Reveal className="md:col-span-7 md:row-span-2">
            <SpotlightCard className="h-full" tint="rgba(184,115,44,0.18)">
              <article className="relative h-full bg-white border-[0.5px] border-sable rounded-[2rem] p-9 md:p-12 flex flex-col justify-between transition-colors duration-300 group-hover:border-miel/60">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                    Symptôme 01 — Le plus fréquent
                  </span>
                  <MapPinOff
                    className="text-miel"
                    strokeWidth={1.5}
                    size={28}
                  />
                </div>

                <div>
                  <h3 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.05] tracking-tight">
                    {constatItems[0].title}.
                  </h3>
                  <p className="mt-5 max-w-md text-[16px] leading-[1.65] text-gris-chaud">
                    {constatItems[0].body}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[12px] text-encre/70">
                  <ArrowDownRight className="size-3.5 text-miel" strokeWidth={2} />
                  <span>
                    Résultat — un téléphone qui sonne moins.
                  </span>
                </div>
              </article>
            </SpotlightCard>
          </Reveal>

          {/* Stacked smaller tiles */}
          {constatItems.slice(1).map((item, idx) => {
            const Icon = icons[idx + 1];
            const number = String(idx + 2).padStart(2, "0");
            return (
              <Reveal
                key={item.title}
                delay={0.08 * (idx + 1)}
                className="md:col-span-5"
              >
                <SpotlightCard className="h-full" tint="rgba(184,115,44,0.14)">
                  <article className="relative h-full bg-white border-[0.5px] border-sable rounded-[2rem] p-7 md:p-8 flex flex-col justify-between transition-colors duration-300 group-hover:border-miel/60 min-h-[220px]">
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                        Symptôme {number}
                      </span>
                      <Icon
                        className="text-encre/70 group-hover:text-miel transition-colors"
                        strokeWidth={1.5}
                        size={22}
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-[28px] font-medium leading-tight tracking-tight">
                        {item.title}.
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.6] text-gris-chaud">
                        {item.body}
                      </p>
                    </div>
                  </article>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <div className="flex items-center gap-3 text-[13px] text-gris-chaud">
            <Hexagon size={9} filled className="text-miel" />
            Trois symptômes, une même cause :{" "}
            <em className="not-italic text-encre">
              une présence digitale qui n'est plus alignée avec votre niveau réel.
            </em>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
