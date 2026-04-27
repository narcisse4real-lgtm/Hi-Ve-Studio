import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
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

export function ShowroomSection() {
  return (
    <section id="showroom" className="relative py-24 md:py-36 bg-creme">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="03">Showroom Hi-Ve</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
              Trois métiers, trois vitrines, trois résultats.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-gris-chaud max-w-2xl">
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
                <article className="group h-full">
                  <Link href={demo.url} className="block h-full">
                    <div className="relative overflow-hidden rounded-2xl bg-ivoire border-[0.5px] border-sable transition-all duration-500 group-hover:-translate-y-1 group-hover:border-miel group-hover:shadow-[0_30px_60px_-30px_rgba(184,115,44,0.4)] h-full flex flex-col">
                      <div className="p-5">
                        <BrowserFrame url={`${demo.slug}.fr`}>
                          <Mockup />
                        </BrowserFrame>
                      </div>

                      <div className="p-7 pt-2 flex-1 flex flex-col">
                        <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                          {demo.label}
                        </p>
                        <h3 className="mt-2 font-serif text-3xl font-medium">
                          {demo.name}
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.6] text-gris-chaud flex-1">
                          {demo.tagline}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {demo.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2.5 py-1 border-[0.5px] border-sable rounded-full text-gris-chaud bg-creme/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-6 pt-5 border-t-[0.5px] border-sable flex items-center justify-between">
                          <span className="text-[14px] font-medium text-encre group-hover:text-miel transition-colors">
                            Voir la démo
                          </span>
                          <ArrowUpRight className="size-4 text-miel transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
