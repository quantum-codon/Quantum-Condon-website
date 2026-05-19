export type BioCard = {
  title: string;
  description?: string;
  icon: string;
};

export type BioMarketCard = BioCard & {
  value: string;
};

export type BioStep = BioCard & {
  number: string;
};

export const bioindustrialFlow = [
  { title: "Legacy Industry", icon: "Factory" },
  { title: "Biological Engineering", icon: "Dna" },
  { title: "Sustainable Production", icon: "Leaf" },
  { title: "Global Impact", icon: "Rocket" }
];

export const bioMissionCards: BioCard[] = [
  {
    title: "Harnessing Biomanufacturing",
    description:
      "We transform scientific discoveries into scalable industrial realities - bridging laboratory innovation and global commercial deployment.",
    icon: "FlaskConical"
  },
  {
    title: "Building Core Infrastructure",
    description:
      "We create the infrastructure needed to move biotechnology from bench to market, unlocking economic and environmental value.",
    icon: "Workflow"
  },
  {
    title: "Driving Global Impact",
    description:
      "Our platform accelerates time-to-market for bio-based innovations, enabling partners to reach industrial scale with confidence and speed.",
    icon: "Rocket"
  }
];

export const bioMarketCards: BioMarketCard[] = [
  {
    value: "$6T+",
    title: "Chemical Industry",
    description: "Transitioning from extraction-based production to regenerative, bio-based methods.",
    icon: "FlaskConical"
  },
  {
    value: "$14T+",
    title: "Manufacturing",
    description: "Enabling sustainable, lower-carbon production across global supply chains.",
    icon: "Factory"
  },
  {
    value: "$14T+",
    title: "Agriculture",
    description: "Replacing synthetic chemicals and fertilizers with bio-based inputs.",
    icon: "Leaf"
  },
  {
    value: "$8T+",
    title: "Automotive & Transport",
    description: "Developing advanced biofuels and sustainable materials for mobility.",
    icon: "Workflow"
  },
  {
    value: "$2.5T+",
    title: "Textiles & Apparel",
    description: "Creating next-generation eco-friendly fibers, dyes, and functional materials.",
    icon: "Sparkles"
  }
];

export const bioApproachCards: BioCard[] = [
  {
    title: "Science",
    description:
      "Designing biology with manufacturability from day one, so discoveries are engineered to scale.",
    icon: "Dna"
  },
  {
    title: "Manufacturing",
    description:
      "Connecting projects to curated CDMO and biomanufacturing networks to de-risk scale-up.",
    icon: "Factory"
  },
  {
    title: "Capital",
    description:
      "Aligning investors, ventures, and commercialization pathways so breakthroughs are fully supported from lab to market.",
    icon: "BriefcaseBusiness"
  }
];

export const bioWorkflow: BioStep[] = [
  {
    number: "01",
    title: "Discovery Architecture",
    description: "Identify scalable biological opportunities and define technical feasibility.",
    icon: "ScanSearch"
  },
  {
    number: "02",
    title: "Strain / Molecule Engineering",
    description: "Engineer biological systems, enzymes, molecules, or pathways for industrial performance.",
    icon: "Dna"
  },
  {
    number: "03",
    title: "Process Development",
    description: "Optimize fermentation, yield, purity, cost, and reproducibility.",
    icon: "Activity"
  },
  {
    number: "04",
    title: "Scale-Up Network",
    description: "Move from lab-scale validation to pilot and commercial manufacturing through CDMO partners.",
    icon: "Workflow"
  },
  {
    number: "05",
    title: "Commercial Deployment",
    description:
      "Connect technical validation, regulatory readiness, market demand, and investor support.",
    icon: "Rocket"
  }
];

export const bioInvestmentFocus: BioCard[] = [
  {
    title: "Sustainable Biochemicals",
    description: "Bio-based inputs for cleaner industrial chemistry and lower-carbon supply chains.",
    icon: "FlaskConical"
  },
  {
    title: "Advanced Materials",
    description: "Engineered biomaterials designed for performance, durability, and circularity.",
    icon: "Atom"
  },
  {
    title: "Industrial Enzymes",
    description: "High-value enzymes for manufacturing, agriculture, environment, and specialty production.",
    icon: "Factory"
  },
  {
    title: "Therapeutics Infrastructure",
    description: "Manufacturing and execution systems that support next-generation therapeutic modalities.",
    icon: "Pill"
  }
];

export const bioExpertiseCards: BioCard[] = [
  {
    title: "Scale-Up Risk Mitigation",
    description: "Reducing failure points as ventures move from bench to pilot to commercial production.",
    icon: "ShieldCheck"
  },
  {
    title: "CAPEX Strategy",
    description: "Navigating capital-intensive infrastructure and manufacturing models.",
    icon: "BriefcaseBusiness"
  },
  {
    title: "Cost Parity Planning",
    description: "Helping bio-based solutions compete with legacy industrial processes.",
    icon: "ChartNoAxesCombined"
  },
  {
    title: "Regulatory & Commercial Pathways",
    description: "Accelerating adoption through compliance, validation, and market readiness.",
    icon: "BadgeCheck"
  },
  {
    title: "Execution Infrastructure",
    description: "Coordinating science, manufacturing, capital, and partnerships in one operating model.",
    icon: "Workflow"
  }
];
