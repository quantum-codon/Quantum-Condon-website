import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/HomeSections";
import { ButtonLink } from "../components/ButtonLink";
import { SEO } from "../components/Seo";

export default function NotFoundPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-codon-black py-20">
        <section className="section-wrap">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-cyan/80">
              Page not found
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              This page is outside the mapped genome.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              The page you requested does not exist yet. Return to the homepage to continue exploring Quantum Codon.
            </p>
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

export const Head: HeadFC = () => (
  <SEO
    title="Page Not Found | Quantum Codon"
    description="The requested Quantum Codon page could not be found."
    pathname="/404/"
    noindex
  />
);
