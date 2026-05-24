import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/HomeSections";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { ButtonLink } from "../components/ButtonLink";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import {
  analyticalCapabilities,
  analyticalChallenges,
  analyticalCommitments,
  analyticalFlow,
  analyticalImpact,
  analyticalSolutions,
  analyticalWorkflow,
  type AnalyticalCard as AnalyticalCardData
} from "../data/analyticalServices";

function AnalyticalCard({
  card,
  delay = 0,
  className = ""
}: {
  card: AnalyticalCardData;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={`analytical-card group relative overflow-hidden rounded-2xl p-7 ${className}`}>
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
          <Icon name={card.icon} className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold leading-tight text-white">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
      </div>
    </Reveal>
  );
}

function AnalyticalCapabilityCard({ card, delay }: { card: AnalyticalCardData; delay: number }) {
  return (
    <Reveal delay={delay} className="analytical-capability-card group relative min-h-[330px] overflow-hidden rounded-2xl">
      {card.image ? (
        <img
          src={card.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.08)_0%,rgba(2,5,16,0.2)_42%,rgba(2,5,16,0.88)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.24)_0%,rgba(2,5,16,0)_44%,rgba(2,5,16,0.14)_100%)]" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-7">
        <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-200">{card.description}</p>
      </div>
    </Reveal>
  );
}

