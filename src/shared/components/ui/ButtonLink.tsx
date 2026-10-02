import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-lime-500 text-ink hover:bg-lime-400",
  secondary: "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50",
  ghost: "text-zinc-600 hover:text-zinc-950",
};

const sizes = {
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-[15px]",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
