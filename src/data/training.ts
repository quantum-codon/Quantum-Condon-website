export type TrainingCard = {
  title: string;
  description: string;
  icon: string;
};

export type TrainingMetric = TrainingCard & {
  value: string;
};

export type TrainingStep = TrainingCard & {
  number: string;
};

export type TrainingTestimonial = {
  title: string;
  quote: string;
  attribution: string;
  icon: string;
};

export const trainingFlow: TrainingStep[] = [
  {
    number: "01",
    title: "Enroll in Your Specialization",
    description: "Choose the technical track that matches your scientific background and career direction.",
    icon: "ScanSearch"
  },
  {
    number: "02",
    title: "Build Real-World Projects",
    description: "Apply biotech, chemistry, and AI workflows to practical portfolio-grade work.",
    icon: "Workflow"
  },
  {
    number: "03",
    title: "Get Career & Placement Support",
    description: "Prepare for opportunities with mentorship, references, and placement assistance.",
    icon: "Rocket"
  }
];

export const trainingAdvantages: TrainingCard[] = [
  {
    title: "Industry-Relevant Curriculum",
    description: "Developed with industry experts so learners focus on the skills employers need today.",
    icon: "BadgeCheck"
  },
  {
    title: "Hands-On Project Work",
    description: "Build a practical portfolio using real-world datasets, workflows, and applications.",
    icon: "Workflow"
  },
  {
    title: "Expert Mentorship",
    description: "Learn from professionals and researchers across AI, biotech, and chemical sciences.",
    icon: "Microscope"
  },
  {
    title: "Accelerated Learning",
    description: "Structured short-term programs designed for rapid, focused, and lasting skill development.",
    icon: "Timer"
  }
];

export const trainingSpecializations: TrainingCard[] = [
  {
    title: "Bioinformatics & Data Science",
    description: "Harness biological data using modern computational and statistical tools.",
    icon: "Database"
  },
  {
    title: "AI/ML in Drug Discovery",
    description:
      "Apply machine learning to pharmaceutical innovation, molecule screening, and therapeutic discovery.",
    icon: "BrainCircuit"
  },
  {
    title: "AI in Chemistry & Cheminformatics",
    description: "Use intelligent computational chemistry to accelerate molecular design and chemical research.",
    icon: "Atom"
  },
  {
    title: "Agentic AI for Biotech",
    description:
      "Build autonomous AI agents that support biological discovery, research workflows, and lab intelligence.",
    icon: "Bot"
  },
  {
    title: "AI-Driven Enzyme Design",
    description: "Apply AI-guided methods to design high-performance enzymes for sustainable biotechnology.",
    icon: "Leaf"
  },
  {
    title: "Biomedical AI Innovation",
    description: "Develop AI solutions for diagnostics, genomics, translational research, and healthcare innovation.",
    icon: "Activity"
  },
  {
    title: "AI Upskilling for Biotech Scientists",
    description: "Become a confident AI practitioner while staying connected to your scientific domain.",
    icon: "Sparkles"
  }
];

export const trainingJourney: TrainingStep[] = [
  {
    number: "01",
    title: "Foundation",
    description: "Biotech, chemistry, data, and AI fundamentals.",
    icon: "Dna"
  },
  {
    number: "02",
    title: "Tools & Workflows",
    description: "Python, data analysis, ML models, biological datasets, and research automation.",
    icon: "Workflow"
  },
  {
    number: "03",
    title: "Applied Projects",
    description: "Build portfolio-grade projects across drug discovery, BioAI, enzyme design, or diagnostics.",
    icon: "FlaskConical"
  },
  {
    number: "04",
    title: "Mentorship Review",
    description: "Receive feedback from mentors and refine your technical portfolio.",
    icon: "BadgeCheck"
  },
  {
    number: "05",
    title: "Career Launch",
    description: "Prepare for interviews, placement support, and professional opportunities.",
    icon: "Rocket"
  }
];

export const trainingPlacementMetrics: TrainingMetric[] = [
  {
    value: "100+",
    title: "Hiring Organizations",
    description: "Top companies actively seeking skilled biotech and BioAI professionals.",
    icon: "BriefcaseBusiness"
  },
  {
    value: "3 / 6 / 12",
    title: "Month Options",
    description: "Flexible training and project durations for different career goals.",
    icon: "Timer"
  },
  {
    value: "1:1",
    title: "Placement Assistance",
    description: "Dedicated support to help learners target roles in biotech, pharma, AI, and chemical industries.",
    icon: "ScanSearch"
  },
  {
    value: "Verified",
    title: "Work Experience & References",
    description: "Earn verifiable project credentials and professional reference support.",
    icon: "ShieldCheck"
  },
  {
    value: "Global",
    title: "Talent Network",
    description: "Access opportunities through an international training and innovation ecosystem.",
    icon: "Workflow"
  }
];

export const trainingTestimonials: TrainingTestimonial[] = [
  {
    title: "Pharmaceutical Breakthrough",
    quote:
      "The AI/ML in Drug Discovery program gave me the practical skills and confidence to pursue high-impact roles in pharmaceutical innovation.",
    attribution: "- Graduate, Senior Research Scientist",
    icon: "Pill"
  },
  {
    title: "Lab Leadership Unlocked",
    quote:
      "The AI Upskilling course transformed my research approach. Within months, I was able to lead AI initiatives in my department.",
    attribution: "- Graduate, AI Research Lead",
    icon: "BrainCircuit"
  },
  {
    title: "Industry-Ready Talent",
    quote:
      "These programs bridge a critical gap in the industry - technical depth with immediate applicability. Graduates are ready to contribute from day one.",
    attribution: "- Program Director, Bioinformatics & Data Science",
    icon: "BadgeCheck"
  }
];

export const enrollmentCards: TrainingCard[] = [
  {
    title: "Short-Term Certificates",
    description: "Achieve your career goals in weeks - not years - with intensive focused programs.",
    icon: "BadgeCheck"
  },
  {
    title: "High-Demand Fields",
    description: "Invest in skills at the intersection of biology, chemistry, and AI.",
    icon: "Sparkles"
  },
  {
    title: "Proven Placement",
    description: "Join a growing community of trained professionals connected to hiring partners and global opportunities.",
    icon: "Rocket"
  }
];
