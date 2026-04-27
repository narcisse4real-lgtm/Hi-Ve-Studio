import { cn } from "@/lib/utils";
import { Hexagon } from "./hexagon";

interface EyebrowProps {
  number?: string;
  children: React.ReactNode;
  className?: string;
  withHex?: boolean;
  tone?: "default" | "ivoire";
}

export function Eyebrow({
  number,
  children,
  className,
  withHex = true,
  tone = "default",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] md:text-[12px] font-medium uppercase tracking-label",
        tone === "ivoire" ? "text-ivoire/70" : "text-gris-chaud",
        className,
      )}
    >
      {withHex ? (
        <Hexagon size={9} filled className="text-miel" />
      ) : null}
      {number ? (
        <>
          <span className="tabular-nums">{number}</span>
          <span aria-hidden="true">—</span>
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
