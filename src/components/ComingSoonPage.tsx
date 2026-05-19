import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./HomeSections";
import { ButtonLink } from "./ButtonLink";

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function ComingSoonPage({ eyebrow, title, description }: ComingSoonPageProps) {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-codon-black py-20">
        <section className="section-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-cyan/80">{eyebrow}</p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{description}</p>
            <div className="mt-9 flex justify-center">
              <ButtonLink href="/">Back to Home</ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
