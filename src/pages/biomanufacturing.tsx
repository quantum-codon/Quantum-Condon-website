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
  bioApproachCards,
  bioExpertiseCards,
  bioindustrialFlow,
  bioInvestmentFocus,
  bioMarketCards,
  bioMissionCards,
  bioWorkflow,
  type BioCard as BioCardData,
  type BioMarketCard
} from "../data/biomanufacturing";

function BioCard({
  card,
  delay = 0,
  className = ""
}: {
  card: BioCardData;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={`bio-card group relative overflow-hidden rounded-2xl p-7 ${className}`}>
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-orange/35 bg-codon-orange/10 text-codon-orange">
          <Icon name={card.icon} className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold leading-tight text-white">{card.title}</h3>
        {card.description ? <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p> : null}
      </div>
    </Reveal>
  );
}

function BioMarketCardView({ card, delay }: { card: BioMarketCard; delay: number }) {
  return (
    <Reveal delay={delay} className="bio-market-card group relative overflow-hidden rounded-2xl p-6">
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-4xl font-semibold leading-none text-codon-cyan">{card.value}</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-white">{card.title}</h3>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-codon-orange/30 bg-codon-orange/10 text-codon-orange">
            <Icon name={card.icon} className="h-6 w-6" />
          </div>
        </div>
        <p className="text-sm leading-7 text-slate-300">{card.description}</p>
      </div>
    </Reveal>
  );
}

