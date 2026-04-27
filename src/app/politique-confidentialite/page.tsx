import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données de Hi-Ve.",
  alternates: { canonical: "/politique-confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container max-w-3xl">
          <p className="text-[11px] uppercase tracking-label text-gris-chaud">
            RGPD · Vos données
          </p>
          <h1 className="heading-display mt-5 text-[clamp(2rem,4.5vw,3rem)]">
            Politique de confidentialité
          </h1>
          <p className="mt-6 text-[15px] text-gris-chaud">
            Dernière mise à jour : avril 2026
          </p>

          <div className="mt-10 space-y-8 text-[15.5px] leading-[1.7] text-encre/85">
            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Données collectées
              </h2>
              <p>
                Nous collectons uniquement les données que vous nous transmettez
                volontairement via nos formulaires (audit, contact). Cela inclut
                votre nom, email, téléphone (optionnel), entreprise, secteur,
                ville et le message libre que vous nous adressez.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Finalité du traitement
              </h2>
              <p>
                Vos données ne sont utilisées que pour répondre à votre demande,
                vous adresser un diagnostic ou un devis, et le cas échéant
                échanger sur un projet. Aucune utilisation commerciale tierce.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Base légale
              </h2>
              <p>
                Le traitement repose sur votre consentement (case à cocher dans
                le formulaire) et sur l'exécution de mesures précontractuelles à
                votre demande.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Durée de conservation
              </h2>
              <p>
                Vos données sont conservées 24 mois à compter de notre dernier
                échange. Au-delà, elles sont supprimées sauf demande contraire.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de
                rectification, d'effacement, d'opposition, de limitation et de
                portabilité de vos données. Pour exercer ces droits, écrivez à
                contact@hi-ve.fr. Vous pouvez également introduire une
                réclamation auprès de la CNIL (cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Sous-traitants
              </h2>
              <p>
                Nous utilisons Resend (envoi d'emails transactionnels) et Vercel
                (hébergement). Ces sous-traitants présentent des garanties
                conformes au RGPD.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
