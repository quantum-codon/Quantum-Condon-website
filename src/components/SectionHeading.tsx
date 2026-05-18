import * as React from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", className = "" }: SectionHeadingProps) {
  return (
    <Reveal
      className={`mx-auto mb-8 md:mb-12 ${align === "center" ? "max-w-3xl text-center" : "max-w-2xl text-left"} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-codon-cyan/80 sm:text-xs sm:tracking-[0.3em]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-[28px] font-semibold leading-tight text-white sm:text-3xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-[15px] leading-7 text-slate-300 md:mt-5 md:text-lg md:leading-8">{description}</p> : null}
    </Reveal>
  );
}
