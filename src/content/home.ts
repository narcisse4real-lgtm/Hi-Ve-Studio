import {
  Briefcase,
  Coffee,
  Hammer,
  Scissors,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const constatItems = [
  {
    title: "Pas de site",
    body: "Vous êtes difficile à trouver, même quand quelqu'un cherche exactement votre métier dans votre ville.",
  },
  {
    title: "Site daté",
    body: "Votre image en ligne ne reflète plus la qualité de votre travail. Vos clients hésitent avant de vous contacter.",
  },
  {
    title: "Contact compliqué",
    body: "Pas de bouton d'appel visible, pas de RDV en ligne, pas de formulaire clair. Le visiteur abandonne et appelle un concurrent plus accessible.",
  },
];

export const piliers = [
  {
    title: "Image premium",
    body: "Un design moderne qui valorise votre métier et inspire confiance dès la première seconde.",
  },
  {
    title: "Visibilité locale",
    body: "Une structure pensée pour Google : balises, vitesse, mobile, fiche contact cohérente.",
  },
  {
    title: "Conversion",
    body: "Boutons d'appel, formulaire, prise de RDV ou devis — votre visiteur sait toujours quoi faire ensuite.",
  },
  {
    title: "Simplicité",
    body: "Un site facile à utiliser, à mettre à jour, sans usine à gaz.",
  },
];

export const cibles = [
  {
    icon: Hammer,
    title: "Artisans",
    body: "Menuisiers, électriciens, plombiers, paysagistes, peintres, décorateurs.",
  },
  {
    icon: Stethoscope,
    title: "Professions libérales",
    body: "Avocats, ostéopathes, kinés, thérapeutes, architectes, experts-comptables.",
  },
  {
    icon: Briefcase,
    title: "PME locales",
    body: "Entreprises de services, agences, sociétés B2B, commerces établis.",
  },
  {
    icon: Sparkles,
    title: "Beauté & bien-être",
    body: "Instituts, salons, coachs, studios, praticiens.",
  },
  {
    icon: Coffee,
    title: "Restaurants & lieux",
    body: "Restaurants, cafés, concepts food, lieux événementiels.",
  },
  {
    icon: Scissors,
    title: "Commerces & services",
    body: "Boutiques, ateliers, services à domicile, prestataires locaux.",
  },
];

export const methode = [
  {
    step: "01",
    title: "Diagnostic",
    duration: "1 à 2 jours",
    body: "On analyse votre activité, vos concurrents locaux et vos objectifs. On comprend votre métier avant de parler design.",
  },
  {
    step: "02",
    title: "Création",
    duration: "2 à 4 semaines",
    body: "On construit la direction visuelle, la structure des pages et les contenus. Vous validez à chaque étape, jamais de surprise.",
  },
  {
    step: "03",
    title: "Mise en ligne",
    duration: "1 jour + accompagnement",
    body: "On publie le site, on configure votre hébergement et votre nom de domaine, on vous forme à l'utiliser. Vous restez autonome.",
  },
];

export const packs = [
  {
    name: "Essentiel",
    price: "1 990 €",
    pricePrefix: "À partir de",
    tagline: "Pour poser une présence professionnelle propre.",
    featured: false,
    cta: "Demander un devis",
    features: [
      "3 à 4 pages essentielles",
      "Design responsive",
      "Formulaire de contact",
      "Référencement de base",
      "Hébergement et nom de domaine inclus la première année",
      "Mise en ligne et formation",
    ],
  },
  {
    name: "Vitrine Pro",
    price: "2 990 €",
    pricePrefix: "À partir de",
    tagline:
      "Pour présenter sérieusement vos services et générer plus de demandes.",
    featured: true,
    badge: "Le plus choisi",
    cta: "Demander un devis",
    features: [
      "5 à 7 pages structurées",
      "Galerie de réalisations",
      "Avis clients intégrés",
      "Pages services détaillées",
      "Formulaire avancé ou prise de RDV",
      "Google Maps et optimisation locale",
      "Tout l'Essentiel inclus",
    ],
  },
  {
    name: "Signature",
    price: "4 500 €",
    pricePrefix: "À partir de",
    tagline:
      "Pour une image premium, différenciante et alignée avec un positionnement haut de gamme.",
    featured: false,
    cta: "Discuter de mon projet",
    features: [
      "Direction artistique poussée",
      "Création visuelle sur-mesure",
      "Animations et parcours soignés",
      "Storytelling et copywriting dédié",
      "Fonctionnalités avancées selon métier",
      "Accompagnement renforcé",
    ],
  },
];

export const abonnements = [
  {
    name: "Sérénité",
    price: "39 €",
    interval: "/mois",
    tagline: "Maintenance technique.",
    featured: false,
    features: [
      "Hébergement + nom de domaine",
      "Mises à jour de sécurité",
      "Sauvegardes hebdomadaires",
      "Support email sous 48h",
      "1h de modifications par an",
    ],
  },
  {
    name: "Croissance",
    price: "129 €",
    interval: "/mois",
    tagline: "Maintenance + évolutions.",
    featured: true,
    badge: "Recommandé",
    features: [
      "Tout Sérénité",
      "2h de modifications par mois",
      "Suivi de la fiche Google Business",
      "Support sous 24h",
      "Rapport trimestriel de visibilité",
    ],
  },
  {
    name: "Performance",
    price: "299 €",
    interval: "/mois",
    tagline: "Accompagnement complet.",
    featured: false,
    features: [
      "Tout Croissance",
      "5h par mois",
      "Optimisation SEO local active",
      "Création de visuels",
      "Suivi des conversions",
      "Point mensuel de 30 minutes",
    ],
  },
];

export const pourquoi = [
  {
    title: "Approche humaine",
    body: "Un interlocuteur dédié, pas un ticket de support.",
  },
  {
    title: "Discours clair",
    body: "Zéro jargon. On vous explique tout, étape par étape.",
  },
  {
    title: "Vision business",
    body: "Un site n'est pas une fin en soi. C'est un outil pour votre activité.",
  },
  {
    title: "Accompagnement durable",
    body: "Disponible après la mise en ligne, pour les ajustements et les questions.",
  },
];

export const faqs = [
  {
    q: "Combien de temps pour créer mon site ?",
    a: "Entre 2 et 6 semaines selon le pack choisi et votre disponibilité pour valider les étapes. Le plus long, c'est souvent la collecte des contenus — photos, textes, informations métier. On vous accompagne sur cette partie.",
  },
  {
    q: "Pourrai-je modifier mon site moi-même ?",
    a: "Oui. Vos pages courantes (horaires, tarifs, équipe, actualités) sont éditables sans connaissance technique. Pour les modifications structurelles, on reste à votre disposition.",
  },
  {
    q: "L'hébergement et le nom de domaine sont-ils inclus ?",
    a: "Oui, la première année. Ensuite, environ 100 à 150 € par an selon votre configuration. Aucune surprise, tout est précisé dans le devis.",
  },
  {
    q: "Mon site sera-t-il bien référencé sur Google ?",
    a: "Votre site est construit sur des bases saines pour être compris par Google : structure claire, balises essentielles, vitesse, mobile, fiche contact cohérente. Le référencement local approfondi peut faire l'objet d'un accompagnement complémentaire.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "On vous forme à utiliser votre site, on reste joignable pour les questions et les petits ajustements. Pour des évolutions importantes, on établit un devis adapté.",
  },
  {
    q: "Et si je n'aime pas le design proposé ?",
    a: "On travaille par étapes validées : direction artistique d'abord, maquettes ensuite. Vous ne découvrez jamais le résultat final sans avoir donné votre accord en amont. Plusieurs allers-retours sont prévus.",
  },
];

export const testimonials = [
  {
    quote:
      "Le site reflète enfin la qualité de notre travail. On reçoit des demandes plus précises et des clients déjà convaincus avant le premier appel.",
    name: "Claire M.",
    role: "Architecte d'intérieur, Bordeaux",
  },
  {
    quote:
      "Hi-Ve a écouté avant de proposer. Le résultat est sobre, élégant, et nos patients prennent rendez-vous en ligne sans nous appeler.",
    name: "Dr. Lucas D.",
    role: "Ostéopathe, Annecy",
  },
  {
    quote:
      "Trois semaines après la mise en ligne, deux nouveaux chantiers signés. Le site fait son travail.",
    name: "Pierre L.",
    role: "Menuisier, Beaune",
  },
  {
    quote:
      "Pour la première fois, je n'ai pas eu honte d'envoyer le lien de mon site à un prospect. Au contraire, ça nous différencie.",
    name: "Émilie R.",
    role: "Avocate, Toulouse",
  },
  {
    quote:
      "Un accompagnement humain, du début à la fin. Et un site qu'on continue à faire évoluer ensemble.",
    name: "Sophie B.",
    role: "Institut beauté, Aix-en-Provence",
  },
  {
    quote:
      "Je voulais un site qui ressemble à mes plats : soigné et lisible. C'est exactement ce que Hi-Ve a livré.",
    name: "Maxime T.",
    role: "Restaurateur, Lyon",
  },
];
