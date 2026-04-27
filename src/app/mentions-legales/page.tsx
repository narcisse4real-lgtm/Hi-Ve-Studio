import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Hi-Ve.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36 pb-24">
        <article className="container max-w-3xl prose-style">
          <p className="text-[11px] uppercase tracking-label text-gris-chaud">
            Informations légales
          </p>
          <h1 className="heading-display mt-5 text-[clamp(2rem,4.5vw,3rem)]">
            Mentions légales
          </h1>

          <div className="mt-10 space-y-8 text-[15.5px] leading-[1.7] text-encre/85">
            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Éditeur du site
              </h2>
              <p>
                Le site hi-ve.fr est édité par Hi-Ve, agence indépendante de
                création de sites vitrines.<br />
                Email : contact@hi-ve.fr<br />
                Directeur de la publication : représentant légal de Hi-Ve.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Hébergement
              </h2>
              <p>
                Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, États-Unis. vercel.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L'ensemble des contenus du site (textes, mises en page, identité
                visuelle, code) est la propriété exclusive de Hi-Ve, sauf
                mention contraire. Toute reproduction, intégrale ou partielle,
                sans autorisation préalable écrite est interdite.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Données personnelles
              </h2>
              <p>
                Les informations recueillies via les formulaires sont
                strictement utilisées pour répondre à votre demande. Elles ne
                sont jamais cédées à des tiers. Pour exercer vos droits
                (accès, rectification, suppression), écrivez à contact@hi-ve.fr.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Cookies
              </h2>
              <p>
                Le site utilise uniquement les cookies strictement nécessaires
                à son fonctionnement. Aucun cookie tiers de mesure ou de
                publicité n'est déposé sans votre consentement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-encre font-medium mb-3">
                Crédits photographiques
              </h2>
              <p>
                Les photographies utilisées dans les démonstrations Hi-Ve
                proviennent de banques d'images libres de droits (Unsplash,
                Pexels) et illustrent des projets fictifs.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
