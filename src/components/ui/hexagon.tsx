import { cn } from "@/lib/utils";

interface HexagonProps extends React.SVGProps<SVGSVGElement> {
  filled?: boolean;
  size?: number;
}

export function Hexagon({
  filled = false,
  size = 14,
  className,
  ...props
}: HexagonProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block", className)}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" />
    </svg>
  );
}
