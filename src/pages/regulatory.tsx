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
  investorConfidenceCards,
  regulatoryAudienceCards,
  regulatoryBadges,
  regulatoryCoverageCards,
  regulatoryExperts,
  regulatoryFinalTags,
  regulatoryMetrics,
  regulatoryPositioningFlow,
  regulatoryPrecisionCards,
  regulatoryProcess,
  type RegulatoryCard as RegulatoryCardData,
  type RegulatoryMetric
} from "../data/regulatory";

function RegulatoryCard({
  card,
  delay = 0,
  className = ""
}: {
  card: RegulatoryCardData;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={`regulatory-card group relative overflow-hidden rounded-2xl p-7 ${className}`}>
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

function RegulatoryMetricCard({ card, delay }: { card: RegulatoryMetric; delay: number }) {
  return (
    <Reveal delay={delay} className="regulatory-metric-card group relative overflow-hidden rounded-2xl p-6">
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-4xl font-semibold leading-none text-codon-cyan">{card.value}</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-white">{card.title}</h3>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-codon-red/30 bg-codon-red/10 text-codon-red">
            <Icon name={card.icon} className="h-6 w-6" />
          </div>
        </div>
        <p className="text-sm leading-7 text-slate-300">{card.description}</p>
      </div>
    </Reveal>
  );
}

function RegulatoryCoverageCard({ card, delay }: { card: RegulatoryCardData; delay: number }) {
  return (
    <Reveal delay={delay} className="regulatory-coverage-card group relative overflow-hidden rounded-2xl">
      <div className="regulatory-coverage-media relative z-10 h-44 overflow-hidden md:h-48">
        {card.image ? (
          <img
            src={card.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0)_0%,rgba(2,5,16,0.18)_48%,rgba(2,5,16,0.86)_100%)]" />
      </div>
      <div className="relative z-10 p-6 md:p-7">
        <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
        <p className="mt-4 text-base leading-8 text-slate-300">{card.description}</p>
      </div>
    </Reveal>
  );
}

function RegulatoryHero() {
  return (
    <section
      id="top"
      className="hero-section regulatory-hero relative min-h-[calc(100svh-5rem)] overflow-hidden py-10 md:h-[600px] md:min-h-[386px] md:py-0"
    >
      <BackgroundVideo
        src="/regulatory_hero_sec.mp4"
        poster="/quantum-codon-hero-dna.png"
        className="hero-video-layer regulatory-video-layer"
        videoClassName="hero-background-video regulatory-background-video"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.98)_0%,rgba(2,5,16,0.96)_26%,rgba(2,5,16,0.86)_35%,rgba(2,5,16,0.54)_44%,rgba(2,5,16,0.2)_55%,rgba(2,5,16,0.04)_70%,rgba(2,5,16,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.05)_0%,rgba(2,5,16,0)_62%,rgba(2,5,16,0.48)_88%,rgba(2,5,16,0.98)_100%),radial-gradient(circle_at_76%_50%,rgba(255,48,79,0.08),transparent_25rem),radial-gradient(circle_at_51%_76%,rgba(30,139,255,0.08),transparent_18rem)]" />

      <div className="section-wrap relative z-10 flex min-h-[inherit] items-start md:h-full md:items-center">
        <Reveal className="w-full max-w-[760px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-codon-cyan/80">
            Regulatory strategy
          </p>
          <h1 className="max-w-[720px] text-balance text-[42px] font-semibold leading-[1.02] text-white sm:text-[56px] md:text-7xl">
            Navigating the Future of <span className="blue-red-text">Bio-Innovation</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Your regulatory compass for biotech, biomanufacturing, and BioAI - transforming complex compliance pathways
            into investor-ready, market-ready strategy.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#consultation" className="w-full sm:w-auto">
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href="mailto:investors@quantumcodon.example" variant="secondary" className="w-full sm:w-auto">
              Download Investor Deck
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PrecisionSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Why regulatory precision matters"
          title={<span>The Bio-Revolution Demands Precision. <span className="blue-red-text">We Provide It.</span></span>}
          description="The biotech, biomanufacturing, and BioAI sectors are growing rapidly, but regulatory complexity remains one of the biggest hurdles for startups seeking investment, approval, and market entry. We convert uncertainty into structured regulatory pathways that founders, investors, and boards can trust."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {regulatoryPrecisionCards.map((card, index) => (
            <RegulatoryCard key={card.title} card={card} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorConfidenceSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Investor confidence"
          title={<span>Investor Confidence <span className="blue-red-text">Starts Here</span></span>}
          description="We bridge the gap between breakthrough science and investor readiness. Our understanding of global regulatory frameworks helps position ventures for de-risked growth, stronger due diligence, and clearer commercialization milestones."
        />
        <Reveal className="mb-8 flex flex-wrap justify-center gap-3">
          {regulatoryBadges.map((badge) => (
            <span key={badge} className="regulatory-badge rounded-full px-4 py-2 text-sm font-semibold text-slate-100">
              {badge}
            </span>
          ))}
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {investorConfidenceCards.map((card, index) => (
            <RegulatoryCard key={card.title} card={card} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Regulatory coverage"
          title={<span>Unlocking Your Company's <span className="blue-red-text">Potential</span></span>}
          description="Specialized expertise across the full spectrum of bio-innovation - from molecule to market."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {regulatoryCoverageCards.map((card, index) => (
            <RegulatoryCoverageCard key={card.title} card={card} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PositioningSection() {
  return (
    <section className="py-16">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-codon-cyan/80">
            Strategic positioning
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Where Innovation Meets <span className="blue-red-text">Regulation</span>
          </h2>
          <p className="mt-7 text-base leading-8 text-slate-300 md:text-lg">
            At the intersection of cutting-edge science and strategic compliance, Quantum Codon builds the foundation
            that attracts capital, accelerates approvals, and drives long-term enterprise value.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="regulatory-flow relative overflow-hidden rounded-3xl p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-4">
            {regulatoryPositioningFlow.map((item, index) => (
              <div key={item.title} className="relative">
                <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-codon-black/45 p-5 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{item.title}</h3>
                </div>
                {index < regulatoryPositioningFlow.length - 1 ? (
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

function ProvenProcessSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Proven process"
          title={<span>Our Proven Process: From Vision to <span className="blue-red-text">Validation</span></span>}
          description="A structured, milestone-driven methodology that transforms regulatory complexity into competitive advantage."
        />
        <div className="relative grid gap-5 lg:grid-cols-5">
          {regulatoryProcess.map((step, index) => (
            <React.Fragment key={step.title}>
              <Reveal delay={index * 0.06} className="regulatory-step relative min-h-[316px] overflow-hidden rounded-2xl p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-red/30 bg-codon-red/10 text-codon-red">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                  <span className="pipeline-pulse mt-auto block h-px w-full bg-gradient-to-r from-codon-cyan via-codon-red to-codon-orange" />
                </div>
              </Reveal>
              {index < regulatoryProcess.length - 1 ? (
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

function MetricsSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="De-risking metrics"
          title={<span>Every Complex Journey Has a <span className="blue-red-text">Clear Path Forward</span></span>}
          description="Regulatory uncertainty is one of the greatest threats to biotech investment returns. We convert uncertainty into structured, predictable milestones - giving investors visibility and founders confidence to move decisively."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {regulatoryMetrics.map((card, index) => (
            <RegulatoryMetricCard key={card.title} card={card} delay={index * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertTeamSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Expert team"
          title="Meet the Architects of Your Regulatory Success"
          description="Practical regulatory leadership for founders and investors navigating high-stakes bio-innovation."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {regulatoryExperts.map((card, index) => (
            <RegulatoryCard key={card.title} card={card} delay={index * 0.07} className="min-h-[286px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCtaSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Audience alignment"
          title={<span>Partner With Us. Accelerate Your <span className="blue-red-text">Investment Trajectory.</span></span>}
          description="Our regulatory expertise becomes a competitive asset - from Series A readiness to IPO-grade compliance posture."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {regulatoryAudienceCards.map((card, index) => (
            <RegulatoryCard key={card.title} card={card} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RegulatoryFinalCta() {
  return (
    <section id="consultation" className="py-16 md:py-24">
      <div className="section-wrap">
        <Reveal className="footer-cta-card regulatory-final-cta relative overflow-hidden rounded-3xl p-8 shadow-card md:p-12 lg:p-16">
          <div className="regulatory-particles absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 max-w-5xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-cyan/80">
              Regulatory command center
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              The Future of Bio-Innovation Is <span className="blue-red-text">Regulated, Funded, and Built Here.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {regulatoryFinalTags.map((tag) => (
                <span key={tag} className="regulatory-badge rounded-full px-4 py-2 text-sm font-semibold text-slate-100">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="mailto:regulatory@quantumcodon.example">Schedule a Consultation</ButtonLink>
              <ButtonLink href="mailto:investors@quantumcodon.example" variant="secondary">
                Download Investor Deck
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function RegulatoryPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main>
        <RegulatoryHero />
        <PrecisionSection />
        <InvestorConfidenceSection />
        <CoverageSection />
        <PositioningSection />
        <ProvenProcessSection />
        <MetricsSection />
        <ExpertTeamSection />
        <AudienceCtaSection />
        <RegulatoryFinalCta />
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Regulatory Strategy | Quantum Codon</title>
    <meta
      name="description"
      content="Quantum Codon regulatory strategy services help biotech, biomanufacturing, and BioAI ventures turn complex compliance pathways into investor-ready strategy."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);
