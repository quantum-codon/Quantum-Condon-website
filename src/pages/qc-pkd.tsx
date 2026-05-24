import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/Header";
import { Footer } from "../components/HomeSections";
import { BackgroundVideo } from "../components/BackgroundVideo";
import { ButtonLink } from "../components/ButtonLink";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";

const heroStats = [
  {
    value: "15+",
    label: "Years of continuous dark genome research, reproducible across labs",
    icon: "Timer"
  },
  {
    value: "6+",
    label: "Disease areas with proof-of-concept evidence",
    icon: "Microscope"
  },
  {
    value: "98%",
    label: "Genome space historically unmined for therapeutics",
    icon: "Dna"
  },
  {
    value: "22nM",
    label: "IC50 of tREP-18 against Leishmania",
    icon: "Activity"
  }
];

const genomeScale = [
  { label: "Protein-coding DNA", value: "1-2%", width: "2%" },
  { label: "Class I - Non-expressing DNA", value: "~40%", width: "42%" },
  { label: "Class II - Non-translating RNA", value: "~56%", width: "57%" }
];

const classifications = [
  {
    number: "I",
    title: "Non-Expressing DNA Sequences",
    label: "Class I",
    image: "/pkd_class/class1.png",
    description:
      "DNA regions that are present in every cell but are never transcribed into RNA under natural conditions. Evolution chose not to express them - not because they are useless, but because they were never sampled. Deep Codon's synthetic expression platform unlocks this vast, untouched coding reservoir for the first time.",
    items: [
      {
        lead: "Intergenic regions",
        text:
          "sequences between any two annotated genes. Our 2009 proof-of-concept showed 6/6 randomly selected E. coli intergenic sequences produced stable, functional proteins when synthetically expressed."
      },
      {
        lead: "Antisense sequences",
        text:
          "complementary strands to coding sequences. Full-length antisense proteins predicted across E. coli (0.7%), S. cerevisiae (0.15%), and D. melanogaster (0.2%) - many with enzymatic activity."
      },
      {
        lead: "Reverse ORFs",
        text:
          "reading existing coding sequences in the reverse (-1) frame. A completely parallel protein universe derived from every annotated gene."
      },
      {
        lead: "Repetitive elements",
        text:
          "telomeric repeats, microsatellites, LINE/SINE-derived sequences. An underexplored test bed for novel scaffold motifs and functional diversity."
      },
      {
        lead: "Pseudogenes",
        text:
          "evolutionary relics: once-active genes now silenced by mutation. Thousands exist across genomes. Synthetic reconstruction shows many pseudogene-derived peptides fold into stable, functional proteins."
      }
    ],
    pipeline:
      "Pipeline: Bioinformatics identification -> Synthetic cloning -> Expression in E. coli / HEK293 / cell-free -> Structural prediction (AlphaFold) -> Functional assays -> Lead optimisation"
  },
  {
    number: "II",
    title: "Non-Translating RNA Sequences",
    label: "Class II",
    image: "/pkd_class/class2.png",
    description:
      "RNA molecules produced by the cell but never translated into protein throughout evolutionary history. These include the machinery of translation itself - tRNAs, rRNAs - as well as regulatory and structural RNAs that form the cell's hidden information layer. Deep Codon has demonstrated that synthetic translation of these sequences produces biologically active peptides with remarkable therapeutic properties.",
    items: [
      {
        lead: "Introns",
        text:
          "spliced out during mRNA processing, long considered splicing waste. Our studies show these sequences systematically translate into stable, bioactive peptides and proteins - a hidden layer of functional chemistry."
      },
      {
        lead: "tRNA-derived peptides (tREPs)",
        text:
          "the most exciting discovery: tREP-18, derived from E. coli tRNA sequences, showed anti-leishmanial activity at IC50 = 22.13 nM while remaining safe for human cells. A completely new class of bioactive molecule."
      },
      {
        lead: "Ribosomal RNA (rRNA)",
        text:
          "the scaffold of the ribosome itself, never translated throughout all of evolutionary time, offers a unique template for novel functional peptides. Nature's protein-making machinery can itself become a source of new proteins."
      },
      {
        lead: "MicroRNA (miRNA)",
        text:
          "only ~22 nucleotides, but with remarkable precision. These smallest transcriptome elements may become the most precise tools in peptide engineering when synthetically translated."
      },
      {
        lead: "Long non-coding RNA (lncRNA)",
        text:
          "hundreds to thousands of bases. Enormous, uncharted protein-coding reservoir. Sheer sequence diversity provides a fertile platform for designer peptides and novel biochemical pathways."
      }
    ],
    pipeline:
      "Pipeline: tRNA/rRNA/intron identification -> Computational translation -> Structural stability prediction -> Chemical synthesis -> Bioassay screening -> tREP library development"
  }
];

