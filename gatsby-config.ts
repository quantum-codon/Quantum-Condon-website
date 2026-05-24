import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Quantum Codon",
    description:
      "Quantum Codon combines dark genome mining, quantum computing, and AI to unlock novel therapeutics across disease areas.",
    siteUrl: process.env.GATSBY_SITE_URL || process.env.SITE_URL || "https://quantumcodon.com"
  },
  plugins: ["gatsby-plugin-postcss"]
};

export default config;
