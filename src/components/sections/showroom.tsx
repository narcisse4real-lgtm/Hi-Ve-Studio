import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { TiltCard } from "@/components/ui/tilt-card";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { AtelierMockup } from "@/components/mockups/atelier-mockup";
import { LyriaMockup } from "@/components/mockups/lyria-mockup";
import { AvelineMockup } from "@/components/mockups/aveline-mockup";
import { demos } from "@/content/demos";

const mockups = {
  "atelier-morel": AtelierMockup,
  "cabinet-lyria": LyriaMockup,
  "maison-aveline": AvelineMockup,
};

const accents = ["bg-morel-accent", "bg-lyria-accent", "bg-aveline-accent"];

export function ShowroomSection() {
  return (
    <section id="showroom" className="studio-canvas relative py-24 md:py-36">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="03" tone="ivoire">
              Showroom Hi-Ve
            </Eyebrow>
          </Reveal>
          <SplitText
            as="h2"
            className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-ivoire text-balance"
            stagger={0.05}
            duration={0.85}
          >
            Trois métiers, trois vitrines, trois résultats.
          </SplitText>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-ivoire/64 max-w-2xl">
              Trois projets de démonstration, conçus comme de vrais sites
              clients. Vous pouvez naviguer librement et imaginer ce que pourrait
              donner votre activité.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo, i) => {
            const Mockup = mockups[demo.slug];
            return (
              <Reveal key={demo.slug} delay={i * 0.1}>
                <TiltCard className="group h-full" max={5}>
                <article className="h-full">
                  <Link href={demo.url} className="block h-full">
                    <div className="relative overflow-hidden rounded-lg bg-studio-canvas border-[0.5px] border-ivoire/10 transition-colors duration-500 group-hover:border-miel/70 h-full flex flex-col">
                      <div className={`h-1.5 ${accents[i] ?? "bg-miel"}`} />
                      <div className="p-3 md:p-4">
                        <BrowserFrame url={`${demo.slug}.fr`} tone="dark" className="rounded-lg">
                          <Mockup />
                        </BrowserFrame>
                      </div>

                      <div className="p-5 md:p-6 pt-2 flex-1 flex flex-col">
                        <p className="text-[11px] uppercase tracking-label text-ivoire/48">
                          {demo.label}
                        </p>
                        <h3 className="mt-2 font-serif text-3xl font-medium text-ivoire">
                          {demo.name}
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.6] text-ivoire/62 flex-1">
                          {demo.tagline}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {demo.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2.5 py-1 border-[0.5px] border-ivoire/12 rounded-full text-ivoire/56 bg-ivoire/[0.035]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 pt-5 border-t-[0.5px] border-ivoire/10 flex items-center justify-between">
                          <span className="text-[14px] font-medium text-ivoire group-hover:text-miel-clair transition-colors">
                            Voir la démo
                          </span>
                          <ArrowUpRight className="size-4 text-miel transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
