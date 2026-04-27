import { cn } from "@/lib/utils";
import { Hexagon } from "./hexagon";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4 w-full", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-sable" />
      <Hexagon filled size={10} className="text-miel" />
      <span className="h-px flex-1 bg-sable" />
    </div>
  );
}
