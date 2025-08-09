import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0F2A22",
        gold: "#D4B483",
        goldmuted: "#BEA67A",
      },
      fontFamily: {
        display: ["var(--font-cormorant)"],
        body: ["var(--font-inter)"],
      },
      letterSpacing: { extra: ".35em" },

      // ⬇️ keyframes & animations belong inside theme.extend
      keyframes: {
        flapOpen: {
          "0%":   { transform: "rotateX(0deg)" },
          "55%":  { transform: "rotateX(-100deg)" }, // a touch more dramatic
          "100%": { transform: "rotateX(-100deg)" }
        },
        // The card rises completely out of the envelope.
        // Percentages for translateY are relative to the CARD height.
        cardRise: {
          "0%":   { opacity: "0", transform: "translateY(12%)" },
          "35%":  { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(-115%)" } // fully out
        },
        overlayOut: {
          "0%": { opacity: "1" },
          "88%": { opacity: "1" }, // hold most of the time
          "100%": { opacity: "0", visibility: "hidden" }
        }
      },
      animation: {
        "flap-open": "flapOpen 2.6s ease-in-out forwards",
        "card-rise": "cardRise 3.0s ease-in-out forwards 1.0s", 
        "overlay-out": "overlayOut 7.0s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;