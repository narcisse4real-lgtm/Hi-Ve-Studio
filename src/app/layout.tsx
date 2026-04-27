import type { Metadata } from "next";
import "./globals.css";
import { cormorant, fraunces, inter, italiana, tenorSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://hi-ve.fr"),
  title: {
    default: "Hi-Ve — Sites vitrines pour artisans, PME et professions libérales",
    template: "%s — Hi-Ve",
  },
  description:
    "Hi-Ve crée des sites vitrines modernes pour les entreprises locales qui veulent être visibles, crédibles et contactées. Pas un site qui existe. Un site qui travaille pour vous.",
  keywords: [
    "site vitrine",
    "agence web",
    "artisan",
    "PME",
    "profession libérale",
    "site internet",
    "création site",
    "Next.js",
  ],
  authors: [{ name: "Hi-Ve" }],
  creator: "Hi-Ve",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hi-ve.fr",
    siteName: "Hi-Ve",
    title: "Hi-Ve — Votre savoir-faire mérite une vitrine à sa hauteur.",
    description:
      "Sites vitrines modernes pour les entreprises locales. Visibles, crédibles, contactés.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi-Ve — Votre savoir-faire mérite une vitrine à sa hauteur.",
    description:
      "Sites vitrines modernes pour les entreprises locales. Visibles, crédibles, contactés.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={cn(
        inter.variable,
        fraunces.variable,
        cormorant.variable,
        tenorSans.variable,
        italiana.variable,
      )}
    >
      <body className="font-sans antialiased bg-ivoire text-encre">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
