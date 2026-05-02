"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hexagon } from "@/components/ui/hexagon";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const darkHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-ivoire/80 backdrop-blur-md border-b-[0.5px] border-sable/60"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Hi-Ve, retour à l'accueil"
        >
          <Hexagon
            filled
            size={18}
            className="text-miel transition-transform group-hover:rotate-30"
          />
          <span
            className={cn(
              "font-serif text-[22px] md:text-2xl font-medium tracking-tight transition-colors",
              darkHero ? "text-ivoire" : "text-encre",
            )}
          >
            Hi-Ve
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[14px] transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-miel after:w-0 hover:after:w-full after:transition-all",
                darkHero
                  ? "text-ivoire/78 hover:text-ivoire"
                  : "text-encre/85 hover:text-encre",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href="/audit-gratuit"
            size="sm"
            variant={darkHero ? "studio" : "primary"}
          >
            Recevoir mon audit gratuit
          </Button>
        </div>

        <button
          type="button"
          className={cn("md:hidden p-2 -mr-2", darkHero ? "text-ivoire" : "text-encre")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-ivoire transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav
          className="flex flex-col px-6 pt-10 gap-1"
          aria-label="Navigation mobile"
        >
          {siteConfig.nav.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b-[0.5px] border-sable py-5 flex items-center justify-between"
            >
              <span className="font-serif text-3xl font-medium">
                {item.label}
              </span>
              <span className="text-[11px] text-gris-chaud uppercase tracking-label tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <div className="mt-10">
            <Button
              href="/audit-gratuit"
              onClick={() => setOpen(false)}
              className="w-full justify-center"
            >
              Recevoir mon audit gratuit
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
