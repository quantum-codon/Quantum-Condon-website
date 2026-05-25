import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { SEO } from "../components/Seo";
import {
  AdvantageSection,
  ApplicationsSection,
  FinalCtaSection,
  Footer,
  HeroSection,
  MarketSection,
  PlatformSection,
  ProblemSolutionSection,
  TechnologiesSection,
  TherapeuticsSection
} from "../components/HomeSections";

export default function IndexPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main>
        {/* Durg discovery */}
        <HeroSection />
        <ProblemSolutionSection />
        <TechnologiesSection />
        <PlatformSection />
        <TherapeuticsSection />
        <ApplicationsSection />
        <MarketSection />
        <AdvantageSection />
        <FinalCtaSection />
        {/* Durg discovery */}
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => (
  <SEO
    title="Quantum Codon (QuantumCodon) | Biology's code. We write it."
    description="Quantum Codon, also written as QuantumCodon, combines dark genome mining, quantum computing, and AI to unlock novel therapeutics across disease areas faster and more precisely."
    pathname="/"
    image="/quantum-codon-hero-dna.png"
    keywords={[
      "Quantum Codon",
      "QuantumCodon",
      "Quantum Codon Pvt Ltd",
      "dark genome mining",
      "AI drug discovery",
      "quantum computing therapeutics",
      "novel therapeutics"
    ]}
  />
);
