import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
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
  <>
    <html lang="en" />
    <title>Quantum Codon | Biology’s code. We write it.</title>
    <meta
      name="description"
      content="Quantum Codon combines dark genome mining, quantum computing, and AI to unlock novel therapeutics across disease areas."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);
