import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  url?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}

export function BrowserFrame({
  url = "hi-ve.fr",
  className,
  children,
  tone = "light",
}: BrowserFrameProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "rounded-[14px] overflow-hidden border-[0.5px] shadow-[0_30px_60px_-30px_rgba(26,24,20,0.25),0_18px_36px_-18px_rgba(26,24,20,0.15)]",
        isDark ? "bg-encre border-encre/40" : "bg-white border-sable",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 border-b-[0.5px]",
          isDark ? "border-ivoire/10 bg-encre" : "border-sable bg-creme/60",
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-sable/80" />
          <span className="size-2.5 rounded-full bg-sable/60" />
          <span className="size-2.5 rounded-full bg-sable/40" />
        </div>
        <div
          className={cn(
            "flex-1 mx-auto max-w-[60%] rounded-md text-center text-[10px] font-mono px-3 py-1",
            isDark
              ? "bg-ivoire/5 text-ivoire/60"
              : "bg-ivoire text-gris-chaud",
          )}
        >
          {url}
        </div>
        <div className="size-2.5" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
