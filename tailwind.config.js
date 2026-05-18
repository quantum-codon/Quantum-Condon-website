/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        codon: {
          black: "#020510",
          navy: "#071126",
          panel: "#09172d",
          line: "rgba(134, 185, 255, 0.18)",
          blue: "#1e8bff",
          cyan: "#58d7ff",
          red: "#ff304f",
          orange: "#ff8a3d"
        }
      },
      boxShadow: {
        glowBlue: "0 0 40px rgba(30, 139, 255, 0.35)",
        glowRed: "0 0 40px rgba(255, 48, 79, 0.28)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(88, 215, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(88, 215, 255, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
