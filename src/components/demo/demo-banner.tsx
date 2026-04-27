"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { Hexagon } from "@/components/ui/hexagon";

export function DemoBanner({
  textColor = "#1A1814",
  bgColor = "#F8F4ED",
  borderColor = "#E2D8C6",
  accent = "#B8732C",
}: {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  accent?: string;
}) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      className="w-full border-b text-[12.5px] z-50 relative"
      style={{
        background: bgColor,
        color: textColor,
        borderColor,
      }}
    >
      <div className="container py-2.5 flex items-center justify-center gap-4 text-center">
        <span className="hidden sm:inline-flex items-center gap-1.5 opacity-80">
          <Hexagon size={9} filled style={{ color: accent }} />
          Vous explorez une démo Hi-Ve
        </span>
        <span className="sm:hidden text-[11.5px] opacity-80">Démo Hi-Ve</span>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-medium hover:underline underline-offset-4"
          style={{ color: accent }}
        >
          Découvrez nos offres
          <ArrowUpRight className="size-3.5" />
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="ml-2 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Masquer la bannière"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
