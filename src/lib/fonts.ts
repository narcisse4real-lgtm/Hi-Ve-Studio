import {
  Cormorant_Garamond,
  Fraunces,
  Italiana,
  Tenor_Sans,
} from "next/font/google";
import { GeistSans } from "geist/font/sans";

// Sans default — Geist (taste-skill: Inter is banned for the "premium" vibe).
// The `geist` package self-hosts the font so it works regardless of next/font version.
export const sans = GeistSans;

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-tenor",
  display: "swap",
});

export const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});
