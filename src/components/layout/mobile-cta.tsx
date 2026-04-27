"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "md:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-300",
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <div className="bg-ivoire/85 backdrop-blur-md border-[0.5px] border-sable rounded-full p-1.5 shadow-[0_10px_30px_-10px_rgba(26,24,20,0.25)]">
        <Button
          href="/audit-gratuit"
          className="w-full justify-center"
          size="default"
        >
          Audit gratuit
        </Button>
      </div>
    </div>
  );
}