const evidenceCards = [
  {
    year: "2009 - Dhar et al - JNU, New Delhi",
    tag: "Proof of Concept - Class I",
    title: "World's First Dark Genome Expression",
    description:
      "Six E. coli intergenic sequences, none previously expressed, were cloned and synthetically expressed. All six produced stable proteins, with Eka1 causing potent reversible growth inhibition.",
    result: "6/6 expressed - Eka1 growth inhibition - 2 stable tertiary structures",
    icon: "Dna",
    image: "/pkd_six_sec/cancer.png"
  },
  {
    year: "2013-2015 - Joshi, Krishnan et al",
    tag: "Anti-Malaria - Class I",
    title: "Plasmodium falciparum Invasion Blocked",
    description:
      "Synthetic peptides from S. cerevisiae intergenic sequences were screened against P. falciparum invasion proteins. Docking and cell experiments showed more than 60% inhibition of parasite entry.",
    result: ">60% invasion inhibition - clinical strain validated - novel scaffold",
    icon: "ShieldCheck",
    image: "/pkd_six_sec/infections_diseases.png"
  },
  {
    year: "2015-2023 - Raj, Verma et al",
    tag: "Alzheimer's - Class I",
    title: "BACE1 Inhibition: 86.7% at 1uM",
    description:
      "From 2,500 intergenic sequences and 424 novel peptides, ECOI2 achieved 86.7% BACE1 inhibition and reduced amyloid A beta 1-40 and 1-42 in SH-SY5Y neuroblastoma cells.",
    result: "ECOI2 86.7% inhibition - A beta reduction confirmed - non-toxic",
    icon: "BrainCircuit",
    image: "/pkd_six_sec/neuroogenerative.png"
  },
  {
    year: "2023 - Dhar et al - Published",
    tag: "Anti-Leishmania - Class II",
    title: "First Functional tRNA-Derived Peptide",
    description:
      "E. coli tRNAs were computationally translated into tREPs. tREP-18 showed IC50 = 22.13 nM against L. donovani and remained safe for human macrophages.",
    result: "IC50 = 22.13 nM - membrane disruption - novel molecular class",
    icon: "Pill",
    image: "/pkd_six_sec/autommune_deseases.png"
  },
  {
    year: "2024 - Shanthappa et al",
    tag: "Vaccines - Class II",
    title: "tREP-Derived Antiviral Vaccine Epitopes",
    description:
      "tRNA-encoded peptides were screened as vaccine epitopes against viral pathogens. RRHIDIVV and IMVRFSAE showed favorable HLA binding and 200 ns molecular dynamics stability.",
    result: "2 validated epitopes - 200 ns MD stable - novel vaccine pathway",
    icon: "BadgeCheck",
    image: "/pkd_six_sec/vaccines.png"
  },
  {
    year: "2016-2023 - Varughese, Garg et al",
    tag: "Enzymes - Class I",
    title: "Antisense and Reverse Protein Landscape",
    description:
      "Full-length antisense and reverse proteins were mapped across E. coli, S. cerevisiae, and D. melanogaster, with many candidates predicted to have enzymatic, transporter, or secretory functions.",
    result: "Thousands mapped - multi-organism - enzymatic functions predicted",
    icon: "Atom",
    image: "/pkd_six_sec/respiratory.png"
  }
];

