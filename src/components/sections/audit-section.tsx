import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { AuditForm } from "./audit-form";

export function AuditSection() {
  return (
    <section
      id="audit-gratuit"
      className="relative py-24 md:py-36 bg-creme"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Audit gratuit</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
                Votre site vous aide-t-il vraiment à obtenir des clients ?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-[1.65] text-gris-chaud">
                Envoyez-nous le lien de votre site actuel, votre fiche Google ou
                simplement le nom de votre entreprise. On vous répond sous 48h
                avec un diagnostic clair :{" "}
                <span className="text-encre">
                  image, visibilité, points bloquants et pistes d'amélioration concrètes.
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[14px] leading-[1.6] text-gris-chaud border-l-2 border-miel pl-5">
                Sans engagement. Sans relance commerciale agressive. Juste un
                regard professionnel sur votre présence en ligne.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <AuditForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
