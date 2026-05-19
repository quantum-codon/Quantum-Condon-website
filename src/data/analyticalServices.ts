export type AnalyticalCard = {
  title: string;
  description: string;
  icon: string;
  image?: string;
};

export type AnalyticalStep = AnalyticalCard & {
  number: string;
};

export const analyticalFlow = [
  { title: "Molecule", icon: "Atom", image: "/precision_others/molecule.png" },
  { title: "Data Signal", icon: "Activity", image: "/precision_others/data_signal.png" },
  { title: "Decision", icon: "Workflow", image: "/precision_others/decision.png" },
  { title: "Therapeutic Candidate", icon: "Pill", image: "/precision_others/therapeutic.png" }
];

export const analyticalChallenges: AnalyticalCard[] = [
  {
    title: "Emerging Modalities",
    description:
      "mRNA, LNPs, and gene therapies demand a new level of analytical rigor that legacy platforms cannot meet.",
    icon: "Dna"
  },
  {
    title: "Opaque CRO Processes",
    description:
      "Traditional CROs deliver slow turnarounds and limited visibility, blocking critical go/no-go decisions.",
    icon: "ScanSearch"
  },
  {
    title: "Uncompromising Standards",
    description:
      "Quality, safety, and efficacy must be verified at every stage - from discovery to commercialization.",
    icon: "ShieldCheck"
  }
];

export const analyticalSolutions: AnalyticalCard[] = [
  {
    title: "BioAnalysis Platform",
    description:
      "GMP-compliant analytical services with audit-ready reporting and industry-grade quality systems.",
    icon: "FlaskConical"
  },
  {
    title: "Dash Intelligence",
    description:
      "Faster bioanalysis workflows with transparent pricing, structured data delivery, and rapid result turnaround.",
    icon: "Bot"
  },
  {
    title: "IncuScience Integration",
    description:
      "Integrated CRO support combining sequencing, biological sciences, and analytical chemistry for emerging biotech innovators.",
    icon: "Workflow"
  }
];

export const analyticalCapabilities: AnalyticalCard[] = [
  {
    title: "LC-MS & HPLC",
    description: "Precision compound quantitation, impurity profiling, and molecular characterization.",
    icon: "Activity",
    image: "/precision/hplc.png"
  },
  {
    title: "Analytical Ultracentrifugation",
    description: "Size distribution and aggregate detection for LNPs, antibodies, and biologics safety.",
    icon: "Atom",
    image: "/precision/ultracentrifugation.png"
  },
  {
    title: "Next-Generation Sequencing",
    description: "Genomic analysis for target validation, biomarker discovery, and gene therapy characterization.",
    icon: "Dna",
    image: "/precision/next_gen.png"
  },
  {
    title: "Proteomics",
    description: "Ultrasensitive protein measurement to accelerate discovery and de-risk therapeutic development.",
    icon: "Microscope",
    image: "/precision/proteomics.png"
  }
];

export const analyticalWorkflow: AnalyticalStep[] = [
  {
    number: "01",
    title: "Sample Intake",
    description: "Secure onboarding of samples, metadata, study objectives, and analytical requirements.",
    icon: "Database"
  },
  {
    number: "02",
    title: "Assay Selection",
    description: "Selection of LC-MS, HPLC, NGS, proteomics, or custom analytical workflows.",
    icon: "ScanSearch"
  },
  {
    number: "03",
    title: "Data Generation",
    description: "Validated instruments and controlled laboratory processes generate high-integrity molecular data.",
    icon: "Activity"
  },
  {
    number: "04",
    title: "AI-Assisted Interpretation",
    description:
      "Analytical outputs are transformed into structured insights, anomaly detection, and decision-ready summaries.",
    icon: "BrainCircuit"
  },
  {
    number: "05",
    title: "Audit-Ready Reporting",
    description: "Clear, traceable, regulatory-aligned reports support go/no-go decisions and partner communication.",
    icon: "BadgeCheck"
  }
];

export const analyticalImpact: AnalyticalCard[] = [
  {
    title: "Reduced Risk",
    description:
      "Targeted analytical strategies and expert regulatory guidance help de-risk your pipeline at every stage.",
    icon: "ShieldCheck"
  },
  {
    title: "Faster Timelines",
    description: "Rapid analytical workflows help teams move from preclinical studies to clinical decisions faster.",
    icon: "Timer"
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Raw molecular data is converted into clear, actionable insights your scientific and business teams can use immediately.",
    icon: "ChartNoAxesCombined"
  }
];

export const analyticalCommitments: AnalyticalCard[] = [
  {
    title: "Scientific Rigor",
    description: "Validated protocols, meticulous QC, and publication-ready data quality.",
    icon: "Microscope"
  },
  {
    title: "Transparent Communication",
    description: "Scheduled updates, structured reporting, and milestone-based visibility.",
    icon: "Workflow"
  },
  {
    title: "Tailored Solutions",
    description: "Custom analytical strategies aligned with each therapeutic program's unique needs.",
    icon: "Sparkles"
  }
];
