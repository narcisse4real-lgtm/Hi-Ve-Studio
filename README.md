# Hi-Ve — Site vitrine + Showroom

> Votre savoir-faire mérite une vitrine à sa hauteur.

Site officiel de **Hi-Ve**, agence française qui crée des sites vitrines modernes pour artisans, PME et professions libérales. Ce dépôt contient le site Hi-Ve **et** trois démos complètes (Atelier Morel, Cabinet Lyria, Maison Aveline).

---

## Stack

- **Framework** — Next.js 14 (App Router) + TypeScript strict
- **Styling** — Tailwind CSS 3.4 avec palette personnalisée
- **Animations** — Framer Motion + Lenis (smooth scroll)
- **UI** — Composants maison + primitives Radix (Accordion, Select)
- **Icônes** — Lucide React
- **Formulaires** — React Hook Form + Zod
- **Email** — Resend (transactionnel, optionnel)
- **Hébergement** — Vercel
- **Polices** — Fraunces, Inter, Cormorant Garamond, Tenor Sans, Italiana (via `next/font`)

---

## Structure

```
src/
├── app/
│   ├── (marketing)/         — pages principales Hi-Ve
│   │   page.tsx              homepage (12 sections)
│   │   showroom/             /showroom
│   │   methode/              /methode
│   │   tarifs/               /tarifs
│   │   audit-gratuit/        /audit-gratuit
│   │   mentions-legales/     /mentions-legales
│   │   politique-confidentialite/
│   ├── demo/
│   │   atelier-morel/        — démo menuiserie sur-mesure
│   │   cabinet-lyria/        — démo ostéopathie
│   │   maison-aveline/       — démo institut beauté
│   ├── api/audit/            — endpoint Resend pour le formulaire
│   ├── sitemap.ts            — sitemap.xml généré
│   └── robots.ts             — robots.txt généré
├── components/
│   ├── ui/                   — primitives (Button, Hexagon, Marquee, Reveal, …)
│   ├── sections/             — sections de la homepage
│   ├── mockups/              — mockups stylisés des 3 démos
│   ├── layout/               — Header, Footer, MobileCTA
│   ├── providers/            — SmoothScrollProvider (Lenis)
│   └── demo/                 — DemoBanner partagé
├── content/                  — contenus typés (FAQ, packs, démos, témoignages)
└── lib/
    ├── fonts.ts              — chargement next/font
    └── utils.ts              — cn(clsx + tailwind-merge)
```

---

## Setup local

```bash
# 1. Installer les dépendances
npm install

# 2. Variables d'environnement (optionnel pour Resend)
cp .env.example .env.local

# 3. Lancer en dev
npm run dev    # → http://localhost:3000

# 4. Build production
npm run build
npm run start

# 5. Linter / Type check
npm run lint
npm run typecheck
```

---

## Variables d'environnement

Copiez `.env.example` vers `.env.local` puis renseignez :

| Variable | Rôle | Requis |
|---|---|---|
| `RESEND_API_KEY` | Clé API Resend pour envoyer les emails du formulaire d'audit. | Optionnel — sans elle le formulaire répond OK mais aucun email n'est envoyé (les soumissions sont loguées en console). |
| `AUDIT_TO_EMAIL` | Email qui reçoit les demandes d'audit. | Optionnel — défaut `contact@hi-ve.fr`. |
| `AUDIT_FROM_EMAIL` | Expéditeur (doit être validé sur Resend). | Optionnel — défaut `Hi-Ve <audit@hi-ve.fr>`. |

---

## Direction artistique

**Palette Hi-Ve** (variables Tailwind dans `tailwind.config.ts`) :

| Token | Hex | Usage |
|---|---|---|
| `ivoire` | `#F8F4ED` | Fond principal |
| `creme` | `#F1EBDF` | Surfaces secondaires |
| `sable` | `#E2D8C6` | Bordures hairline |
| `miel` | `#B8732C` | Accent principal, CTA |
| `miel-clair` | `#D4954A` | Hover du miel |
| `sauge` | `#7A8B6F` | Accent secondaire, succès |
| `encre` | `#1A1814` | Texte principal |
| `gris-chaud` | `#6B645A` | Texte secondaire |
| `gris-clair` | `#9B9389` | Texte tertiaire |

**Démos** — chaque démo possède sa propre palette dans `tailwind.config.ts` (préfixes `morel`, `lyria`, `aveline`). Les pages de démos sont indépendantes et n'utilisent aucun composant Hi-Ve à l'écran (sauf le bandeau dismissable en haut).

---

## SEO

- **`metadata`** par page (Next.js Metadata API)
- **Open Graph & Twitter Card** définis dans `app/layout.tsx`
- **JSON-LD `LocalBusiness`** injecté sur la homepage
- **`sitemap.xml`** et **`robots.txt`** générés automatiquement
- URLs en français, propres et stables

---

## Accessibilité

- Contraste WCAG AA respecté sur tout le site
- Focus visible (`outline 2px miel`)
- Navigation clavier complète
- `aria-label` sur les éléments interactifs sans texte
- Animations désactivées via `prefers-reduced-motion`
- Slider avant/après pilotable au clavier (flèches gauche/droite)

---

## Performance

- Polices via `next/font` (display: swap, self-hosted)
- Images via `next/image` (WebP/AVIF auto, sizes appropriés)
- Lazy loading natif Next.js sur les images sous le pli
- Marquees CSS pure (transform + animation), pas de RAF JS
- Animations gérées via Framer Motion `whileInView` (déclenchement viewport)

---

## Déploiement

```bash
# Push vers Vercel — config zéro requise
vercel
```

Le projet est prêt pour Vercel : `next.config.mjs` standard, build statique partout sauf `/api/audit` (route handler), et toutes les pages sont prerendered.

---

## Licence

© 2026 Hi-Ve. Code propriétaire. Les photos utilisées dans les démos proviennent d'Unsplash et de Pexels (libres de droits).
