import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { Hexagon } from "@/components/ui/hexagon";
import { testimonials } from "@/content/home";

interface TestimonialsSectionProps {
  /** "compact" — used as a trust strip right after the hero. */
  variant?: "default" | "compact";
}

export function TestimonialsSection({
  variant = "default",
}: TestimonialsSectionProps = {}) {
  const compact = variant === "compact";

  return (
    <section
      className={`relative ${
        compact ? "studio-canvas py-14 md:py-20" : "py-24 md:py-32 bg-ivoire"
      } overflow-hidden`}
      aria-label="Témoignages clients"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow tone={compact ? "ivoire" : "default"}>Ils en parlent</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className={`heading-h2 mt-5 text-balance ${
                  compact
                    ? "text-[clamp(1.5rem,3vw,2.25rem)] text-ivoire"
                    : "text-[clamp(1.75rem,3.5vw,2.5rem)]"
                }`}
              >
                {compact ? (
                  <>
                    Ce que nous disent nos{" "}
                    <em className="not-italic text-miel-clair italic font-serif">
                      premiers clients.
                    </em>
                  </>
                ) : (
                  "Ce que nous disent nos premiers clients."
                )}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className={`text-[13.5px] max-w-md md:text-right ${compact ? "text-ivoire/52" : "text-gris-chaud"}`}>
              Avis recueillis auprès d'entreprises accompagnées par Hi-Ve.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className={compact ? "mt-10" : "mt-14"} amount={0.05}>
        <Marquee speed={compact ? "normal" : "slow"} pauseOnHover reverse>
          {testimonials.map((t, i) => (
            <figure
              key={t.name + i}
              className={`group border-[0.5px] rounded-lg p-5 md:p-6 max-w-md w-[85vw] md:w-[420px] shrink-0 transition-colors duration-300 hover:border-miel ${
                compact
                  ? "bg-studio-canvas border-ivoire/10"
                  : "bg-white border-sable"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <Hexagon
                  size={14}
                  filled
                  className="text-miel transition-transform duration-300 group-hover:rotate-30"
                />
                <span className={`text-[10px] uppercase tracking-label tabular-nums ${compact ? "text-ivoire/34" : "text-gris-clair"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote className={`font-serif text-[18px] md:text-[20px] leading-[1.25] ${compact ? "text-ivoire" : "text-encre"}`}>
                « {t.quote} »
              </blockquote>
              <figcaption className={`mt-6 pt-4 border-t-[0.5px] ${compact ? "border-ivoire/10" : "border-sable"}`}>
                <p className={`font-medium text-[14px] ${compact ? "text-ivoire" : "text-encre"}`}>{t.name}</p>
                <p className={`text-[12.5px] ${compact ? "text-ivoire/50" : "text-gris-chaud"}`}>{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
