import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SplitText } from "@/components/ui/split-text";
import { Hexagon } from "@/components/ui/hexagon";
import { piliers } from "@/content/home";

export function SolutionSection() {
  return (
    <section id="solution" className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="02">Notre approche</Eyebrow>
          </Reveal>
          <SplitText
            as="h2"
            className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance"
            stagger={0.05}
            duration={0.85}
            highlight={[5, 6, 7, 8]}
            highlightClass="italic text-miel font-serif"
          >
            Une vitrine digitale qui donne envie de vous choisir.
          </SplitText>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-gris-chaud max-w-2xl">
              Chez Hi-Ve, un site n'est pas une carte de visite. C'est un outil
              commercial pensé pour transformer un visiteur en demande concrète.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid gap-px bg-sable rounded-3xl overflow-hidden border-[0.5px] border-sable">
          <div className="grid md:grid-cols-2 gap-px bg-sable">
            {piliers.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <article className="bg-ivoire p-8 md:p-10 h-full group">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Hexagon size={32} className="text-miel" />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-miel tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-[11px] uppercase tracking-label text-gris-chaud">
                      Pilier {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl md:text-[32px] font-medium leading-tight">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.65] text-gris-chaud max-w-md">
                    {pillar.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
