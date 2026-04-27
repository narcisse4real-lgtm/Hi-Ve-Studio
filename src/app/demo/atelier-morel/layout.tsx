import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Atelier Morel — Menuiserie sur-mesure (démo)",
  description:
    "Atelier de menuiserie sur-mesure en Bourgogne. Démonstration Hi-Ve : galerie de réalisations, parcours de devis, savoir-faire artisanal.",
};

export default function AtelierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} ${inter.variable}`}
      style={{ background: "#F5F0E8", color: "#2B1F14" }}
    >
      {children}
    </div>
  );
}
