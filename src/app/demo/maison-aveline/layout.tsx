import type { Metadata } from "next";
import { sans, italiana } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Maison Aveline — Institut beauté & bien-être (démo)",
  description:
    "Institut de beauté et bien-être premium. Démonstration Hi-Ve : prestations, réservation en ligne, univers éditorial.",
};

export default function AvelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${italiana.variable} ${sans.variable}`}
      style={{ background: "#F9F2EC", color: "#3A2A24" }}
    >
      {children}
    </div>
  );
}
