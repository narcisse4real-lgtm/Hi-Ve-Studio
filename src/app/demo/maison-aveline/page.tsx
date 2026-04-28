"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { DemoBanner } from "@/components/demo/demo-banner";
import { Counter } from "@/components/ui/counter";
import { Parallax } from "@/components/ui/parallax";

const prestations = {
  Visage: [
    {
      name: "Soin signature Aveline",
      duration: "1h30",
      price: "120 €",
      description:
        "Notre rituel emblématique. Démaquillage, gommage enzymatique, masque sur-mesure et modelage Kobido.",
    },
    {
      name: "Soin éclat express",
      duration: "45 min",
      price: "75 €",
      description: "Idéal avant un événement. Coup d'éclat immédiat.",
    },
    {
      name: "Soin anti-âge raffermissant",
      duration: "1h15",
      price: "110 €",
      description: "Protocole haute tolérance. Acide hyaluronique et peptides actifs.",
    },
  ],
  Corps: [
    {
      name: "Modelage signature",
      duration: "1h30",
      price: "130 €",
      description: "Pression douce, huile parfumée, atmosphère feutrée.",
    },
    {
      name: "Gommage corps + enveloppement",
      duration: "1h00",
      price: "95 €",
      description: "Peau renouvelée, parfum boisé subtil.",
    },
  ],
  "Mains & pieds": [
    {
      name: "Manucure soin",
      duration: "45 min",
      price: "50 €",
      description: "Limage, pose vernis longue tenue, soin des cuticules.",
    },
    {
      name: "Beauté des pieds",
      duration: "1h00",
      price: "65 €",
      description: "Bain enveloppant, soin complet, finition couleur.",
    },
  ],
  "Rituels signature": [
    {
      name: "Rituel Maison · 3h",
      duration: "3h00",
      price: "240 €",
      description: "Soin visage signature, modelage corps, manucure soin. L'expérience complète.",
    },
    {
      name: "Rituel duo",
      duration: "2h00",
      price: "320 € / 2 personnes",
      description: "À deux, dans notre cabine duo. Champagne offert.",
    },
  ],
};

const galerie = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
];

const avis = [
  {
    name: "Sophie L.",
    text: "L'institut le plus inspirant de la ville. Le soin signature est une expérience à part entière, pas juste un soin.",
  },
  {
    name: "Anouk R.",
    text: "Tout est pensé : la lumière, les parfums, les gestes. Je ressors transformée à chaque visite.",
  },
  {
    name: "Léna M.",
    text: "Une vraie maison, au sens propre. J'y emmène mes amies, ma mère, mes invités étrangers. Un repère.",
  },
];

