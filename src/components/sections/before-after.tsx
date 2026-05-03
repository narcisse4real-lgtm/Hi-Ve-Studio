"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";

function BeforeMockup() {
  return (
    <div className="aspect-[16/10] bg-[#E8E2D7] relative">
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-[#888] pb-2">
          <span
            className="text-xl text-[#444]"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            MENUISERIE DURAND
          </span>
          <span className="text-[10px] text-[#888]">Tel : 06.XX.XX.XX.XX</span>
        </div>
        <div className="mt-3 flex gap-2 text-[10px] text-[#0033cc] underline">
          <span>Accueil</span>
          <span>Nos services</span>
          <span>Galerie</span>
          <span>Contact</span>
        </div>
        <div
          className="mt-4 flex-1 grid grid-cols-3 gap-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <div className="col-span-2 bg-[#D4C9B5] flex items-center justify-center text-[10px] text-[#666]">
            [Bannière JPG 800x300]
          </div>
          <div className="bg-white p-2 text-[8px] text-[#444] leading-[1.3]">
            <strong>Bienvenue !</strong>
            <br />
            Notre entreprise familiale réalise tous vos travaux de menuiserie
            depuis plus de 20 ans...
          </div>
        </div>
        <div className="mt-2 text-[8px] text-[#888] text-center">
          © 2008 — Site réalisé par WebMaster Local
        </div>
      </div>
    </div>
  );
}

function AfterMockup() {
  return (
    <div className="aspect-[16/10] bg-[#F5F0E8] relative">
      <div className="absolute inset-0 p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="font-serif italic text-[18px] text-[#2B1F14]">
            Atelier Morel
          </span>
          <div className="flex gap-3 text-[9px] uppercase tracking-[0.2em] text-[#2B1F14]/80">
            <span>Réalisations</span>
            <span>Devis</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="mt-6 flex-1 grid grid-cols-12 gap-3">
          <div className="col-span-7 flex flex-col justify-end">
            <span className="text-[9px] uppercase tracking-[0.22em] text-[#A8482C]">
              Menuiserie sur-mesure · Bourgogne
            </span>
            <div className="mt-2 font-serif text-[#2B1F14] text-[clamp(14px,3vw,28px)] leading-[1.05]">
              L'art du sur-mesure,
              <br />
              transmis depuis 1962.
            </div>
            <div className="mt-3 flex gap-2">
              <span className="bg-[#A8482C] text-white text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                Demander un devis
              </span>
              <span className="border border-[#2B1F14] text-[#2B1F14] text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                Voir l'atelier
              </span>
            </div>
          </div>
          <div
            className="col-span-5 rounded-md bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=400&q=70)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      updateFromClientX(x);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <section id="transformation" className="relative py-24 md:py-36 bg-ivoire">
      <div className="container">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>La transformation</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="heading-h2 mt-6 text-[clamp(2rem,4.5vw,3rem)] text-balance">
              On ne refait pas seulement un site. On repositionne votre image.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-[1.65] text-gris-chaud max-w-2xl">
              Voyez ce que change un site Hi-Ve : même métier, même qualité, mais
              une perception complètement différente.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 select-none">
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-2xl border-[0.5px] border-sable cursor-ew-resize touch-none"
              onMouseDown={(e) => {
                setDragging(true);
                updateFromClientX(e.clientX);
              }}
              onTouchStart={(e) => {
                setDragging(true);
                updateFromClientX(e.touches[0].clientX);
              }}
              role="slider"
              aria-label="Comparer avant et après"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft")
                  setPosition((p) => Math.max(0, p - 5));
                if (e.key === "ArrowRight")
                  setPosition((p) => Math.min(100, p + 5));
              }}
            >
              {/* After (bottom layer) */}
              <BrowserFrame url="atelier-morel.fr" className="rounded-none border-none shadow-none">
                <AfterMockup />
              </BrowserFrame>

              {/* Before (top layer with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
                }}
              >
                <BrowserFrame
                  url="menuiserie-durand-2008.fr"
                  className="rounded-none border-none shadow-none h-full"
                >
                  <BeforeMockup />
                </BrowserFrame>
              </div>

              {/* Handle */}
              <div
                className="absolute inset-y-0 w-px bg-ivoire pointer-events-none"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-encre text-ivoire flex items-center justify-center shadow-[0_15px_30px_-10px_rgba(26,24,20,0.5)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 6-6 6 6 6" />
                    <path d="m15 6 6 6-6 6" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 text-[10px] uppercase tracking-label bg-encre/85 text-ivoire px-2.5 py-1 rounded-full backdrop-blur">
                Avant
              </div>
              <div className="absolute top-4 right-4 text-[10px] uppercase tracking-label bg-miel text-ivoire px-2.5 py-1 rounded-full">
                Après Hi-Ve
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-l-2 border-sable pl-5">
                <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                  Avant
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-gris-chaud">
                  Site daté, peu lisible sur mobile, contact perdu en bas de page.
                </p>
              </div>
              <div className="border-l-2 border-miel pl-5">
                <p className="text-[11px] uppercase tracking-label text-miel">
                  Après
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-encre">
                  Design clair, mobile-first, contact accessible en un clic, image alignée avec votre niveau réel.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
