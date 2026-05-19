export type RegulatoryCard = {
  title: string;
  description: string;
  icon: string;
  image?: string;
};

export type RegulatoryMetric = RegulatoryCard & {
  value: string;
};

export type RegulatoryStep = RegulatoryCard & {
  number: string;
};

export const regulatoryBadges = ["FDA", "EMA", "ICH", "GMP", "AI/ML Pathways"];

export const regulatoryPrecisionCards: RegulatoryCard[] = [
  {
    title: "Unprecedented Growth",
    description: "Global biotech investment is expanding rapidly, while regulatory complexity grows in parallel.",
    icon: "ChartNoAxesCombined"
  },
  {
    title: "Critical Compliance",
    description:
      "Regulatory missteps can cost companies years and millions. Strong strategy reduces avoidable risk.",
    icon: "ShieldCheck"
  },
  {
    title: "Clear Pathways",
    description: "We transform complex regulatory questions into actionable strategies for market success.",
    icon: "Workflow"
  }
];

export const investorConfidenceCards: RegulatoryCard[] = [
  {
    title: "Deep Regulatory Intelligence",
    description: "Former agency reviewers and industry veterans guide every engagement.",
    icon: "ScanSearch"
  },
  {
    title: "Accelerated Timelines",
    description: "Structured regulatory strategies help compress approval cycles and reduce capital burn.",
    icon: "Timer"
  },
  {
    title: "Investor-Ready Documentation",
    description: "Regulatory packages designed to support due diligence, funding, and board confidence.",
    icon: "BadgeCheck"
  }
];

export const regulatoryCoverageCards: RegulatoryCard[] = [
  {
    title: "Biotech Breakthroughs",
    description:
      "From novel therapeutics to advanced diagnostics, we guide FDA, EMA, and global regulatory approvals - including IND, NDA, BLA, and CE Mark pathways.",
    icon: "Dna",
    image: "/regulatory_Unlocking_yourcompany/biotechbreakthroughs.png"
  },
  {
    title: "Biomanufacturing Excellence",
    description:
      "We support GMP strategy, process validation, facility readiness, and quality systems for complex manufacturing and bioprocessing.",
    icon: "Factory",
    image: "/regulatory_Unlocking_yourcompany/biomanufacturingExcellence.png"
  },
  {
    title: "BioAI Innovation",
    description:
      "We help define pathways for AI-driven drug discovery and development, including SaMD classification, algorithmic accountability, and emerging AI/ML regulatory frameworks.",
    icon: "BrainCircuit",
    image: "/regulatory_Unlocking_yourcompany/bioAi_innovation.png"
  }
];

export const regulatoryPositioningFlow = [
  { title: "Science", icon: "FlaskConical" },
  { title: "Regulatory Strategy", icon: "ShieldCheck" },
  { title: "Investor Readiness", icon: "BriefcaseBusiness" },
  { title: "Market Approval", icon: "BadgeCheck" }
];

export const regulatoryProcess: RegulatoryStep[] = [
  {
    number: "01",
    title: "Regulatory Gap Analysis",
    description:
      "Map current documentation, product claims, scientific evidence, manufacturing status, and jurisdictional risks.",
    icon: "ScanSearch"
  },
  {
    number: "02",
    title: "Pathway Strategy",
    description:
      "Define FDA, EMA, ICH, GMP, CE Mark, or AI/ML regulatory pathways based on product category and market goals.",
    icon: "Workflow"
  },
  {
    number: "03",
    title: "Evidence & Documentation",
    description:
      "Build investor-ready regulatory packages, quality documentation, validation plans, and submission roadmaps.",
    icon: "Database"
  },
  {
    number: "04",
    title: "Submission Readiness",
    description:
      "Prepare teams for agency interactions, due diligence, audits, and milestone-based regulatory execution.",
    icon: "BadgeCheck"
  },
  {
    number: "05",
    title: "Market & Governance Alignment",
    description:
      "Align founders, boards, investors, and technical teams around approval timelines, risk controls, and commercialization readiness.",
    icon: "BriefcaseBusiness"
  }
];

export const regulatoryMetrics: RegulatoryMetric[] = [
  {
    value: "200+",
    title: "Regulatory Submissions",
    description: "Across global agencies",
    icon: "Database"
  },
  {
    value: "40%",
    title: "Faster Time-to-Market",
    description: "Average client improvement",
    icon: "Timer"
  },
  {
    value: "98%",
    title: "First-Cycle Approval",
    description: "Rate for prepared submissions",
    icon: "BadgeCheck"
  },
  {
    value: "50+",
    title: "Expert Advisors",
    description: "Former FDA, EMA & ICH veterans",
    icon: "ShieldCheck"
  }
];

export const regulatoryExperts: RegulatoryCard[] = [
  {
    title: "Former Agency Reviewers",
    description:
      "Veterans from FDA, EMA, and PMDA who understand the reviewer mindset and how to build strong submissions.",
    icon: "ScanSearch"
  },
  {
    title: "Industry Strategists",
    description:
      "Senior consultants with experience across pharma, biotech, and medical device commercialization.",
    icon: "BriefcaseBusiness"
  },
  {
    title: "BioAI Specialists",
    description:
      "Experts in AI/ML regulatory science, computational innovation, and emerging global AI frameworks.",
    icon: "BrainCircuit"
  },
  {
    title: "GMP Compliance Experts",
    description:
      "Specialists in biomanufacturing quality systems, facility design, and process validation strategy.",
    icon: "Factory"
  }
];

export const regulatoryAudienceCards: RegulatoryCard[] = [
  {
    title: "For Founders",
    description:
      "Build a regulatory strategy that accelerates commercialization and scales with your ambition.",
    icon: "Rocket"
  },
  {
    title: "For Investors",
    description:
      "Conduct deeper due diligence with confidence through clearer regulatory risk and timeline visibility.",
    icon: "ChartNoAxesCombined"
  },
  {
    title: "For Boards",
    description:
      "Establish governance-grade compliance infrastructure that protects enterprise value at every stage.",
    icon: "LockKeyhole"
  }
];

export const regulatoryFinalTags = [
  "Biotech",
  "Biomanufacturing",
  "BioAI",
  "FDA Regulatory Strategy",
  "EMA Submissions",
  "GMP Compliance",
  "AI/ML Pathways",
  "Investor Readiness"
];
