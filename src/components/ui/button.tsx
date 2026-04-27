"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Hexagon } from "./hexagon";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-encre text-ivoire hover:bg-miel pl-4 pr-5 py-3 text-[14px] tracking-[0.01em]",
        secondary:
          "bg-transparent text-encre border-[0.5px] border-encre hover:bg-encre hover:text-ivoire pl-4 pr-5 py-3 text-[14px]",
        ghost: "text-encre hover:text-miel underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "text-xs px-3 py-2",
        lg: "px-5 py-4 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  showArrow?: boolean;
  showHex?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    showArrow = true,
    showHex = true,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(buttonVariants({ variant, size }), className);

  const inner = (
    <>
      {showHex ? (
        <Hexagon
          size={11}
          filled
          className={cn(
            "transition-colors",
            variant === "primary"
              ? "text-miel-clair group-hover:text-ivoire"
              : "text-miel",
          )}
        />
      ) : null}
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className={cn(
            "size-3.5 transition-transform duration-300 group-hover:translate-x-1",
            variant === "primary"
              ? "text-miel-clair group-hover:text-ivoire"
              : "text-miel",
          )}
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a className={classes} href={href} {...linkRest}>
          {inner}
        </a>
      );
    }
    return (
      <Link className={classes} href={href} {...linkRest}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}

export { buttonVariants };
