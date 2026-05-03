"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";

function BeforeMockup() {
  return (
    <div className="relative aspect-[16/10] bg-[#e8e2d7]">
      <Image
        src="/mockups/transformation-before-homepage.png"
        alt="Ancienne homepage Maison Aveline avant refonte"
        width={1536}
        height={960}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 96vw, 1320px"
        className="h-full w-full object-contain opacity-90 saturate-[0.78]"
      />
    </div>
  );
}

function AfterMockup() {
  return (
    <div className="relative aspect-[16/10] bg-[#f5f0e8]">
      <Image
        src="/mockups/transformation-after-homepage.png"
        alt="Homepage Maison Aveline premium après refonte Hi-Ve"
        width={1536}
        height={960}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 96vw, 1320px"
        className="h-full w-full object-contain"
      />
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

    const onMove = (event: MouseEvent | TouchEvent) => {
      const x =
        "touches" in event
          ? event.touches[0]?.clientX
          : (event as MouseEvent).clientX;
      if (typeof x === "number") updateFromClientX(x);
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
    <section id="transformation" className="relative bg-ivoire py-24 md:py-36">
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
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-gris-chaud">
              Voyez ce que change un site Hi-Ve : même métier, même qualité, mais
              une perception complètement différente.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 select-none md:-mx-6 lg:-mx-12 xl:-mx-20 2xl:-mx-28">
            <div
              ref={containerRef}
              className="relative touch-none cursor-ew-resize overflow-hidden rounded-2xl border-[0.5px] border-sable shadow-[0_34px_90px_-62px_rgba(26,24,20,0.55)]"
              onMouseDown={(event) => {
                setDragging(true);
                updateFromClientX(event.clientX);
              }}
              onTouchStart={(event) => {
                setDragging(true);
                updateFromClientX(event.touches[0].clientX);
              }}
              role="slider"
              aria-label="Comparer avant et après"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft") {
                  setPosition((p) => Math.max(0, p - 5));
                }
                if (event.key === "ArrowRight") {
                  setPosition((p) => Math.min(100, p + 5));
                }
              }}
            >
              <BrowserFrame
                url="maison-aveline.fr"
                className="rounded-none border-none shadow-none"
              >
                <AfterMockup />
              </BrowserFrame>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
                }}
              >
                <BrowserFrame
                  url="maison-aveline-2010.fr"
                  className="h-full rounded-none border-none shadow-none"
                >
                  <BeforeMockup />
                </BrowserFrame>
              </div>

              <div
                className="pointer-events-none absolute inset-y-0 w-px bg-ivoire"
                style={{ left: `${position}%` }}
              >
                <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-encre text-ivoire shadow-[0_15px_30px_-10px_rgba(26,24,20,0.5)]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="m9 6-6 6 6 6" />
                    <path d="m15 6 6 6-6 6" />
                  </svg>
                </div>
              </div>

              <div className="absolute left-4 top-4 rounded-full bg-encre/85 px-2.5 py-1 text-[10px] uppercase tracking-label text-ivoire backdrop-blur">
                Avant
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-miel px-2.5 py-1 text-[10px] uppercase tracking-label text-ivoire">
                Après Hi-Ve
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border-l-2 border-sable pl-5">
                <p className="text-[11px] uppercase tracking-label text-gris-chaud">
                  Avant
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-gris-chaud">
                  Site daté, univers peu désirable, réservation perdue en bas de page.
                </p>
              </div>
              <div className="border-l-2 border-miel pl-5">
                <p className="text-[11px] uppercase tracking-label text-miel">
                  Après
                </p>
                <p className="mt-2 text-[15px] leading-[1.6] text-encre">
                  Image premium, prestations lisibles, réservation visible et
                  perception alignée avec un institut haut de gamme.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
