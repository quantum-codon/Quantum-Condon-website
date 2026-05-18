import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Quantum Codon",
    description:
      "Quantum Codon combines dark genome mining, quantum computing, and AI to unlock novel therapeutics across disease areas.",
    siteUrl: "https://quantumcodon.example"
  },
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
