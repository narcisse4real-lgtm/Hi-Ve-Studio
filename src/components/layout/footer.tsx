import Link from "next/link";
import { Hexagon } from "@/components/ui/hexagon";
import { siteConfig } from "@/content/site";
import { demos } from "@/content/demos";

export function Footer() {
  return (
    <footer className="bg-encre text-ivoire">
      <div className="container py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Hexagon filled size={20} className="text-miel" />
              <span className="font-serif text-3xl font-medium">Hi-Ve</span>
            </Link>
            <p className="mt-6 max-w-md font-serif text-2xl md:text-[28px] leading-[1.2] text-balance text-ivoire/90">
              Des sites vitrines modernes pour être vu, compris et contacté.
            </p>
            <p className="mt-8 text-sm text-ivoire/60 max-w-sm">
              Hi-Ve est une agence indépendante basée en France. Nous accompagnons les artisans, PME et professions libérales partout en France.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[11px] uppercase tracking-label text-ivoire/50 font-medium">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivoire/85 hover:text-miel-clair transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/audit-gratuit"
                  className="text-ivoire/85 hover:text-miel-clair transition-colors"
                >
                  Audit gratuit
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-label text-ivoire/50 font-medium">
              Showroom
            </h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              {demos.map((demo) => (
                <li key={demo.slug}>
                  <Link
                    href={demo.url}
                    className="text-ivoire/85 hover:text-miel-clair transition-colors"
                  >
                    {demo.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-label text-ivoire/50 font-medium">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ivoire/85 hover:text-miel-clair transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  className="text-ivoire/85 hover:text-miel-clair transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  className="text-ivoire/85 hover:text-miel-clair transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t-[0.5px] border-ivoire/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-ivoire/55">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="hover:text-ivoire transition-colors">
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-ivoire transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
          <p>© 2026 Hi-Ve. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
