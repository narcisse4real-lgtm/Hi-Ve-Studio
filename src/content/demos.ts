export interface DemoMeta {
  slug: "atelier-morel" | "cabinet-lyria" | "maison-aveline";
  label: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url: string;
  cover: string;
  palette: {
    bg: string;
    text: string;
    accent: string;
    surface: string;
  };
}

export const demos: DemoMeta[] = [
  {
    slug: "atelier-morel",
    label: "Artisan menuisier",
    name: "Atelier Morel",
    tagline:
      "Une vitrine chaleureuse qui met en avant le savoir-faire, les réalisations et déclenche des demandes de devis qualifiées.",
    description:
      "L'art du sur-mesure, transmis de génération en génération. Une menuiserie d'exception en plein cœur de la Bourgogne.",
    tags: ["Galerie réalisations", "Devis", "Avis"],
    url: "/demo/atelier-morel",
    cover:
      "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1200&q=80",
    palette: {
      bg: "#F5F0E8",
      text: "#2B1F14",
      accent: "#A8482C",
      surface: "#EDE3D2",
    },
  },
  {
    slug: "cabinet-lyria",
    label: "Profession libérale santé",
    name: "Cabinet Lyria",
    tagline:
      "Un site sobre et rassurant avec prise de rendez-vous en ligne intégrée. Pensé pour libérer du temps administratif.",
    description:
      "Une approche douce, à l'écoute de votre corps. Cabinet d'ostéopathie au cœur de Lyon.",
    tags: ["Prise de RDV", "Praticiens", "FAQ"],
    url: "/demo/cabinet-lyria",
    cover:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80",
    palette: {
      bg: "#FFFFFF",
      text: "#1B2B3F",
      accent: "#5C7A99",
      surface: "#F5F2EC",
    },
  },
  {
    slug: "maison-aveline",
    label: "Beauté & bien-être",
    name: "Maison Aveline",
    tagline:
      "Une vitrine éditoriale et sensorielle pour créer du désir, présenter les prestations et faciliter la réservation.",
    description:
      "Un instant pour vous, une signature pour la peau. L'institut beauté premium pensé comme une maison.",
    tags: ["Réservation", "Prestations", "Galerie"],
    url: "/demo/maison-aveline",
    cover:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    palette: {
      bg: "#F9F2EC",
      text: "#3A2A24",
      accent: "#C8956D",
      surface: "#F0E4DA",
    },
  },
];