export default function MaisonAvelinePage() {
  return (
    <>
      <DemoBanner
        bgColor="#F0E4DA"
        textColor="#3A2A24"
        borderColor="#E0D2C5"
        accent="#C8956D"
      />

      <div className="font-[family-name:var(--font-geist-sans)]" style={{ color: "#3A2A24" }}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-[#F9F2EC]/85 backdrop-blur-md border-b border-[#3A2A24]/8">
          <div className="container flex items-center justify-between h-16">
            <Link
              href="#"
              className="font-[family-name:var(--font-italiana)] text-2xl tracking-wide"
            >
              Maison Aveline
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-[13px]">
              <a href="#prestations" className="hover:text-[#C8956D] transition-colors">Prestations</a>
              <a href="#univers" className="hover:text-[#C8956D] transition-colors">L'univers</a>
              <a href="#galerie" className="hover:text-[#C8956D] transition-colors">Galerie</a>
              <a href="#avis" className="hover:text-[#C8956D] transition-colors">Avis</a>
            </nav>
            <a
              href="#reservation"
              className="inline-flex items-center gap-2 text-[13px] px-4 py-2.5 rounded-full text-white"
              style={{ background: "#C8956D" }}
            >
              Réserver un soin
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="container grid gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <Parallax distance={60} className="aspect-[4/5] rounded-md overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                  alt="Soin du visage premium, ambiance feutrée"
                  fill
                  className="object-cover scale-110"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  priority
                />
              </Parallax>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C8956D" }}>
                Maison de soin · depuis 2014
              </p>
              <h1 className="font-[family-name:var(--font-italiana)] mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05]">
                Un instant pour vous,<br />
                <em className="not-italic" style={{ color: "#C8956D" }}>
                  une signature pour la peau.
                </em>
              </h1>
              <p className="mt-7 max-w-lg text-[17px] leading-[1.7]" style={{ color: "#5C453B" }}>
                Maison Aveline est un institut de beauté pensé comme un cocon. Cinq
                cabines, deux esthéticiennes, des protocoles signature et une
                sélection de marques rares. Au cœur du Marais, depuis dix ans.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-white font-medium text-[14px]"
                  style={{ background: "#3A2A24" }}
                >
                  <Calendar className="size-4" />
                  Réserver un soin
                </a>
                <a
                  href="#prestations"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border text-[14px]"
                  style={{ borderColor: "#3A2A24" }}
                >
                  Voir les prestations
                </a>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-[#3A2A24]/15 pt-8">
                {[
                  { value: 10, label: "ans" },
                  { value: 5, label: "cabines" },
                  { value: 32, label: "soins" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-[family-name:var(--font-italiana)] text-4xl" style={{ color: "#C8956D" }}>
                      <Counter to={s.value} />
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] mt-1" style={{ color: "#5C453B" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prestations */}
        <section id="prestations" className="py-20 md:py-28" style={{ background: "#F0E4DA" }}>
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C8956D" }}>
                Carte des soins
              </p>
              <h2 className="font-[family-name:var(--font-italiana)] mt-5 text-[clamp(2.25rem,5vw,3.5rem)] leading-tight">
                Chaque soin est une signature.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#5C453B" }}>
                Une sélection courte, exigeante, pensée pour des résultats visibles
                et une expérience sensorielle complète.
              </p>
            </div>

            <div className="space-y-16">
              {Object.entries(prestations).map(([cat, items]) => (
                <div key={cat}>
                  <div className="flex items-end justify-between mb-8 border-b border-[#3A2A24]/15 pb-4">
                    <h3 className="font-[family-name:var(--font-italiana)] text-3xl md:text-4xl">
                      {cat}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#C8956D" }}>
                      {items.length} soins
                    </span>
                  </div>
                  <ul className="grid gap-px bg-[#3A2A24]/8 border border-[#3A2A24]/8 rounded-md overflow-hidden">
                    {items.map((p) => (
                      <li
                        key={p.name}
                        className="bg-[#F9F2EC] p-7 grid md:grid-cols-12 gap-4 items-baseline"
                      >
                        <div className="md:col-span-4">
                          <p className="font-[family-name:var(--font-italiana)] text-2xl">
                            {p.name}
                          </p>
                          <p className="text-[12px] uppercase tracking-[0.2em] mt-1" style={{ color: "#C8956D" }}>
                            {p.duration}
                          </p>
                        </div>
                        <p className="md:col-span-6 text-[14.5px] leading-[1.65]" style={{ color: "#5C453B" }}>
                          {p.description}
                        </p>
                        <p
                          className="md:col-span-2 md:text-right font-[family-name:var(--font-italiana)] text-2xl"
                          style={{ color: "#3A2A24" }}
                        >
                          {p.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-14 max-w-2xl text-[13.5px]" style={{ color: "#5C453B" }}>
              Tarifs sur la carte. Cartes cadeaux disponibles. Programme fidélité
              dès la troisième visite : 10% sur le soin de votre choix.
            </p>
          </div>
        </section>

        {/* Univers */}
        <section id="univers" className="py-20 md:py-28">
          <div className="container grid gap-14 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-md overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80"
                  alt="Aveline Mercier, fondatrice"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 40vw, 100vw"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C8956D" }}>
                L'univers Aveline
              </p>
              <h2 className="font-[family-name:var(--font-italiana)] mt-5 text-[clamp(2rem,4.5vw,3rem)] leading-tight">
                Un lieu, une fondatrice, une promesse.
              </h2>
              <p className="mt-6 text-[16.5px] leading-[1.75]" style={{ color: "#5C453B" }}>
                Aveline Mercier ouvre la Maison en 2014 après dix années passées
                dans les plus grands instituts parisiens. Son obsession : ralentir.
                Prendre le temps. Sortir du soin minuté pour proposer une expérience
                complète, presque rituelle.
              </p>
              <p className="mt-4 text-[16.5px] leading-[1.75]" style={{ color: "#5C453B" }}>
                Aujourd'hui, l'équipe compte deux esthéticiennes formées par Aveline
                elle-même. Les marques utilisées sont rares — sourcées en France et
                en Italie, formulations courtes, sans compromis.
              </p>
              <blockquote
                className="mt-10 font-[family-name:var(--font-italiana)] text-2xl md:text-[28px] leading-snug border-l-2 pl-6"
                style={{ borderColor: "#C8956D" }}
              >
                « La beauté commence quand on accepte de s'arrêter. »
                <footer className="mt-4 text-[13px] uppercase tracking-[0.22em]" style={{ color: "#C8956D" }}>
                  Aveline Mercier, fondatrice
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section id="galerie" className="py-20 md:py-28" style={{ background: "#F0E4DA" }}>
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C8956D" }}>
                  Galerie
                </p>
                <h2 className="font-[family-name:var(--font-italiana)] mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight">
                  L'institut, en images.
                </h2>
              </div>
              <a
                href="https://instagram.com/maison.aveline"
                className="text-[13px] underline underline-offset-4 hover:text-[#C8956D] transition-colors"
              >
                Suivre @maison.aveline
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galerie.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-md ${
                    i === 0 || i === 4
                      ? "aspect-[3/4] md:row-span-2 md:aspect-[3/5]"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Ambiance Maison Aveline"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(min-width:768px) 33vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis */}
        <section id="avis" className="py-20 md:py-28">
          <div className="container">
            <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C8956D" }}>
              Témoignages
            </p>
            <h2 className="font-[family-name:var(--font-italiana)] mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight max-w-2xl">
              Ce que disent celles<br />qui poussent la porte.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {avis.map((a) => (
                <article
                  key={a.name}
                  className="border-t pt-6"
                  style={{ borderColor: "#C8956D" }}
                >
                  <p className="font-[family-name:var(--font-italiana)] text-[22px] leading-[1.45]">
                    « {a.text} »
                  </p>
                  <p className="mt-6 text-[12px] uppercase tracking-[0.22em]" style={{ color: "#C8956D" }}>
                    {a.name}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Réservation */}
        <section id="reservation" className="py-20 md:py-28" style={{ background: "#3A2A24", color: "#F9F2EC" }}>
          <div className="container grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: "#C8956D" }}>
                Réservation
              </p>
              <h2 className="font-[family-name:var(--font-italiana)] mt-5 text-[clamp(2.25rem,5vw,3.5rem)] leading-tight">
                Choisissez votre instant.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.7] opacity-85 max-w-md">
                Réservation en ligne 7j/7, confirmation immédiate. Vous préférez
                par téléphone ? L'équipe répond du mardi au samedi, de 10h à 19h.
              </p>
              <div className="mt-10 space-y-5 text-[14.5px] opacity-90">
                <div className="flex items-center gap-3">
                  <Clock className="size-4" style={{ color: "#C8956D" }} />
                  Mar-Sam · 10h-19h · Fermé dimanche et lundi
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="size-4" style={{ color: "#C8956D" }} />
                  18 rue des Archives · Paris 4e
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="size-4" style={{ color: "#C8956D" }} />
                  Cartes cadeaux disponibles toute l'année
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F9F2EC] text-[#3A2A24] rounded-md p-8 md:p-10">
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#C8956D" }}>
                  Réservation rapide
                </p>
                <h3 className="font-[family-name:var(--font-italiana)] text-3xl mt-3">
                  En quelques clics.
                </h3>
                <form className="mt-8 space-y-5">
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.2em] block mb-2">
                      Soin souhaité
                    </label>
                    <select
                      className="w-full bg-[#F0E4DA] border border-[#3A2A24]/15 rounded-md px-4 py-3 text-[14px]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Sélectionner…
                      </option>
                      <option>Soin signature Aveline</option>
                      <option>Soin éclat express</option>
                      <option>Modelage signature</option>
                      <option>Rituel Maison · 3h</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.2em] block mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full bg-[#F0E4DA] border border-[#3A2A24]/15 rounded-md px-4 py-3 text-[14px]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-[0.2em] block mb-2">
                        Heure
                      </label>
                      <select
                        className="w-full bg-[#F0E4DA] border border-[#3A2A24]/15 rounded-md px-4 py-3 text-[14px]"
                        defaultValue=""
                      >
                        <option value="" disabled>—</option>
                        <option>10h00</option>
                        <option>11h30</option>
                        <option>14h00</option>
                        <option>16h00</option>
                        <option>17h30</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Nom et prénom"
                      className="bg-[#F0E4DA] border border-[#3A2A24]/15 rounded-md px-4 py-3 text-[14px]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-[#F0E4DA] border border-[#3A2A24]/15 rounded-md px-4 py-3 text-[14px]"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full text-white font-medium text-[14px]"
                    style={{ background: "#C8956D" }}
                  >
                    Confirmer ma réservation
                    <ArrowRight className="size-4" />
                  </button>
                  <p className="text-center text-[12px]" style={{ color: "#5C453B" }}>
                    Confirmation sous 24h. Annulation gratuite jusqu'à 48h avant.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-14" style={{ background: "#F0E4DA" }}>
          <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[13px]" style={{ color: "#5C453B" }}>
            <div>
              <p className="font-[family-name:var(--font-italiana)] text-2xl" style={{ color: "#3A2A24" }}>
                Maison Aveline
              </p>
              <p className="mt-1">18 rue des Archives — 75004 Paris</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span>+33 1 42 78 14 09</span>
              <span>contact@maison-aveline.fr</span>
              <a className="underline underline-offset-4" href="https://instagram.com">
                Instagram
              </a>
            </div>
            <Link href="/" className="hover:text-[#C8956D]">
              Retour sur Hi-Ve →
            </Link>
          </div>
          <p className="container mt-8 text-[11.5px] opacity-70" style={{ color: "#5C453B" }}>
            © 2026 Maison Aveline — Démonstration Hi-Ve
          </p>
        </footer>
      </div>
    </>
  );
}