const tractionStats = [
  {
    value: "2009-now",
    label: "Continuous research program across disease areas and organisms"
  },
  {
    value: "6+",
    label: "Disease areas with experimental evidence"
  },
  {
    value: "86.7%",
    label: "BACE1 inhibition at 1uM from ECOI2"
  },
  {
    value: "22nM",
    label: "IC50 of tREP-18 against L. donovani"
  }
];

const platformSteps = [
  {
    number: "01",
    title: "Dark Genome Mapping",
    description:
      "Identify Class I and Class II sequences across model organisms and cross-reference against NCBI GEO and NR databases.",
    icon: "ScanSearch"
  },
  {
    number: "02",
    title: "AI Prediction",
    description:
      "Translate in silico, predict tertiary structure, screen toxicity, and rank stability, solubility, charge, and immunogenicity.",
    icon: "Bot"
  },
  {
    number: "03",
    title: "Virtual Screening",
    description:
      "Dock dark-genome candidates against kinases, GPCRs, enzymes, viral proteins, and other target classes.",
    icon: "Activity"
  },
  {
    number: "04",
    title: "Quantum Simulation",
    description:
      "Use molecular dynamics and quantum modules to improve binding, folding, electron distribution, and reaction-energy modeling.",
    icon: "Atom"
  },
  {
    number: "05",
    title: "Experimental Validation",
    description:
      "Synthesize or express top candidates, then validate through cell assays, Western blot, flow cytometry, and preclinical models.",
    icon: "FlaskConical"
  }
];

const intelligenceCards = [
  {
    title: "Making the Invisible Visible at Scale",
    eyebrow: "Artificial Intelligence",
    description:
      "AI trained on structural and functional genomic data enables high-throughput prediction of which silent sequences can produce stable, non-toxic, biologically active molecules.",
    bullets: [
      "AlphaFold-based tertiary structure prediction",
      "Multi-omics integration across genetic, immune, and metabolic data",
      "ADMET and toxicity screening at genome scale",
      "Automated candidate prioritization by druggability"
    ],
    icon: "BrainCircuit"
  },
  {
    title: "Simulating Molecular Reality with Precision",
    eyebrow: "Quantum Computing",
    description:
      "Quantum computing modules provide a path toward higher-fidelity modeling of how molecules bind, fold, and react inside complex biological systems.",
    bullets: [
      "Quantum-level electron distribution modeling",
      "Variational Quantum Eigensolver for electronic structure",
      "Quantum pattern recognition in high-dimensional data",
      "Molecular dynamics refined by quantum accuracy"
    ],
    icon: "Atom"
  }
];

const paperLinks = [
  {
    label: "Read Full Paper",
    href: "https://www.preprints.org/manuscript/202505.1422"
  },
  {
    label: "Download PDF",
    href: "https://www.preprints.org/frontend/manuscript/a1670eb948afd0978f09cf16d10f08c9/download_pub"
  }
];

const publications = [
  {
    citation: "Verma, Manvati & Dhar (2023).",
    title: "Harnessing Escherichia coli's Dark Genome to Produce Anti-Alzheimer Peptides.",
    result: "ECOI2: 86.7% BACE1 inhibition."
  },
  {
    citation: "Garg & Dhar (2023a).",
    title: "Repurposing the Dark Genome I: Antisense Proteins.",
    result: "Novel antisense protein landscape."
  },
  {
    citation: "Nayak & Dhar (2023).",
    title: "Repurposing the Dark Genome II - Reverse Proteins.",
    result: "Reverse ORF therapeutic potential."
  },
  {
    citation: "Garg & Dhar (2023b).",
    title: "Repurposing The Dark Genome III - Intronic Proteins.",
    result: "Intron-derived peptide bioactivity."
  },
  {
    citation: "Shanthappa et al (2024).",
    title: "tREP-Derived Antiviral Vaccine Epitopes.",
    result: "RRHIDIVV + IMVRFSAE: 200 ns MD stable."
  }
];

