import type { Metadata } from "next";
import { sans, tenorSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Cabinet Lyria — Ostéopathie (démo)",
  description:
    "Cabinet d'ostéopathie à Lyon. Démonstration Hi-Ve : prise de rendez-vous en ligne, présentation des praticiens, FAQ.",
};

export default function LyriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${tenorSans.variable} ${sans.variable}`}
      style={{ background: "#FFFFFF", color: "#1B2B3F" }}
    >
      {children}
    </div>
  );
}
