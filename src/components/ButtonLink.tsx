import * as React from "react";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-codon-blue bg-gradient-to-r from-codon-blue to-blue-600 text-white shadow-glowBlue hover:shadow-[0_0_44px_rgba(30,139,255,0.45)]",
  secondary: "gradient-border text-white",
  ghost: "border-transparent bg-transparent text-slate-200 hover:text-white"
};

export function ButtonLink({ children, href, variant = "primary", className = "" }: ButtonLinkProps) {
  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-codon-cyan/80 focus:ring-offset-2 focus:ring-offset-codon-black ${variants[variant]} ${className}`}
      href={href}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}
