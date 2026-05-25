import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BackgroundVideo } from "./BackgroundVideo";
import {
  advantages,
  applicationCards,
  architectureSteps,
  footerLinks,
  marketCards,
  metrics,
  problemSolution,
  technologies,
  therapeuticCards
} from "../data/site";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function GlassCard({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`glass-panel group relative overflow-hidden rounded-2xl ${className}`}>
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      {children}
    </Reveal>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="hero-section relative min-h-[calc(100svh-5rem)] overflow-hidden py-10 md:h-[600px] md:min-h-[386px] md:py-0">
      <BackgroundVideo
        src="/hero_sec.mp4"
        poster="/quantum-codon-hero-dna.png"
        className="hero-video-layer"
        videoClassName="hero-background-video"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.98)_0%,rgba(2,5,16,0.96)_26%,rgba(2,5,16,0.86)_35%,rgba(2,5,16,0.54)_44%,rgba(2,5,16,0.2)_55%,rgba(2,5,16,0.04)_70%,rgba(2,5,16,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.05)_0%,rgba(2,5,16,0)_62%,rgba(2,5,16,0.48)_88%,rgba(2,5,16,0.98)_100%),radial-gradient(circle_at_76%_50%,rgba(255,48,79,0.06),transparent_25rem),radial-gradient(circle_at_51%_76%,rgba(30,139,255,0.08),transparent_18rem)]" />

      <div className="section-wrap relative z-10 flex min-h-[inherit] items-start md:h-full md:items-center">
        <Reveal className="w-full max-w-[530px]">
          <h1 className="max-w-[500px] text-balance text-[40px] font-semibold leading-[1.03] text-white sm:text-[52px] md:text-[60px] md:leading-[0.98]">
            Biology’s code.{" "}
            <span className="block blue-red-text">We write it.</span>
          </h1>
          <p className="mt-5 max-w-[470px] text-[15px] leading-7 text-slate-300 sm:text-base md:text-[17px] md:leading-8">
            Quantum Codon combines dark genome mining, quantum computing, and AI to unlock novel therapeutics across
            disease areas—faster and more precisely than ever.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#platform" className="!min-h-12 w-full px-6 py-3 text-sm sm:w-auto">
              Explore Platform
            </ButtonLink>
            <ButtonLink href="#partner" variant="secondary" className="!min-h-12 w-full px-6 py-3 text-sm sm:w-auto">
              Partner With Us
            </ButtonLink>
          </div>

          <div className="mt-7 grid max-w-[520px] gap-2.5 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="hero-metric-card gradient-border flex min-h-20 items-center gap-3 overflow-hidden rounded-lg p-3 backdrop-blur-xl transition duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
                  <Icon name={metric.icon} className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-2xl font-semibold leading-none text-white">{metric.value}</p>
                  <p className="mt-1.5 text-[10px] leading-[11px] text-slate-400">{metric.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ProblemSolutionSection() {
  return (
    <section className="relative -mt-px bg-codon-black py-10 md:py-8" aria-label="Problem to solution">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Problem to solution"
          title={<span id="problem-solution-heading">From pipeline fragility to new molecular<span className="blue-red-text"> territory</span></span>}
          description="Quantum Codon frames the discovery problem in business terms: less dependence on saturated target spaces, stronger prioritization, and clearer paths to validated candidates."
        />
        <div className="relative grid gap-5 lg:grid-cols-2 lg:gap-6">
          {problemSolution.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.1}
              className={`problem-solution-card problem-solution-card-${item.accent} group relative min-h-[250px] overflow-hidden rounded-xl`}
            >
              <img
                src={item.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${item.imageClass}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.82)_0%,rgba(2,5,16,0.72)_34%,rgba(2,5,16,0.42)_58%,rgba(2,5,16,0.12)_100%)]" />
              <div
                className={`absolute inset-0 ${
                  item.accent === "red"
                    ? "bg-[radial-gradient(circle_at_82%_46%,rgba(255,48,79,0.2),transparent_18rem)]"
                    : "bg-[radial-gradient(circle_at_62%_50%,rgba(30,139,255,0.2),transparent_17rem)]"
                }`}
              />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-7">
                <div className="flex items-start gap-6">
                  <div className={`problem-solution-icon problem-solution-icon-${item.accent}`}>
                    <Icon name={item.icon} className="h-9 w-9" />
                  </div>
                  <h3 className="max-w-[330px] text-2xl font-semibold leading-tight text-white md:text-[28px]">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-[390px] text-[15px] leading-6 text-slate-300 md:text-base md:leading-7">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal className="pointer-events-none absolute left-[46%] top-[45%] z-20 hidden -translate-x-[46%] -translate-y-[45%] lg:block">
            <div className="problem-solution-arrow flex h-[76px] w-[76px] items-center justify-center rounded-full bg-codon-black/90">
              <ArrowRight className="h-9 w-9 text-white" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function TechnologiesSection() {
  return (
    <section id="technologies" className="py-1 md:py-8">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Convergent technology"
          title={
            <>
              Three revolutionary technologies <span className="blue-red-text">converge</span>
            </>
          }
          description="Each capability is valuable on its own. Together, they form a discovery engine built for unexplored biology and faster evidence generation."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {technologies.map((technology, index) => (
            <GlassCard key={technology.title} delay={index * 0.08} className="p-7">
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
                  <Icon name={technology.icon} className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white">{technology.title}</h3>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {technology.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-codon-cyan shadow-[0_0_14px_rgba(88,215,255,0.8)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlatformSection() {
  return (
    <section id="platform" className="py-1 md:py-8">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Platform architecture"
          title={<span>A readable path from dark genome discovery to<span className="blue-red-text"> lab validation</span></span>}
          description="The platform is designed as a disciplined operating system: search broadly, simulate deeply, prioritize intelligently, and validate experimentally."
        />
        <div className="relative grid gap-5 lg:grid-cols-4">
          {architectureSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <GlassCard delay={index * 0.08} className="relative min-h-[260px] p-7">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                    <span className="architecture-step-icon flex h-14 w-14 items-center justify-center">
                      <img src={step.image} alt="" className="h-12 w-12 object-contain" loading="lazy" />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                  <div className="mt-auto pt-8">
                    <span className="pipeline-pulse block h-px w-full bg-gradient-to-r from-codon-cyan via-codon-red to-transparent" />
                  </div>
                </div>
              </GlassCard>
              {index < architectureSteps.length - 1 ? (
                <div className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 lg:block" style={{ left: `${(index + 1) * 25 - 1.4}%` }}>
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

export function TherapeuticsSection() {
  return (
    <section id="therapeutics" className="py-1 md:py-8">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Novel therapeutics"
          title="Therapeutic Pipeline"
          description="Quantum Codon’s discovery space supports a portfolio strategy across neglected infections, resistant pathogens, oncology targets, and neurodegenerative disease."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {therapeuticCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.07}
              className="therapeutic-card group relative min-h-[244px] overflow-hidden rounded-xl md:min-h-[256px]"
            >
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.03)_0%,rgba(2,5,16,0.2)_42%,rgba(2,5,16,0.88)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.24)_0%,rgba(2,5,16,0)_44%,rgba(2,5,16,0.14)_100%)]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5">
                <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-200">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ApplicationsSection() {
  return (
    <section id="applications" className="py-1 md:py-8">
      <div className="section-wrap">
        <Reveal className="beyond-therapeutics-band relative overflow-hidden rounded-2xl p-4 md:p-5">
          <div className="grid gap-4 lg:grid-cols-[1.02fr_1fr_1fr_1.2fr]">
            <div className="beyond-therapeutics-lead relative min-h-[240px] overflow-hidden rounded-xl">
              <img
                src="/beyond_therapeutics/beyond_therapeutics.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.62)_0%,rgba(2,5,16,0.26)_48%,rgba(2,5,16,0.32)_100%),linear-gradient(180deg,rgba(2,5,16,0.12),rgba(2,5,16,0.72))]" />
              <div className="relative z-10 flex h-full flex-col justify-between p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-codon-orange/90">Beyond</p>
                <h2 className="max-w-[240px] text-4xl font-semibold leading-[1.02] text-white">Beyond Therapeutics</h2>
              </div>
            </div>
            {applicationCards.map((card, index) => (
              <div
                key={card.title}
                className="beyond-therapeutics-card group relative min-h-[240px] overflow-hidden rounded-xl"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.78)_0%,rgba(2,5,16,0.5)_54%,rgba(2,5,16,0.22)_100%),linear-gradient(180deg,rgba(2,5,16,0.08)_0%,rgba(2,5,16,0.78)_100%)]" />
                <div className="relative z-10 flex h-full flex-col justify-center p-7">
                  <h3 className="max-w-[210px] text-2xl font-semibold leading-tight text-white">{card.title}</h3>
                  <p className="mt-5 max-w-[260px] text-base leading-7 text-slate-200">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function MarketSection() {
  return (
    <section className="py-1 md:py-8">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Market opportunity"
          title={<span>Massive untapped market <span className="blue-red-text"> opportunity</span></span>}
          description="A platform approach gives Quantum Codon multiple commercial paths while preserving the upside of first-mover position in an emerging molecular category."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {marketCards.map((card, index) => (
            <GlassCard key={card.title} delay={index * 0.07} className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-4 text-4xl font-semibold text-codon-cyan">{card.value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{card.description}</p>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-8 grid gap-8 p-8 md:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-codon-red/90">Featured insight</p>
            <h3 className="text-2xl font-semibold leading-tight text-white md:text-4xl">
              Our addressable market spans therapeutics, diagnostics, and industrial applications, with first-mover
              advantage in a new molecular space.
            </h3>
          </div>
          <div className="rounded-2xl border border-white/10 bg-codon-black/45 p-6">
            <div className="mb-6 flex items-center justify-between text-sm text-slate-400">
              <span>Market growth index</span>
              <span className="text-codon-red">CAGR ~12%</span>
            </div>
            <div className="flex h-52 items-end gap-3 border-b border-l border-white/10 px-3 pb-3">
              {[14, 21, 32, 45, 63, 86, 116, 154].map((height, index) => (
                <motion.div
                  key={height}
                  className="flex-1 rounded-t bg-gradient-to-t from-codon-blue via-codon-red to-codon-orange shadow-[0_0_24px_rgba(255,48,79,0.22)]"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}px` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-between text-xs text-slate-500">
              <span>2026</span>
              <span>2034</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

export function AdvantageSection() {
  return (
    <section className="py-1 md:py-8">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Competitive advantage"
          title={
            <>
              Compounding <span className="text-codon-red">competitive</span> advantage
            </>
          }
          description="The platform is designed to improve as data, validation, partnerships, and candidate feedback compound over time."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {advantages.map((card, index) => (
            <GlassCard key={card.title} delay={index * 0.05} className="p-6">
              <div className="competitive-advantage-icon mb-6 flex h-14 w-14 items-center justify-center">
                <img src={card.image} alt="" className="h-12 w-12 object-contain" loading="lazy" />
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="partner" className="py-1 md:py-8">
      <div className="section-wrap">
        <Reveal className="footer-cta-card lab-background relative overflow-hidden rounded-3xl p-8 shadow-card md:p-12 lg:p-16">
          <BackgroundVideo src="/footer_sec.mp4" videoClassName="footer-video-base" />
          <div className="absolute inset-0 bg-gradient-to-r from-codon-black/95 via-codon-black/62 to-codon-black/28" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(88,215,255,0.16),transparent_18rem),radial-gradient(circle_at_82%_42%,rgba(255,48,79,0.12),transparent_16rem)]" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-cyan/80">Join the platform</p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              Join us in <span className="blue-red-text">rewriting biology</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              We are building the future of medicine by unlocking the most powerful code of life. Partner with us to
              transform discovery and deliver life-changing therapies.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="mailto:partners@quantumcodon.example">Partner With Us</ButtonLink>
              <ButtonLink href="#careers" variant="secondary">
                Explore Careers
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer py-8">
      <div className="section-wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a href="/" className="inline-flex items-center" aria-label="Quantum Codon home">
          <img src="/brand_logo.png" alt="Quantum Codon" className="h-10 w-auto object-contain" />
        </a>
        <p className="text-sm text-slate-500">© 2026 Quantum Codon R&amp;D. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-400" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/company/quantumcodon/"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] text-slate-300 transition hover:border-codon-cyan/45 hover:text-white"
          >
            <Icon name="Linkedin" className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@quantumcodon.in"
            aria-label="Email Quantum Codon"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] text-slate-300 transition hover:border-codon-cyan/45 hover:text-white"
          >
            <Icon name="Mail" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
