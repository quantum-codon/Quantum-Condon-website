import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Quantum Codon",
    description:
      "Quantum Codon, also written as QuantumCodon, combines dark genome mining, quantum computing, and AI to unlock novel therapeutics across disease areas.",
    siteUrl: process.env.GATSBY_SITE_URL || process.env.SITE_URL || "https://quantumcodon.in"
  },
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
