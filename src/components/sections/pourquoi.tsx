import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";
import { pourquoi } from "@/content/home";

export function PourquoiSection() {
  return (
    <section className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow number="08">Pourquoi nous</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
                Pas une usine à sites. Un vrai accompagnement.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <blockquote className="font-serif text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.45] text-encre text-balance border-l-2 border-miel pl-6 md:pl-8">
                Pas un freelance qui disparaît après la livraison. Pas une
                agence qui vous noie sous le jargon. Hi-Ve, c'est une approche
                claire, humaine et visuelle :{" "}
                <em className="not-italic text-miel">
                  comprendre votre métier, valoriser votre image et faciliter le
                  passage à l'action de vos futurs clients.
                </em>
              </blockquote>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pourquoi.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="border-t-[0.5px] border-sable pt-6 group">
                <div className="flex items-center gap-2.5 mb-4">
                  <Hexagon
                    size={11}
                    filled
                    className="text-miel"
                  />
                  <span className="text-[11px] uppercase tracking-label text-gris-chaud tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-[22px] font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-gris-chaud">
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