function AnalyticalSummaryPanel({
  title,
  highlight,
  cards,
  image,
  delay = 0
}: {
  title: string;
  highlight: string;
  cards: AnalyticalCardData[];
  image: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="analytical-summary-panel relative overflow-hidden rounded-2xl p-6 md:p-8">
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-75 md:w-[58%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.94)_0%,rgba(2,5,16,0.82)_42%,rgba(2,5,16,0.36)_72%,rgba(2,5,16,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.08)_0%,rgba(2,5,16,0.16)_54%,rgba(2,5,16,0.86)_100%)]" />
      <div className="relative z-10">
        <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-4xl">
          {title} <span className="text-codon-red">{highlight}</span>
        </h2>
        <div className="mt-6 grid max-w-[560px] gap-5">
          {cards.map((card) => (
            <div key={card.title} className="flex gap-5">
              <div className="analytical-summary-icon flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-codon-cyan md:h-20 md:w-20">
                <Icon name={card.icon} className="h-8 w-8 md:h-9 md:w-9" />
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300 md:text-base md:leading-7">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function AnalyticalHero() {
  return (
    <section
      id="top"
      className="hero-section analytical-hero relative min-h-[calc(100svh-5rem)] overflow-hidden py-10 md:h-[600px] md:min-h-[386px] md:py-0"
    >
      <BackgroundVideo
        src="/analytical_hero.mp4"
        poster="/quantum-codon-hero-dna.png"
        className="hero-video-layer analytical-video-layer"
        videoClassName="hero-background-video analytical-background-video"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.98)_0%,rgba(2,5,16,0.96)_26%,rgba(2,5,16,0.86)_35%,rgba(2,5,16,0.54)_44%,rgba(2,5,16,0.2)_55%,rgba(2,5,16,0.04)_70%,rgba(2,5,16,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.05)_0%,rgba(2,5,16,0)_62%,rgba(2,5,16,0.48)_88%,rgba(2,5,16,0.98)_100%),radial-gradient(circle_at_76%_50%,rgba(255,48,79,0.08),transparent_25rem),radial-gradient(circle_at_51%_76%,rgba(30,139,255,0.08),transparent_18rem)]" />

      <div className="section-wrap relative z-10 flex min-h-[inherit] items-start md:h-full md:items-center">
        <Reveal className="w-full max-w-[720px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-codon-cyan/80">
            Analytical Services
          </p>
          <h1 className="max-w-[700px] text-balance text-[46px] font-semibold leading-[1.02] text-white sm:text-[58px] md:text-7xl">
            Precision in <span className="blue-red-text">Every Molecule</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Analytical services for tomorrow's therapeutics - combining bioanalysis, AI-driven insights, and
            audit-ready reporting to accelerate drug discovery.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#services" className="w-full sm:w-auto">
              Explore Services
            </ButtonLink>
            <ButtonLink href="#partner" variant="secondary" className="w-full sm:w-auto">
              Request Partnership
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function UnseenFrontierSection() {
  return (
    <section className="analytical-frontier-section py-16 ">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <Reveal className="max-w-xl">
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-5xl ">
            <span className="blue-red-text">The Unseen Frontier</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              Every therapeutic that reaches a patient is built on a foundation of analytical certainty. Behind every
              clinical milestone, regulatory approval, and breakthrough discovery lies a critical layer of data -
              invisible to the world, but indispensable to science.
            </p>
            <p>
              Analytical data is not a commodity. It is the backbone of every decision made in drug development.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="analytical-frontier-flow relative">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {analyticalFlow.map((item) => (
              <div key={item.title} className="analytical-frontier-card group relative min-h-[230px] overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.04)_0%,rgba(2,5,16,0.2)_38%,rgba(2,5,16,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(88,215,255,0.14),transparent_11rem),radial-gradient(circle_at_88%_78%,rgba(255,48,79,0.14),transparent_12rem)]" />
                <div className="relative z-10 flex h-full items-end p-6">
                  <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl xl:text-xl 2xl:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChallengeSection() {
  return (
    <section className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The challenge"
          title={<span>Navigating Complexity in<span className="blue-red-text"> Drug Development</span></span>}
          description="Modern therapeutic programs require clearer analytical evidence, faster decisions, and stronger confidence at every stage."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {analyticalChallenges.map((card, index) => (
            <AnalyticalCard key={card.title} card={card} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  return (
    <section className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Our solution"
          title={<span>A Tech-First Approach to <span className="blue-red-text">Bioanalysis</span></span>}
          description="Quantum Codon Analytical Services brings together advanced analytical capabilities, transparent reporting, and AI-assisted data interpretation to help biotech teams move from complex biological questions to clear development decisions."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {analyticalSolutions.map((card, index) => (
            <AnalyticalCard key={card.title} card={card} delay={index * 0.08} className="min-h-[280px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="services" className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Advanced analytical capabilities"
          title={<span>High-integrity assays for complex <span className="blue-red-text">molecular programs</span></span>}
          description="A practical analytical stack for emerging modalities, translational teams, and partner-ready development decisions."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {analyticalCapabilities.map((card, index) => (
            <AnalyticalCapabilityCard key={card.title} card={card} delay={index * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Platform workflow"
          title={<span>From sample intake to <span className="blue-red-text">audit-ready reports</span></span>}
          description="A clear operating model for turning complex molecular inputs into aligned scientific and business decisions."
        />
        <div className="relative grid gap-5 lg:grid-cols-5">
          {analyticalWorkflow.map((step, index) => (
            <React.Fragment key={step.title}>
              <Reveal delay={index * 0.06} className="analytical-step relative min-h-[286px] overflow-hidden rounded-2xl p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-cyan/25 bg-codon-blue/10 text-codon-cyan">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                  <span className="pipeline-pulse mt-auto block h-px w-full bg-gradient-to-r from-codon-cyan via-codon-red to-transparent" />
                </div>
              </Reveal>
              {index < analyticalWorkflow.length - 1 ? (
                <div
                  className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 lg:block"
                  style={{ left: `${(index + 1) * 20 - 1.1}%` }}
                >
                  <ArrowRight className="h-6 w-6 text-codon-cyan pipeline-pulse" aria-hidden="true" />
                </div>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="py-16 ">
      <div className="section-wrap grid gap-6 xl:grid-cols-2">
        <AnalyticalSummaryPanel
          title="Accelerating Your Journey to"
          highlight="Market"
          cards={analyticalImpact}
          image="/precision_last/solution.png"
        />
        <AnalyticalSummaryPanel
          title="A Partnership Built on Trust and"
          highlight="Expertise"
          cards={analyticalCommitments}
          image="/precision_last/partner.png"
          delay={0.08}
        />
      </div>
    </section>
  );
}

function AnalyticalFinalCta() {
  return (
    <section id="partner" className="py-16 ">
      <div className="section-wrap">
        <Reveal className="footer-cta-card analytical-final-cta relative overflow-hidden rounded-3xl p-8 shadow-card md:p-12 lg:p-16">
          <div className="analytical-particles absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-cyan/80">
              Analytical partnership
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              The Future of Therapeutics <span className="blue-red-text">Starts Here</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Partner with Quantum Codon to transform complex analytical challenges into clear pathways for
              groundbreaking therapies. Let's accelerate discovery and bring life-changing treatments to patients
              faster.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="mailto:partners@quantumcodon.example">Start a Partnership</ButtonLink>
              <ButtonLink href="mailto:analytical@quantumcodon.example" variant="secondary">
                Contact Analytical Services
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function AnalyticalServicesPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main>
        <AnalyticalHero />
        <UnseenFrontierSection />
        <ChallengeSection />
        <SolutionSection />
        <CapabilitiesSection />
        <WorkflowSection />
        <ImpactSection />
        <AnalyticalFinalCta />
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Analytical Services | Quantum Codon</title>
    <meta
      name="description"
      content="Quantum Codon Analytical Services combines bioanalysis, AI-driven insights, and audit-ready reporting to accelerate therapeutic development."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);
