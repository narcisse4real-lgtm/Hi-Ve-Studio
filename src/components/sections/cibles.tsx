import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { cibles } from "@/content/home";

export function CiblesSection() {
  return (
    <section id="cibles" className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Notre cible</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
              Pensé pour les entreprises qui vivent de leur réputation locale.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-gris-chaud max-w-2xl">
              Si votre activité dépend de la confiance, du bouche-à-oreille et
              de la visibilité dans votre secteur, Hi-Ve est fait pour vous.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid gap-px bg-sable rounded-3xl overflow-hidden border-[0.5px] border-sable">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sable">
            {cibles.map((cible, i) => {
              const Icon = cible.icon;
              return (
                <Reveal key={cible.title} delay={(i % 3) * 0.05}>
                  <article className="bg-ivoire p-7 md:p-9 h-full group relative">
                    <div className="flex items-center justify-center size-11 rounded-full bg-creme group-hover:bg-miel transition-colors duration-300">
                      <Icon
                        className="size-5 text-encre group-hover:text-ivoire transition-colors"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-medium">
                      {cible.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-gris-chaud">
                      {cible.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
