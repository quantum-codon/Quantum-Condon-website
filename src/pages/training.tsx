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
import { SEO } from "../components/Seo";
import {
  enrollmentCards,
  trainingAdvantages,
  trainingFlow,
  trainingJourney,
  trainingPlacementMetrics,
  trainingSpecializations,
  trainingTestimonials,
  type TrainingCard as TrainingCardData,
  type TrainingMetric,
  type TrainingTestimonial
} from "../data/training";

function TrainingCard({
  card,
  delay = 0,
  className = ""
}: {
  card: TrainingCardData;
  delay?: number;
  className?: string;
}) {
  return (
    <Reveal delay={delay} className={`training-card group relative overflow-hidden rounded-2xl p-7 ${className}`}>
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

function MetricCard({ card, delay }: { card: TrainingMetric; delay: number }) {
  return (
    <Reveal delay={delay} className="training-metric-card group relative overflow-hidden rounded-2xl p-6">
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-4xl font-semibold leading-none text-codon-cyan">{card.value}</p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-white">{card.title}</h3>
          </div>
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
            <Icon name={card.icon} className="h-6 w-6" />
          </div>
        </div>
        <p className="text-sm leading-7 text-slate-300">{card.description}</p>
      </div>
    </Reveal>
  );
}

function TestimonialCard({ testimonial, delay }: { testimonial: TrainingTestimonial; delay: number }) {
  return (
    <Reveal delay={delay} className="training-card group relative overflow-hidden rounded-2xl p-7">
      <span className="accent-line opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-red/35 bg-codon-red/10 text-codon-red">
          <Icon name={testimonial.icon} className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-semibold leading-tight text-white">{testimonial.title}</h3>
        <p className="mt-5 text-base leading-8 text-slate-300">"{testimonial.quote}"</p>
        <p className="mt-5 text-sm font-semibold text-codon-cyan">{testimonial.attribution}</p>
      </div>
    </Reveal>
  );
}

function TrainingHero() {
  return (
    <section
      id="top"
      className="hero-section training-hero relative min-h-[calc(100svh-5rem)] overflow-hidden py-10 md:h-[600px] md:min-h-[386px] md:py-0"
    >
      <BackgroundVideo
        src="/training_hero.mp4"
        poster="/quantum-codon-hero-dna.png"
        className="hero-video-layer training-video-layer"
        videoClassName="hero-background-video training-background-video"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.98)_0%,rgba(2,5,16,0.96)_26%,rgba(2,5,16,0.86)_35%,rgba(2,5,16,0.54)_44%,rgba(2,5,16,0.2)_55%,rgba(2,5,16,0.04)_70%,rgba(2,5,16,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.05)_0%,rgba(2,5,16,0)_62%,rgba(2,5,16,0.48)_88%,rgba(2,5,16,0.98)_100%),radial-gradient(circle_at_76%_50%,rgba(255,48,79,0.08),transparent_25rem),radial-gradient(circle_at_51%_76%,rgba(30,139,255,0.08),transparent_18rem)]" />

      <div className="section-wrap relative z-10 flex min-h-[inherit] items-start md:h-full md:items-center">
        <Reveal className="w-full max-w-[790px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-codon-cyan/80">
            Certificate training programs
          </p>
          <h1 className="max-w-[780px] text-balance text-[42px] font-semibold leading-[1.02] text-white sm:text-[56px] md:text-7xl">
            Transform Your Career in <span className="blue-red-text">Biotech, Chemical & BioAI</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Short-term certificate programs designed for scientists, researchers, engineers, and professionals ready to
            lead the next wave of biotechnology and AI-powered innovation.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#programs" className="w-full sm:w-auto">
              Explore Programs
            </ButtonLink>
            <ButtonLink href="#advisor" variant="secondary" className="w-full sm:w-auto">
              Talk to an Advisor
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyNowSection() {
  return (
    <section className="py-16">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-codon-cyan/80">Why now</p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            The Future Is Now: Master In-Demand Skills in <span className="blue-red-text">Weeks, Not Years</span>
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-slate-300 md:text-lg">
            <p>
              The biotech and AI landscape is evolving at an unprecedented pace. Scientists, researchers, engineers, and
              aspiring professionals need practical skills that connect biology, chemistry, computation, and real-world
              product development.
            </p>
            <p>
              Our short-term certificate programs are built to help learners gain industry-relevant skills, build
              practical projects, and prepare for opportunities in biotech, pharma, chemical sciences, and BioAI.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="training-flow relative overflow-hidden rounded-3xl p-5 md:p-7">
          <div className="grid gap-4 md:grid-cols-3">
            {trainingFlow.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="relative z-10 h-full rounded-2xl border border-white/10 bg-codon-black/45 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
                </div>
                {index < trainingFlow.length - 1 ? (
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

function AdvantageSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Program advantage"
          title="Why Choose Our Programs? Real Skills, Real Impact."
          description="A premium short-term training model built around practical skills, technical confidence, mentorship, and employability."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trainingAdvantages.map((card, index) => (
            <TrainingCard key={card.title} card={card} delay={index * 0.07} className="min-h-[280px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecializationsSection() {
  return (
    <section id="programs" className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Specializations"
          title={<span>Programs Designed to <span className="blue-red-text">Ignite Your Future</span></span>}
          description="Choose from high-impact specializations across the frontier of life sciences, AI, and chemistry. Each program is designed for professionals who want to move fast and lead confidently."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trainingSpecializations.map((card, index) => (
            <TrainingCard key={card.title} card={card} delay={index * 0.05} className="min-h-[286px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningJourneySection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Learning journey"
          title={<span>From Bench to <span className="blue-red-text">Breakthrough</span></span>}
          description="Bridge the gap between classical science and the AI-powered future. Our programs sit at the intersection of biology, chemistry, computation, and practical industry execution."
        />
        <div className="relative grid gap-5 lg:grid-cols-5">
          {trainingJourney.map((step, index) => (
            <React.Fragment key={step.title}>
              <Reveal delay={index * 0.06} className="training-step relative min-h-[292px] overflow-hidden rounded-2xl p-6">
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-cyan/25 bg-codon-blue/10 text-codon-cyan">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                  <span className="pipeline-pulse mt-auto block h-px w-full bg-gradient-to-r from-codon-cyan via-codon-red to-codon-orange" />
                </div>
              </Reveal>
              {index < trainingJourney.length - 1 ? (
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

function PlacementSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Training & placement"
          title={<span>Your Career Launchpad: <span className="blue-red-text">Placement Excellence</span></span>}
          description="The programs are designed around skills, project evidence, and employer-facing readiness."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {trainingPlacementMetrics.map((card, index) => (
            <MetricCard key={card.title} card={card} delay={index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section className="py-16">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Success stories"
          title="Real People. Real Transformations."
          description="Learners leave with practical confidence, stronger portfolios, and a clearer path into biotech and BioAI roles."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {trainingTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.title} testimonial={testimonial} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EnrollmentCtaSection() {
  return (
    <section id="advisor" className="py-16">
      <div className="section-wrap">
        <Reveal className="footer-cta-card training-final-cta relative overflow-hidden rounded-3xl p-8 shadow-card md:p-12 lg:p-16">
          <div className="training-particles absolute inset-0" aria-hidden="true" />
          <div className="relative z-10">
            <div className="max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-codon-cyan/80">
                Enrollment
              </p>
              <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
                Ready to Innovate? Enroll Today and <span className="blue-red-text">Shape Tomorrow.</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {enrollmentCards.map((card, index) => (
                <TrainingCard key={card.title} card={card} delay={index * 0.06} />
              ))}
            </div>

            <p className="mt-9 max-w-3xl text-lg leading-8 text-slate-300">
              Applications are open now. Cohort sizes are limited to ensure quality mentorship and hands-on attention
              for every learner.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="mailto:admissions@quantumcodon.example">Apply Now</ButtonLink>
              <ButtonLink href="mailto:admissions@quantumcodon.example" variant="secondary">
                Download Program Guide
              </ButtonLink>
              <ButtonLink href="#programs" variant="secondary">
                Explore All Programs
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function TrainingPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main>
        <TrainingHero />
        <WhyNowSection />
        <AdvantageSection />
        <SpecializationsSection />
        <LearningJourneySection />
        <PlacementSection />
        <SuccessStoriesSection />
        <EnrollmentCtaSection />
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => (
  <SEO
    title="Training Programs | Quantum Codon"
    description="Quantum Codon short-term certificate programs for biotech, chemical sciences, and BioAI help learners build practical skills and career-ready portfolios."
    pathname="/training/"
    image="/brand_logo.png"
    keywords={["Quantum Codon", "QuantumCodon", "biotech training", "BioAI training", "certificate programs"]}
  />
);
