import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Star } from "lucide-react";
import { DemoBanner } from "@/components/demo/demo-banner";

const realisations = [
  {
    title: "Cuisine Côte-d'Or",
    category: "Cuisine",
    location: "Beaune",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bibliothèque Hôtel particulier",
    category: "Bibliothèque",
    location: "Dijon",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dressing chêne massif",
    category: "Dressing",
    location: "Mâcon",
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Escalier hélicoïdal",
    category: "Escalier",
    location: "Beaune",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cuisine îlot central",
    category: "Cuisine",
    location: "Chalon-sur-Saône",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bibliothèque sur-mesure",
    category: "Bibliothèque",
    location: "Beaune",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = ["Tout", "Cuisine", "Dressing", "Bibliothèque", "Escalier"];

const avis = [
  {
    name: "Catherine D.",
    location: "Beaune",
    text: "Une cuisine d'une finesse rare. Pierre a su comprendre nos contraintes et sublimer l'espace. Travail d'orfèvre.",
    project: "Cuisine sur-mesure, 2025",
  },
  {
    name: "Famille Lefranc",
    location: "Dijon",
    text: "La bibliothèque est devenue le cœur de notre maison. Trois mois après l'installation, c'est toujours notre pièce préférée.",
    project: "Bibliothèque, 2024",
  },
  {
    name: "Marc et Sophie B.",
    location: "Mâcon",
    text: "Deux dressings, un escalier. À chaque fois la même précision. On recommande sans réserve.",
    project: "Dressing + escalier, 2024",
  },
];

export default function AtelierMorelPage() {
  return (
    <>
      <DemoBanner
        bgColor="#EDE3D2"
        textColor="#2B1F14"
        borderColor="#D4C9B5"
        accent="#A8482C"
      />

      <div className="font-[family-name:var(--font-inter)]">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#F5F0E8]/85 backdrop-blur-md border-b border-[#2B1F14]/8">
          <div className="container flex items-center justify-between h-16">
            <Link
              href="#"
              className="font-[family-name:var(--font-cormorant)] italic text-2xl font-medium"
              style={{ color: "#2B1F14" }}
            >
              Atelier Morel
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-[13px]">
              <a href="#realisations" className="hover:opacity-70 transition-opacity">Réalisations</a>
              <a href="#savoir-faire" className="hover:opacity-70 transition-opacity">Savoir-faire</a>
              <a href="#avis" className="hover:opacity-70 transition-opacity">Avis</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
            </nav>
            <a
              href="#devis"
              className="inline-flex items-center gap-2 text-[13px] px-4 py-2.5 rounded-full text-white"
              style={{ background: "#A8482C" }}
            >
              Demander un devis
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="relative pt-16 md:pt-24 pb-20 md:pb-28 overflow-hidden">
          <div className="container grid gap-12 lg:grid-cols-12 items-end">
            <div className="lg:col-span-6">
              <p
                className="text-[11px] uppercase tracking-[0.22em]"
                style={{ color: "#A8482C" }}
              >
                Menuiserie sur-mesure · Bourgogne · Depuis 1962
              </p>
              <h1
                className="font-[family-name:var(--font-cormorant)] mt-6 text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight font-medium"
                style={{ color: "#2B1F14" }}
              >
                L'art du sur-mesure,
                <br />
                <em
                  className="not-italic font-normal italic"
                  style={{ color: "#A8482C" }}
                >
                  transmis de génération en génération.
                </em>
              </h1>
              <p
                className="mt-7 max-w-xl text-[17px] leading-[1.65]"
                style={{ color: "#5C4D3D" }}
              >
                Cuisines, dressings, bibliothèques, escaliers. Chaque pièce est
                pensée, dessinée et façonnée dans notre atelier de Beaune. Bois
                massif français, finitions huilées, livraison sous 8 à 12 semaines.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#devis"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-white font-medium text-[14px]"
                  style={{ background: "#A8482C" }}
                >
                  Demander un devis
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#realisations"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[#2B1F14] text-[14px]"
                >
                  Voir nos réalisations
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] relative rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80"
                  alt="Atelier de menuiserie, copeaux et bois massif"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 px-5 py-4 rounded-md"
                style={{ background: "#EDE3D2" }}
              >
                <div className="text-right">
                  <p
                    className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-none"
                    style={{ color: "#A8482C" }}
                  >
                    62
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] mt-1">
                    ans d'atelier
                  </p>
                </div>
                <div className="w-px h-10" style={{ background: "#2B1F14", opacity: 0.2 }} />
                <div>
                  <p
                    className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-none"
                    style={{ color: "#A8482C" }}
                  >
                    420
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.18em] mt-1">
                    pièces livrées
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section id="realisations" className="py-20 md:py-28" style={{ background: "#EDE3D2" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#A8482C" }}>
                  Réalisations
                </p>
                <h2
                  className="font-[family-name:var(--font-cormorant)] mt-4 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight"
                  style={{ color: "#2B1F14" }}
                >
                  Quelques pièces sorties<br />de l'atelier.
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className="px-4 py-2 text-[12px] rounded-full border border-[#2B1F14]/25 hover:bg-[#2B1F14] hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {realisations.map((r) => (
                <article
                  key={r.title}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-md mb-4">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "#A8482C" }}>
                        {r.category} · {r.location}
                      </p>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium mt-1">
                        {r.title}
                      </h3>
                    </div>
                    <ArrowRight className="size-4 mt-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Savoir-faire */}
        <section id="savoir-faire" className="py-20 md:py-28">
          <div className="container grid gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-md overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=900&q=80"
                  alt="Pierre Morel, menuisier ébéniste, dans son atelier"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#A8482C" }}>
                Le savoir-faire
              </p>
              <h2
                className="font-[family-name:var(--font-cormorant)] mt-5 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight"
                style={{ color: "#2B1F14" }}
              >
                Un bois choisi, une main qui le travaille.
              </h2>
              <p className="mt-6 text-[16.5px] leading-[1.7]" style={{ color: "#5C4D3D" }}>
                L'Atelier Morel a été fondé par Henri Morel en 1962. Aujourd'hui,
                Pierre Morel — son petit-fils — perpétue la tradition avec une
                équipe de quatre ébénistes formés au compagnonnage.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.7]" style={{ color: "#5C4D3D" }}>
                Chaque projet commence par une rencontre, une visite des lieux,
                un dessin. Nous travaillons les bois français — chêne, noyer,
                merisier, frêne — issus de forêts gérées durablement en Bourgogne
                et dans le Morvan.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#2B1F14]/15 pt-8">
                {[
                  { value: "100%", label: "Bois français" },
                  { value: "8-12", label: "semaines" },
                  { value: "10 ans", label: "garantie" },
                ].map((s) => (
                  <div key={s.label}>
                    <dt
                      className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium"
                      style={{ color: "#A8482C" }}
                    >
                      {s.value}
                    </dt>
                    <dd className="text-[11px] uppercase tracking-[0.18em] mt-1.5" style={{ color: "#5C4D3D" }}>
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Avis */}
        <section id="avis" className="py-20 md:py-28" style={{ background: "#EDE3D2" }}>
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#A8482C" }}>
              Ils nous ont fait confiance
            </p>
            <h2
              className="font-[family-name:var(--font-cormorant)] mt-5 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight"
              style={{ color: "#2B1F14" }}
            >
              Ce que disent les familles<br />qui vivent avec nos pièces.
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {avis.map((a) => (
                <article
                  key={a.name}
                  className="bg-[#F5F0E8] p-7 md:p-8 rounded-md border border-[#2B1F14]/8"
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" style={{ color: "#A8482C" }} />
                    ))}
                  </div>
                  <p
                    className="font-[family-name:var(--font-cormorant)] text-[19px] leading-[1.45]"
                    style={{ color: "#2B1F14" }}
                  >
                    « {a.text} »
                  </p>
                  <footer className="mt-6 pt-5 border-t border-[#2B1F14]/10 text-[13px]" style={{ color: "#5C4D3D" }}>
                    <p className="font-medium" style={{ color: "#2B1F14" }}>{a.name}</p>
                    <p>{a.location} · {a.project}</p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Devis */}
        <section id="devis" className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#A8482C" }}>
                  Demande de devis
                </p>
                <h2
                  className="font-[family-name:var(--font-cormorant)] mt-5 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-tight"
                  style={{ color: "#2B1F14" }}
                >
                  Parlons de votre projet.
                </h2>
                <p className="mt-6 text-[16.5px] leading-[1.7]" style={{ color: "#5C4D3D" }}>
                  Un projet en tête ? Quelques questions pour mieux comprendre, et
                  nous vous rappelons sous 48h pour fixer une visite gratuite.
                </p>

                <div className="mt-10 space-y-5 text-[14.5px]">
                  <div className="flex items-start gap-3">
                    <Phone className="size-4 mt-0.5" style={{ color: "#A8482C" }} />
                    <div>
                      <p className="font-medium">03 80 22 14 87</p>
                      <p style={{ color: "#5C4D3D" }}>Lun-Ven · 8h-18h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="size-4 mt-0.5" style={{ color: "#A8482C" }} />
                    <div>
                      <p className="font-medium">contact@ateliermorel.fr</p>
                      <p style={{ color: "#5C4D3D" }}>Réponse sous 48h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="size-4 mt-0.5" style={{ color: "#A8482C" }} />
                    <div>
                      <p className="font-medium">12 rue des Ormes — Beaune</p>
                      <p style={{ color: "#5C4D3D" }}>Visites sur RDV</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="lg:col-span-7 bg-white border border-[#2B1F14]/10 rounded-md p-7 md:p-10 space-y-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                      Type de projet *
                    </label>
                    <select
                      className="w-full bg-[#F5F0E8] border border-[#2B1F14]/15 rounded px-3.5 py-3 text-[14px]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Sélectionner…
                      </option>
                      <option>Cuisine</option>
                      <option>Dressing</option>
                      <option>Bibliothèque</option>
                      <option>Escalier</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                      Délai souhaité
                    </label>
                    <select
                      className="w-full bg-[#F5F0E8] border border-[#2B1F14]/15 rounded px-3.5 py-3 text-[14px]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Sélectionner…
                      </option>
                      <option>Sous 3 mois</option>
                      <option>3 à 6 mois</option>
                      <option>6 mois et plus</option>
                      <option>Pas pressé</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                    Budget estimé
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["< 5 000 €", "5–15 000 €", "15–30 000 €", "30 000 € +"].map((b) => (
                      <label
                        key={b}
                        className="flex items-center gap-2 border border-[#2B1F14]/15 rounded px-3 py-2.5 text-[13px] cursor-pointer hover:border-[#A8482C]"
                      >
                        <input type="radio" name="budget" className="accent-[#A8482C]" />
                        {b}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#F5F0E8] border border-[#2B1F14]/15 rounded px-3.5 py-3 text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-[#F5F0E8] border border-[#2B1F14]/15 rounded px-3.5 py-3 text-[14px]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full bg-[#F5F0E8] border border-[#2B1F14]/15 rounded px-3.5 py-3 text-[14px]"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2">
                      Décrivez votre projet
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Pièce concernée, dimensions approximatives, matières souhaitées, contraintes…"
                      className="w-full bg-[#F5F0E8] border border-[#2B1F14]/15 rounded px-3.5 py-3 text-[14px] resize-none"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full text-white font-medium text-[14px]"
                  style={{ background: "#A8482C" }}
                >
                  Envoyer ma demande
                  <ArrowRight className="size-4" />
                </button>
                <p className="text-center text-[12px]" style={{ color: "#5C4D3D" }}>
                  Réponse sous 48h. Visite gratuite et sans engagement.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-24" style={{ background: "#2B1F14", color: "#F5F0E8" }}>
          <div className="container grid gap-12 lg:grid-cols-3 items-start">
            <div>
              <p className="font-[family-name:var(--font-cormorant)] italic text-3xl font-medium">
                Atelier Morel
              </p>
              <p className="mt-4 text-[14px] opacity-70 max-w-xs">
                Menuiserie sur-mesure depuis 1962. Beaune et toute la Bourgogne.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] opacity-70 mb-4">
                L'atelier
              </p>
              <p className="text-[14.5px] leading-[1.7]">
                12 rue des Ormes<br />
                21200 Beaune
              </p>
              <p className="mt-3 text-[14.5px] opacity-80">Visites sur rendez-vous</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] opacity-70 mb-4">
                Contact
              </p>
              <p className="text-[14.5px]">03 80 22 14 87</p>
              <p className="text-[14.5px]">contact@ateliermorel.fr</p>
              <p className="mt-3 text-[12.5px] opacity-60">
                Zone d'intervention : Bourgogne, Jura, Saône-et-Loire
              </p>
            </div>
          </div>
          <div className="container mt-14 pt-6 border-t border-white/10 text-[12px] opacity-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <span>© 2026 Atelier Morel — Démonstration Hi-Ve</span>
            <Link href="/" className="hover:opacity-100 hover:underline underline-offset-4">
              Retour sur Hi-Ve →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
