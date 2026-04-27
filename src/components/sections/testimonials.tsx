import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { Hexagon } from "@/components/ui/hexagon";
import { testimonials } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-ivoire overflow-hidden">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Témoignages</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-h2 mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] text-balance">
              Ce que nous disent nos premiers clients.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[14px] text-gris-chaud max-w-md">
              Avis recueillis auprès d'entreprises accompagnées par Hi-Ve.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-14">
        <Marquee speed="slow">
          {testimonials.map((t, i) => (
            <figure
              key={t.name + i}
              className="bg-white border-[0.5px] border-sable rounded-2xl p-7 max-w-md w-[88vw] md:w-[440px] shrink-0"
            >
              <Hexagon size={14} filled className="text-miel mb-4" />
              <blockquote className="font-serif text-[19px] md:text-[21px] leading-[1.4] text-encre">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t-[0.5px] border-sable">
                <p className="font-medium text-[14px] text-encre">{t.name}</p>
                <p className="text-[12.5px] text-gris-chaud">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
