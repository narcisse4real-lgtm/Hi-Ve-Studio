"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
  reverse = false,
}: MarqueeProps) {
  const duration =
    speed === "fast" ? "30s" : speed === "slow" ? "70s" : "50s";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden mask-fade-edges",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-12 will-change-transform",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
