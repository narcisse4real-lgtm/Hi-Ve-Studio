import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "ivoire" | "creme" | "encre";
  padding?: "default" | "tight" | "loose";
  id?: string;
  children: React.ReactNode;
}

export function Section({
  tone = "ivoire",
  padding = "default",
  className,
  children,
  ...props
}: SectionProps) {
  const toneClass =
    tone === "creme"
      ? "bg-creme"
      : tone === "encre"
        ? "bg-encre text-ivoire"
        : "bg-ivoire";

  const paddingClass =
    padding === "tight"
      ? "py-16 md:py-20"
      : padding === "loose"
        ? "py-24 md:py-40"
        : "py-20 md:py-28";

  return (
    <section
      className={cn("relative", toneClass, paddingClass, className)}
      {...props}
    >
      <div className="container">{children}</div>
    </section>
  );
}
