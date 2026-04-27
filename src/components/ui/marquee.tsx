"use client";

import { Children, cloneElement, isValidElement, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  reverse?: boolean;
  /** Show edge fade mask (defaults to true). */
  fade?: boolean;
}

export function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
  reverse = false,
  fade = true,
}: MarqueeProps) {
  const duration =
    speed === "fast" ? "30s" : speed === "slow" ? "70s" : "50s";

  const style = {
    "--marquee-duration": duration,
    "--marquee-direction": reverse ? "reverse" : "normal",
  } as CSSProperties;

  // Render the children twice with deduplicated keys — translateX(-50%) loops
  // seamlessly when the inner track contains exactly two identical halves.
  const items = Children.toArray(children);
  const renderCopy = (prefix: string, ariaHidden = false) =>
    items.map((child, i) => {
      if (isValidElement(child)) {
        const extra: Record<string, unknown> = {
          key: `${prefix}-${child.key ?? i}`,
        };
        if (ariaHidden) extra["aria-hidden"] = "true";
        return cloneElement(child, extra);
      }
      return child;
    });

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        fade && "mask-fade-edges",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-12 will-change-transform animate-hive-marquee",
          !pauseOnHover && "[&]:hover:[animation-play-state:running]",
        )}
        style={style}
      >
        {renderCopy("a")}
        {renderCopy("b", true)}
      </div>
    </div>
  );
}