const investorRows = [
  ["Total funding sought", "Rs. 30 Crore"],
  ["DeepBio JV commitment", "USD 3 Million"],
  ["Venture valuation", "USD 150 Million"],
  ["Year 3 revenue target", "Rs. 45 Crore"],
  ["Breakeven", "Year 3"],
  ["Exit pathway", "IPO / M&A Year 6"],
  ["Global pharma market", "USD 1.5 Trillion"],
  ["First-in-class licensing premium", "3-5x standard"]
];

const moatCards = [
  {
    title: "15 Years of Proprietary Science",
    description:
      "Reproducible, published research across 6 disease areas creates a long-duration scientific advantage.",
    icon: "Microscope"
  },
  {
    title: "Amaravati Quantum Valley Anchor",
    description:
      "Quantum integration is already architected into the discovery pipeline as infrastructure matures.",
    icon: "Atom"
  },
  {
    title: "No Competitive Platform Exists",
    description:
      "The non-expressing and non-translating genomic space remains largely unexplored territory.",
    icon: "LockKeyhole"
  }
];

function GenomeMapVisual() {
  return (
    <div className="deep-genome-visual relative overflow-hidden rounded-2xl p-6 md:p-8">
      <div className="absolute inset-0 deep-particle-field" aria-hidden="true" />
      <div className="relative z-10 grid gap-5 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <div className="deep-chromosome mx-auto">
          <span className="protein" />
          <span className="dark-a one" />
          <span className="dark-b one" />
          <span className="dark-a two" />
          <span className="dark-b two" />
          <span className="protein second" />
          <span className="dark-a three" />
        </div>
        <div className="grid gap-3">
          {genomeScale.map((item) => (
            <div key={item.label} className="deep-scale-row">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
              <div className="deep-scale-track">
                <span style={{ width: item.width }} />
              </div>
            </div>
          ))}
          <p className="text-xs leading-6 text-slate-400">
            Approximate proportions vary by organism and annotation methodology. Class I + Class II form Deep Codon's
            therapeutic reservoir.
          </p>
        </div>
      </div>
    </div>
  );
}

function PkdHeroImage() {
  return (
    <div className="deep-hero-image-card relative overflow-hidden rounded-2xl">
      <img
        src="/pkd_hero.png"
        alt="Dark genome therapeutic discovery visualization"
        className="deep-hero-image h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <span className="deep-hero-image-shade" aria-hidden="true" />
      <span className="deep-hero-image-glow" aria-hidden="true" />
    </div>
  );
}

function DeepHero() {
  return (
    <section className="hero-section deep-hero relative min-h-[calc(100svh-5rem)] overflow-hidden py-10 md:h-[680px] md:min-h-[520px] md:py-0">
      <BackgroundVideo
        src="/hero_sec.mp4"
        poster="/quantum-codon-hero-dna.png"
        className="hero-video-layer deep-video-layer"
        videoClassName="hero-background-video deep-background-video"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,5,16,0.98)_0%,rgba(2,5,16,0.94)_30%,rgba(2,5,16,0.76)_45%,rgba(2,5,16,0.36)_66%,rgba(2,5,16,0)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,16,0.05)_0%,rgba(2,5,16,0)_60%,rgba(2,5,16,0.96)_100%),radial-gradient(circle_at_72%_45%,rgba(255,48,79,0.12),transparent_24rem),radial-gradient(circle_at_48%_76%,rgba(88,215,255,0.12),transparent_22rem)]" />

      <div className="section-wrap relative z-10 grid min-h-[inherit] items-center gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] md:h-full md:py-0">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.36em] text-codon-cyan/85">
            Deep Codon Initiative - Quantum Codon Pvt Ltd
          </p>
          <h1 className="max-w-3xl text-balance text-[42px] font-semibold leading-[1.02] text-white sm:text-[56px] md:text-7xl">
            The Genome Holds a Secret <span className="blue-red-text">98%.</span>
            <span className="block">We Are Decoding It.</span>
          </h1>
          <blockquote className="mt-6 max-w-2xl border-l border-codon-cyan/50 pl-5 text-lg leading-8 text-slate-200">
            "Dark genome is a treasure house for the next generation of drug discovery molecules."
            <span className="mt-3 block text-sm text-slate-400">
              Prof. Pawan K Dhar, CSO, Quantum Codon
            </span>
          </blockquote>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            For fifty years, biology focused on the 2% of DNA that codes for proteins. Deep Codon systematically unlocks
            the remaining 98% - non-expressing DNA and non-translating RNA - and converts it into first-in-class
            therapeutic molecules.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#platform" className="w-full sm:w-auto">
              Explore the Platform
            </ButtonLink>
            <ButtonLink href="#paper" variant="secondary" className="w-full sm:w-auto">
              Read the Landmark Paper
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="hidden lg:block">
          <PkdHeroImage />
        </Reveal>
      </div>
    </section>
  );
}

