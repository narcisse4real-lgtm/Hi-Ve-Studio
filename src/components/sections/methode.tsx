import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Hexagon } from "@/components/ui/hexagon";
import { methode } from "@/content/home";

export function MethodeSection() {
  return (
    <section id="methode" className="relative py-24 md:py-36 bg-creme/50">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="06">Notre méthode</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
              Une méthode simple, sans jargon.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-gris-chaud max-w-2xl">
              Trois étapes pour passer d'une présence floue à une vitrine qui inspire confiance.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-24 relative">
          {/* Horizontal line desktop */}
          <div
            className="hidden md:block absolute left-0 right-0 top-7 h-px bg-sable"
            aria-hidden="true"
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {methode.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.12}>
                <article className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative bg-ivoire">
                      <Hexagon size={56} className="text-miel" />
                      <span className="absolute inset-0 flex items-center justify-center font-serif text-base font-medium text-miel tabular-nums">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                    Étape {step.step} · {step.duration}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl md:text-[34px] font-medium leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-gris-chaud max-w-md">
                    {step.body}
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
