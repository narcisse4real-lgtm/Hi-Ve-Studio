import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Hexagon } from "@/components/ui/hexagon";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-40 pb-24 min-h-[60vh] flex items-center">
        <div className="container max-w-2xl text-center">
          <div className="inline-flex items-center justify-center mb-8">
            <Hexagon size={64} className="text-miel" />
          </div>
          <p className="text-[11px] uppercase tracking-label text-gris-chaud">
            Erreur 404
          </p>
          <h1 className="heading-display mt-5 text-[clamp(2.25rem,5.5vw,3.5rem)]">
            Cette page semble introuvable.
          </h1>
          <p className="mt-5 text-lg leading-[1.6] text-gris-chaud">
            Le lien est peut-être ancien, ou la page a changé de nom. Revenez à
            l'accueil ou explorez le Showroom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/">Retour à l'accueil</Button>
            <Link
              href="/showroom"
              className="inline-flex items-center justify-center px-5 py-3 text-[14px] text-encre hover:text-miel transition-colors"
            >
              Explorer le Showroom →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