function HeroStatsSection() {
  return (
    <section className="relative bg-codon-black py-10">
      <div className="section-wrap grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {heroStats.map((stat, index) => (
          <Reveal key={stat.value} delay={index * 0.05} className="deep-stat-card rounded-2xl p-5">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
              <Icon name={stat.icon} className="h-6 w-6" />
            </div>
            <p className="text-4xl font-semibold leading-none text-white">{stat.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function GenomeScaleSection() {
  return (
    <section className="py-16 ">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-codon-cyan/80">
            Untapped biological space
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            The Untapped Scale of the <span className="blue-red-text">Dark Genome</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
            Every genome - bacterial, yeast, fly, worm, human - contains an overwhelming majority of sequences that have
            never been expressed as proteins. These are not gaps or errors. They are the unexplored majority of life's
            coding potential.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <GenomeMapVisual />
        </Reveal>
      </div>
    </section>
  );
}

function ClassificationSection() {
  return (
    <section id="classification" className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The Deep Codon classification"
          title={<span>Two classes of dark genomic matter. <span className="blue-red-text">One drug discovery canvas.</span></span>}
          description="Deep Codon classifies the unexplored genome into non-expressing DNA and non-translating RNA, each with distinct and complementary therapeutic opportunities."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {classifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="deep-class-card relative overflow-hidden rounded-2xl p-7 md:p-8">
              <div className="deep-class-media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="absolute right-6 top-4 text-8xl font-semibold leading-none text-white/[0.03]">
                {item.number}
              </div>
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-codon-cyan/30 bg-codon-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-codon-cyan">
                  {item.label}
                </span>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-3xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{item.description}</p>
                <ul className="mt-6 grid gap-3">
                  {item.items.map((point) => (
                    <li key={point.lead} className="deep-class-point flex gap-3 text-sm leading-6 text-slate-200">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-codon-cyan shadow-[0_0_12px_rgba(88,215,255,0.8)]" />
                      <span>
                        <strong className="font-semibold text-white">{point.lead}</strong> - {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-xs uppercase leading-6 tracking-[0.12em] text-codon-cyan/85">
                  {item.pipeline}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="deep-insight-card mt-6 rounded-2xl p-6 md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
              <Icon name="Workflow" className="h-7 w-7" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Class I + Class II {"->"} First-in-Class Pathways</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                By combining Class I proteins and Class II peptides — using domain prediction and molecular docking — Deep Codon can design and construct entirely novel cellular pathways: regulatory, signalling, or metabolic. These pathways do not exist in nature. They emerge from the dark matter of the genome, expressed and orchestrated for the first time.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EvidenceSection() {
  return (
    <section id="evidence" className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="15 years of proof - 2009 to 2026"
          title={<span>Validated results across <span className="blue-red-text">six disease areas</span></span>}
          description="This is not a hypothesis awaiting validation. The platform has produced biologically active molecules against cancer, malaria, leishmaniasis, Alzheimer's disease, pathogenic microbes, and viral pathogens.  — over a sustained, peer-reviewed research programme beginning in 2009."
        />
        <div className="pkd-evidence-grid grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {evidenceCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05} className="pkd-evidence-card group rounded-2xl p-6">
              <img
                src={card.image}
                alt=""
                loading="lazy"
                className="pkd-evidence-bg"
              />
              <span className="pkd-evidence-overlay" aria-hidden="true" />
              <span className="pkd-evidence-accent opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="pkd-evidence-content">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-codon-cyan/75">{card.year}</p>
                    <span className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                      {card.tag}
                    </span>
                  </div>
                  <div className="pkd-evidence-icon">
                    <Icon name={card.icon} className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold leading-tight text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                <div className="pkd-evidence-result mt-5">
                  {card.result}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TractionBand() {
  return (
    <section className="deep-traction-band py-12">
      <div className="section-wrap grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {tractionStats.map((stat, index) => (
          <Reveal key={stat.value} delay={index * 0.05}>
            <p className="text-4xl font-semibold leading-none text-white md:text-5xl">
              <span className="blue-red-text">{stat.value}</span>
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-300">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="The Deep Codon technology platform"
          title={<span>From dark genome to <span className="blue-red-text">validated drug candidate</span></span>}
          description="An integrated pipeline for converting naturally silent genomic sequences into validated therapeutic candidates through bioinformatics, AI prediction, molecular simulation, and experimental validation."
        />
        <div className="relative grid gap-5 lg:grid-cols-5">
          {platformSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06} className="deep-step-card relative rounded-2xl p-6">
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="text-2xl font-semibold text-codon-cyan">{step.number}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 text-codon-cyan">
                  <Icon name={step.icon} className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-tight text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              <span className="pipeline-pulse mt-8 block h-px bg-gradient-to-r from-codon-cyan via-codon-red to-transparent" />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {intelligenceCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="deep-intel-card rounded-2xl p-7 md:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
                <Icon name={card.icon} className="h-7 w-7" />
              </div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-codon-cyan/80">{card.eyebrow}</p>
              <h3 className="text-2xl font-semibold leading-tight text-white">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{card.description}</p>
              <ul className="mt-6 grid gap-3">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-codon-red shadow-[0_0_12px_rgba(255,48,79,0.8)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaperSection() {
  return (
    <section id="paper" className="py-16 ">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Landmark publication - 2025"
          title={<span>The Scientific <span className="blue-red-text">Foundation</span></span>}
          description="The Deep Codon platform is anchored in 15+ years of published research, culminating in a preprint proposing an integrated AI + quantum framework for dark genome drug discovery."
        />
        <Reveal className="deep-paper-card rounded-2xl p-7 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-codon-cyan/80">
                Preprint - Posted 19 May 2025 - Preprints.org - Biology and Biotechnology
              </p>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-white md:text-3xl">
                Recoding Genomic Elements with AI and Quantum Computation to Build the Next Generation Drug Discovery Platform
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Kadalmani Krishnan - Anita Chugh - Vidya Niranjan - <strong className="text-white">Pawan Kumar Dhar*</strong>
              </p>
              <p className="mt-2 text-sm font-semibold text-codon-cyan">DOI: 10.20944/preprints202505.1422.v1</p>
              <blockquote className="mt-6 border-l border-codon-cyan/40 pl-5 text-sm leading-7 text-slate-300 md:text-base">
                "We propose a next-generation, first-in-class drug discovery platform that harnesses the vast, untapped
                genomic landscape through the integration of Artificial Intelligence and Quantum Computing."
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-2">
                {["dark genome", "synthetic biology", "drug discovery", "AI", "quantum computing", "tRNA-derived peptides"].map((keyword) => (
                  <span key={keyword} className="rounded-full border border-codon-cyan/20 bg-codon-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-codon-cyan">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid content-start gap-3">
              {paperLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-codon-cyan/40 bg-codon-blue/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-codon-blue/20"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                <strong className="mb-2 block text-white">Also see:</strong>
                Dhar et al 2009, Joshi et al 2013, Raj et al 2015, Verma et al 2023, Garg & Dhar 2023a,b, Nayak & Dhar
                2023, Shanthappa et al 2024.
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-3">
          {publications.map((publication, index) => (
            <Reveal key={publication.citation} delay={index * 0.04} className="deep-publication-row rounded-xl p-4">
              <div className="flex gap-4">
                <span className="text-sm font-semibold text-codon-cyan">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-7 text-slate-300">
                  <span className="font-bold text-white">{publication.citation}</span>{" "}
                  <span>{publication.title}</span>{" "}
                  <span className="font-bold text-codon-cyan">{publication.result}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvestorSection() {
  return (
    <section id="investors" className="py-16 ">
      <div className="section-wrap grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-codon-cyan/80">
            Investor brief - Quantum Codon Pvt Ltd
          </p>
          <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            The last great frontier in drug discovery is inside our own <span className="blue-red-text">genomes.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
            The global pharmaceutical industry spends USD 2.6 trillion annually on R&D with a 90%+ failure rate. The
            structural reason: it is mining only 1-2% of available biological space.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Deep Codon has built a platform from Class I non-expressing DNA and Class II non-translating RNA sequences.
            Every intergenic region, antisense strand, tRNA, and pseudogene becomes part of the competitive moat.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="mailto:contact@quantumcodon.in" className="w-full sm:w-auto">
              Request Investor Deck
            </ButtonLink>
            <ButtonLink href="mailto:contact@quantumcodon.in" variant="secondary" className="w-full sm:w-auto">
              Schedule a Meeting
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="deep-invest-card rounded-2xl p-6 md:p-7">
          <h3 className="text-2xl font-semibold text-white">Investment Snapshot</h3>
          <div className="mt-6 grid gap-3">
            {investorRows.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3">
                <span className="text-sm text-slate-400">{label}</span>
                <strong className="text-right text-base font-semibold text-white">{value}</strong>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="section-wrap mt-8 grid gap-5 md:grid-cols-3">
        {moatCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.06} className="deep-moat-card rounded-2xl p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-codon-cyan/30 bg-codon-blue/10 text-codon-cyan">
              <Icon name={card.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function DeepFinalCta() {
  return (
    <section className="py-16 ">
      <div className="section-wrap">
        <Reveal className="deep-final-cta relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="relative z-10 max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-codon-cyan/80">
              Partner with Quantum Codon
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              The genome's most important medicines are yet to be <span className="blue-red-text">discovered.</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Deep Codon is the platform built to find them in the 98% of the genome that science has barely explored.
              Join us at the frontier of next-generation drug discovery.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="mailto:contact@quantumcodon.in" className="w-full sm:w-auto">
                Partner With Quantum Codon
              </ButtonLink>
              <a
                href="https://www.preprints.org/manuscript/202505.1422"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-codon-cyan/35 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-codon-blue/15"
              >
                Read the Science
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function QcPkdPage(_props: PageProps) {
  return (
    <>
      <Header />
      <main className="bg-codon-black">
        <DeepHero />
        <HeroStatsSection />
        <GenomeScaleSection />
        <ClassificationSection />
        <EvidenceSection />
        <TractionBand />
        <PlatformSection />
        <PaperSection />
        <InvestorSection />
        <DeepFinalCta />
      </main>
      <Footer />
    </>
  );
}

export const Head: HeadFC = () => (
  <>
    <html lang="en" />
    <title>Deep Codon PKD | Quantum Codon</title>
    <meta
      name="description"
      content="Deep Codon PKD by Quantum Codon converts dark genome sequences into first-in-class therapeutic candidates through AI, quantum computing, and validation."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);
