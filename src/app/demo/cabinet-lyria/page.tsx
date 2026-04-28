"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";
import { DemoBanner } from "@/components/demo/demo-banner";

const motifs = [
  "Douleurs cervicales",
  "Lombalgies",
  "Sciatique",
  "Maux de tête, migraines",
  "Sportifs : récupération, blessures",
  "Femmes enceintes",
  "Nourrissons et enfants",
  "Stress, troubles du sommeil",
  "Suites de chirurgie",
];

const praticiens = [
  {
    name: "Dr. Camille Reynaud",
    role: "Ostéopathe D.O.",
    formation: "Diplômée de l'Institut Supérieur d'Ostéopathie de Lyon (2014)",
    bio: "Spécialisée en ostéopathie périnatale et pédiatrique. Accompagnement des femmes enceintes et des nourrissons depuis 10 ans.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Antoine Vasseur",
    role: "Ostéopathe D.O.",
    formation: "Diplômé du Collège Ostéopathique Européen (2017)",
    bio: "Formation complémentaire en ostéopathie du sport. Consultations en lien avec les clubs locaux et préparateurs physiques.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
];

const faqs = [
  {
    q: "Comment se déroule une première consultation ?",
    a: "La première séance dure environ 1h. Elle commence par un échange sur votre histoire médicale, votre motif de consultation et vos habitudes. Vient ensuite un examen clinique global, puis le traitement adapté. Vous repartez avec quelques conseils.",
  },
  {
    q: "Faut-il une ordonnance ?",
    a: "Non. L'ostéopathie est accessible directement, sans prescription médicale. Si nécessaire, votre praticien vous orientera vers un autre professionnel de santé.",
  },
  {
    q: "Mes séances sont-elles remboursées ?",
    a: "L'ostéopathie n'est pas remboursée par la Sécurité Sociale. La plupart des mutuelles prennent en charge tout ou partie de la séance. Une facture vous est remise à chaque consultation.",
  },
  {
    q: "À partir de quel âge peut-on consulter ?",
    a: "Dès la naissance. L'ostéopathie pédiatrique utilise des techniques très douces, adaptées aux nourrissons (régurgitations, plagiocéphalie, sommeil agité, coliques).",
  },
];

const slots = [
  { day: "Lundi 28 avril", times: ["9h00", "10h30", "14h00", "16h30"] },
  { day: "Mardi 29 avril", times: ["8h30", "11h00", "15h00", "17h00"] },
  { day: "Mercredi 30 avril", times: ["9h30", "14h30", "16h00"] },
  { day: "Jeudi 1er mai", times: ["10h00", "11h30", "15h30"] },
];

export default function CabinetLyriaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <>
      <DemoBanner
        bgColor="#F5F2EC"
        textColor="#1B2B3F"
        borderColor="#E5DFD3"
        accent="#5C7A99"
      />

      <div className="font-[family-name:var(--font-geist-sans)]" style={{ color: "#1B2B3F" }}>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-[#1B2B3F]/8">
          <div className="container flex items-center justify-between h-16">
            <Link
              href="#"
              className="font-[family-name:var(--font-tenor)] text-[22px] tracking-tight"
            >
              Cabinet Lyria
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-[13px]">
              <a href="#cabinet" className="hover:text-[#5C7A99] transition-colors">Le cabinet</a>
              <a href="#motifs" className="hover:text-[#5C7A99] transition-colors">Motifs</a>
              <a href="#tarifs" className="hover:text-[#5C7A99] transition-colors">Tarifs</a>
              <a href="#faq" className="hover:text-[#5C7A99] transition-colors">FAQ</a>
            </nav>
            <a
              href="#rdv"
              className="inline-flex items-center gap-2 text-[13px] px-4 py-2.5 rounded-full text-white"
              style={{ background: "#1B2B3F" }}
            >
              <Calendar className="size-3.5" />
              Prendre RDV
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-16 md:pt-24 pb-20 md:pb-24">
          <div className="container grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <p
                className="text-[11px] uppercase tracking-[0.24em]"
                style={{ color: "#5C7A99" }}
              >
                Cabinet d'ostéopathie · Lyon 6e
              </p>
              <h1
                className="font-[family-name:var(--font-tenor)] mt-6 text-[clamp(2.5rem,5.8vw,4.5rem)] leading-[1.1] tracking-tight font-normal"
              >
                Une approche douce,<br />à l'écoute de votre corps.
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-[1.65]" style={{ color: "#4A5A70" }}>
                Adultes, sportifs, femmes enceintes, nourrissons. Au cabinet
                Lyria, deux praticiens vous reçoivent pour des consultations
                personnalisées, dans un cadre lumineux et apaisant.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#rdv"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-white font-medium text-[14px]"
                  style={{ background: "#1B2B3F" }}
                >
                  <Calendar className="size-4" />
                  Prendre rendez-vous
                </a>
                <a
                  href="tel:0472810912"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border text-[14px]"
                  style={{ borderColor: "#1B2B3F" }}
                >
                  <Phone className="size-4" />
                  04 72 81 09 12
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px]" style={{ color: "#4A5A70" }}>
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5" />
                  Lun-Sam · 8h-19h
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-3.5" />
                  4 cours Lafayette, Lyon 6e
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-3.5" />
                  Réponse sous 24h
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[5/4] relative rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80"
                  alt="Cabinet d'ostéopathie lumineux"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Le cabinet — praticiens */}
        <section id="cabinet" className="py-20 md:py-28" style={{ background: "#F5F2EC" }}>
          <div className="container">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "#5C7A99" }}>
                Les praticiens
              </p>
              <h2 className="font-[family-name:var(--font-tenor)] mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight">
                Deux ostéopathes, une même exigence d'écoute.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#4A5A70" }}>
                Camille et Antoine se partagent le cabinet depuis 2019. Une approche
                complémentaire, formée et continuellement actualisée.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {praticiens.map((p) => (
                <article
                  key={p.name}
                  className="bg-white rounded-md overflow-hidden border border-[#1B2B3F]/8"
                >
                  <div className="aspect-[5/4] relative">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="(min-width:768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#5C7A99" }}>
                      {p.role}
                    </p>
                    <h3 className="font-[family-name:var(--font-tenor)] text-2xl md:text-[28px] mt-2">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-[13.5px]" style={{ color: "#5C7A99" }}>
                      {p.formation}
                    </p>
                    <p className="mt-4 text-[14.5px] leading-[1.6]" style={{ color: "#4A5A70" }}>
                      {p.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Motifs */}
        <section id="motifs" className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "#5C7A99" }}>
                  Motifs de consultation
                </p>
                <h2 className="font-[family-name:var(--font-tenor)] mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight">
                  Pour quoi consulter ?
                </h2>
                <p className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#4A5A70" }}>
                  L'ostéopathie peut intervenir dans de nombreuses situations.
                  Voici les motifs les plus fréquents au cabinet.
                </p>
              </div>

              <ul className="lg:col-span-7 grid gap-px bg-[#E5DFD3] border border-[#E5DFD3] rounded-md overflow-hidden sm:grid-cols-2">
                {motifs.map((m, i) => (
                  <li
                    key={m}
                    className="bg-white p-5 flex items-center gap-4 hover:bg-[#F5F2EC] transition-colors"
                  >
                    <span
                      className="size-8 rounded-full flex items-center justify-center text-[12px] tabular-nums shrink-0"
                      style={{ background: "#F5F2EC", color: "#5C7A99" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px]">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section id="tarifs" className="py-20 md:py-28" style={{ background: "#F5F2EC" }}>
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "#5C7A99" }}>
                Tarifs
              </p>
              <h2 className="font-[family-name:var(--font-tenor)] mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight">
                Clair, sans surprise.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Adulte", price: "65 €", duration: "1h00" },
                { label: "Enfant (6-15 ans)", price: "55 €", duration: "45 min" },
                { label: "Nourrisson / Femme enceinte", price: "60 €", duration: "45 min" },
              ].map((t) => (
                <article
                  key={t.label}
                  className="bg-white rounded-md p-7 border border-[#1B2B3F]/8"
                >
                  <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#5C7A99" }}>
                    {t.label}
                  </p>
                  <p className="font-[family-name:var(--font-tenor)] text-5xl mt-4">
                    {t.price}
                  </p>
                  <p className="mt-2 text-[13.5px]" style={{ color: "#4A5A70" }}>
                    Séance de {t.duration}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-[13.5px]" style={{ color: "#4A5A70" }}>
              Paiement par carte, espèces ou chèque. Facture remise à chaque
              consultation pour remboursement par votre mutuelle.
            </p>
          </div>
        </section>

        {/* RDV widget (Cal.com look-alike) */}
        <section id="rdv" className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl mb-10">
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "#5C7A99" }}>
                Prendre rendez-vous
              </p>
              <h2 className="font-[family-name:var(--font-tenor)] mt-4 text-[clamp(2rem,4.5vw,3rem)] leading-tight">
                Choisissez votre créneau.
              </h2>
              <p className="mt-5 text-[16px] leading-[1.65]" style={{ color: "#4A5A70" }}>
                Réservez en ligne 7j/7. Confirmation immédiate par email et SMS.
              </p>
            </div>

            <div className="bg-white border border-[#1B2B3F]/10 rounded-md overflow-hidden grid lg:grid-cols-12">
              <aside className="lg:col-span-4 p-7 md:p-8 border-r border-[#1B2B3F]/10 bg-[#F5F2EC]/50">
                <p className="text-[11px] uppercase tracking-[0.22em]" style={{ color: "#5C7A99" }}>
                  Consultation
                </p>
                <h3 className="font-[family-name:var(--font-tenor)] text-2xl mt-2">
                  Première consultation
                </h3>
                <ul className="mt-6 space-y-3 text-[13.5px]" style={{ color: "#4A5A70" }}>
                  <li className="flex items-center gap-2">
                    <Clock className="size-3.5" />
                    1h00
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="size-3.5" />4 cours Lafayette, Lyon 6e
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="size-3.5" />
                    65 €
                  </li>
                </ul>
                <p className="mt-6 text-[13px]" style={{ color: "#4A5A70" }}>
                  Confirmation immédiate. Annulation gratuite jusqu'à 24h avant.
                </p>
              </aside>

              <div className="lg:col-span-8 p-7 md:p-8">
                <div className="flex gap-2 overflow-x-auto pb-3 -mx-1 px-1">
                  {slots.map((s, i) => (
                    <button
                      key={s.day}
                      type="button"
                      onClick={() => {
                        setSelectedDay(i);
                        setSelectedSlot(null);
                      }}
                      className="px-4 py-2.5 rounded-md text-[13px] whitespace-nowrap border transition-colors"
                      style={{
                        background:
                          selectedDay === i ? "#1B2B3F" : "transparent",
                        color: selectedDay === i ? "#FFFFFF" : "#1B2B3F",
                        borderColor:
                          selectedDay === i ? "#1B2B3F" : "rgba(27,43,63,0.15)",
                      }}
                    >
                      {s.day}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {slots[selectedDay].times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedSlot(t)}
                      className="px-4 py-3 rounded-md text-[13.5px] border transition-colors"
                      style={{
                        background:
                          selectedSlot === t ? "#5C7A99" : "transparent",
                        color: selectedSlot === t ? "#FFFFFF" : "#1B2B3F",
                        borderColor:
                          selectedSlot === t
                            ? "#5C7A99"
                            : "rgba(27,43,63,0.15)",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {selectedSlot ? (
                  <div className="mt-8 pt-6 border-t border-[#1B2B3F]/10 flex items-center justify-between gap-4">
                    <div className="text-[13.5px]">
                      <p style={{ color: "#4A5A70" }}>Créneau sélectionné</p>
                      <p className="font-medium">
                        {slots[selectedDay].day} à {selectedSlot}
                      </p>
                    </div>
                    <button
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-[14px]"
                      style={{ background: "#1B2B3F" }}
                    >
                      Confirmer
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                ) : (
                  <p className="mt-8 pt-6 border-t border-[#1B2B3F]/10 text-[13.5px]" style={{ color: "#4A5A70" }}>
                    Sélectionnez un créneau pour confirmer votre rendez-vous.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-28" style={{ background: "#F5F2EC" }}>
          <div className="container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: "#5C7A99" }}>
                FAQ
              </p>
              <h2 className="font-[family-name:var(--font-tenor)] mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-tight">
                Vos questions, nos réponses.
              </h2>
            </div>
            <ul className="lg:col-span-8 border-t border-[#1B2B3F]/15">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li key={f.q} className="border-b border-[#1B2B3F]/15">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full text-left py-6 flex items-start justify-between gap-6"
                      aria-expanded={open}
                    >
                      <span className="font-[family-name:var(--font-tenor)] text-xl md:text-[22px] leading-snug">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`size-5 mt-1 shrink-0 transition-transform ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {open ? (
                      <p
                        className="pb-6 max-w-2xl text-[15px] leading-[1.65]"
                        style={{ color: "#4A5A70" }}
                      >
                        {f.a}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer className="py-20 md:py-24" style={{ background: "#1B2B3F", color: "#F5F2EC" }}>
          <div className="container grid gap-12 lg:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-tenor)] text-2xl">
                Cabinet Lyria
              </p>
              <p className="mt-3 text-[13.5px] opacity-70 max-w-xs">
                Cabinet d'ostéopathie. Adultes, sportifs, femmes enceintes, nourrissons.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] opacity-70 mb-3">
                Adresse
              </p>
              <p className="text-[14.5px] leading-[1.7]">
                4 cours Lafayette<br />
                69006 Lyon
              </p>
              <p className="mt-3 text-[13px] opacity-70">
                Métro Foch · Parking à 50m
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] opacity-70 mb-3">
                Contact
              </p>
              <p className="text-[14.5px]">04 72 81 09 12</p>
              <p className="text-[14.5px]">contact@cabinet-lyria.fr</p>
              <p className="mt-3 text-[13px] opacity-70">Lun-Sam · 8h-19h</p>
            </div>
          </div>
          <div className="container mt-14 pt-6 border-t border-white/10 text-[12px] opacity-50 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <span>© 2026 Cabinet Lyria — Démonstration Hi-Ve</span>
            <Link href="/" className="hover:opacity-100 hover:underline underline-offset-4">
              Retour sur Hi-Ve →
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