function BiomanufacturingHero() {
  return (
    <section
      id="top"
      className="hero-section bio-hero relative min-h-[calc(100svh-5rem)] overflow-hidden py-10 md:h-[600px] md:min-h-[386px] md:py-0"
    >
      <BackgroundVideo
        src="/bio_manufactoring.mp4"
        poster="/quantum-codon-hero-dna.png"
        className="hero-video-layer bio-video-layer"
        videoClassName="hero-background-video bio-background-video"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.98)_0%,rgba(2,5,16,0.96)_26%,rgba(2,5,16,0.86)_35%,rgba(2,5,16,0.52)_46%,rgba(2,5,16,0.18)_59%,rgba(2,5,16,0.04)_74%,rgba(2,5,16,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.05)_0%,rgba(2,5,16,0)_62%,rgba(2,5,16,0.48)_88%,rgba(2,5,16,0.98)_100%),radial-gradient(circle_at_76%_50%,rgba(255,138,61,0.08),transparent_25rem),radial-gradient(circle_at_51%_76%,rgba(30,139,255,0.08),transparent_18rem)]" />

      <div className="section-wrap relative z-10 flex min-h-[inherit] items-start md:h-full md:items-center">
        <Reveal className="w-full max-w-[720px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-codon-orange/85">
            Bioindustrial execution platform
          </p>
          <h1 className="max-w-[680px] text-balance text-[44px] font-semibold leading-[1.02] text-white sm:text-[58px] md:text-7xl">
            Biomanufacturing: <span className="blue-red-text">Engineering the Future, Today.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Where breakthrough science meets industrial-scale execution - powering the next era of sustainable industry.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#platform" className="w-full sm:w-auto">
              Explore Platform
            </ButtonLink>
            <ButtonLink href="#partner" variant="secondary" className="w-full sm:w-auto">
              Partner With Us
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BioRevolutionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-codon-orange/85">
            The shift is happening now
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            The Dawn of the <span className="blue-red-text">Bioindustrial Revolution</span>
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              The world is shifting. Traditional industries worth trillions are urgently seeking sustainable,
              nature-based solutions to replace legacy processes that can no longer scale without consequence.
            </p>
            <p>
              Biology is no longer just a science - it is becoming the platform for the next industrial revolution.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="bio-flow relative overflow-hidden rounded-3xl p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-4">
            {bioindustrialFlow.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-codon-black/45 p-5 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-orange/30 bg-codon-orange/10 text-codon-orange">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{item.title}</h3>
                </div>
                {index < bioindustrialFlow.length - 1 ? (
                  <div className="pointer-events-none absolute -right-5 top-1/2 z-20 hidden -translate-y-1/2 md:block">
                    <ArrowRight className="h-6 w-6 text-codon-cyan pipeline-pulse" aria-hidden="true" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Our mission"
          title={<span>Nature's Chemistry, <span className="blue-red-text">Scaled for Impact</span></span>}
          description="Quantum Codon connects discovery, infrastructure, and execution so biology can move from promising science to industrial reality."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {bioMissionCards.map((card, index) => (
            <BioCard key={card.title} card={card} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustrialScaleSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap">
        <Reveal className="bio-industrial-scale relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="bio-particles absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-codon-orange/85">
                Industrial scale
              </p>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                Where Innovation Meets <span className="blue-red-text">Industrial Scale</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                State-of-the-art infrastructure designed to bring ambitious biotech ventures to life at global scale.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Bioreactors", "Fermentation tanks", "AI control panels", "Manufacturing floor"].map((label, index) => (
                <div key={label} className="bio-dashboard min-h-32 rounded-2xl p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-codon-cyan/70">
                    System 0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{label}</h3>
                  <span className="pipeline-pulse mt-6 block h-px bg-gradient-to-r from-codon-cyan via-codon-red to-codon-orange" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MarketOpportunitySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Market opportunity"
          title={<span>The Opportunity: <span className="blue-red-text">Trillions in Disruption</span></span>}
          description="Bioindustrial execution sits across large incumbent markets that are actively searching for sustainable replacements and resilient supply chains."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {bioMarketCards.map((card, index) => (
            <BioMarketCardView key={card.title} card={card} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Our approach"
          title={<span>Beyond Capital: <span className="blue-red-text">Building Ecosystems</span></span>}
          description="Quantum Codon builds coordination infrastructure that connects science, manufacturing, and capital into one executable platform."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {bioApproachCards.map((card, index) => (
            <BioCard key={card.title} card={card} delay={index * 0.08} className="min-h-[280px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExecutionWorkflowSection() {
  return (
    <section id="platform" className="py-16 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Execution operating system"
          title={<span>The Operating System for <span className="blue-red-text">Biotech Execution</span></span>}
          description="An integrated execution engine that synchronizes every critical node - from discovery to deployment - into one coordinated platform."
        />
        <div className="relative grid gap-5 lg:grid-cols-5">
          {bioWorkflow.map((step, index) => (
            <React.Fragment key={step.title}>
              <Reveal delay={index * 0.06} className="bio-step relative min-h-[310px] overflow-hidden rounded-2xl p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-orange/30 bg-codon-orange/10 text-codon-orange">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                  <span className="pipeline-pulse mt-auto block h-px w-full bg-gradient-to-r from-codon-cyan via-codon-red to-codon-orange" />
                </div>
              </Reveal>
              {index < bioWorkflow.length - 1 ? (
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

function InvestmentFocusSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Investment focus"
          title={<span>Driving the <span className="blue-red-text">Bioindustrial Revolution</span></span>}
          description="We focus on category-creating companies where biology, engineering, and computation converge - spanning sustainable biochemicals, advanced materials, industrial enzymes, and next-generation therapeutics."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {bioInvestmentFocus.map((card, index) => (
            <BioCard key={card.title} card={card} delay={index * 0.07} className="min-h-[286px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Core expertise"
          title="Our Core Expertise"
          description="A practical operating layer for teams facing the hardest parts of bioindustrial commercialization."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {bioExpertiseCards.map((card, index) => (
            <BioCard key={card.title} card={card} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BioFinalCta() {
  return (
    <section id="partner" className="py-16 md:py-24">
      <div className="section-wrap">
        <Reveal className="footer-cta-card bio-final-cta relative overflow-hidden rounded-3xl p-8 shadow-card md:p-12 lg:p-16">
          <div className="bio-particles absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-orange/85">
              Build with Quantum Codon
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              Build the Future of <span className="blue-red-text">Sustainable Industry</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              From the smallest strand of DNA to global industrial impact, Quantum Codon closes the distance between
              discovery and deployment.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="mailto:investors@quantumcodon.example">Request Investment Deck</ButtonLink>
              <ButtonLink href="mailto:partners@quantumcodon.example" variant="secondary">
                Schedule a Call
              </ButtonLink>
              <ButtonLink href="mailto:partners@quantumcodon.example" variant="secondary">
                Partner With Us
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function BiomanufacturingPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main>
        <BiomanufacturingHero />
        <BioRevolutionSection />
        <MissionSection />
        <IndustrialScaleSection />
        <MarketOpportunitySection />
        <ApproachSection />
        <ExecutionWorkflowSection />
        <InvestmentFocusSection />
        <ExpertiseSection />
        <BioFinalCta />
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Biomanufacturing | Quantum Codon</title>
    <meta
      name="description"
      content="Quantum Codon Biomanufacturing helps convert biological innovation into industrial-scale execution for sustainable industry."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);
