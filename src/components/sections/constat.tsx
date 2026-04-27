import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";
import { constatItems } from "@/content/home";

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
                Quand votre présence en ligne ne reflète plus votre niveau, vos clients le ressentent.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-[1.65] text-gris-chaud">
                Aujourd'hui, vos futurs clients vous cherchent sur Google avant
                même de décrocher leur téléphone. Ce qu'ils trouvent — ou ne
                trouvent pas — façonne leur première impression.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid gap-5 md:grid-cols-3">
          {constatItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group relative h-full bg-white border-[0.5px] border-sable rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-miel hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(184,115,44,0.4)]">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                    Symptôme {String(i + 1).padStart(2, "0")}
                  </span>
                  <Hexagon
                    size={14}
                    className="text-sable group-hover:text-miel transition-colors"
                  />
                </div>
                <h3 className="font-serif text-2xl md:text-[26px] font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.65] text-gris-chaud">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
