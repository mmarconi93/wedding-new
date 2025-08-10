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

      // inside theme.extend
      keyframes: {
        flapOpen: {
          "0%":   { transform: "rotateX(0deg)" },
          "55%":  { transform: "rotateX(-100deg)" },
          "100%": { transform: "rotateX(-100deg)" }
        },
        // Card rises completely above the envelope
        cardRise: {
          "0%":   { opacity: "0", transform: "translateY(8%)" },
          "25%":  { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(-115%)" }
        },
        overlayOut: {
          "0%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" }
        },
        /* Realistic petal fall; each petal sets its own CSS variables */
        petalFall: {
          "0%": {
            transform:
              "translate3d(var(--xStart,0), -22vh, 0) rotate(var(--rotStart, 0deg))",
            opacity: "0"
          },
          "12%": { opacity: "0.98" },
          "70%": {
            transform:
              "translate3d(calc(var(--xStart,0) + var(--xDrift, 0)), 72vh, 0) rotate(var(--rotMid, 140deg))",
            opacity: "0.98"
          },
          "100%": {
            transform:
              "translate3d(calc(var(--xStart,0) + var(--xEnd, 0)), 112vh, 0) rotate(var(--rotEnd, 300deg))",
            opacity: "0"
          }
        }
      },
      animation: {
        "flap-open": "flapOpen 2.4s ease-in-out forwards",
        "card-rise": "cardRise 3.0s ease-in-out forwards 1.0s",
        "overlay-out": "overlayOut 7.0s ease forwards",
        "petal": "petalFall var(--dur,3.8s) ease-in forwards var(--delay,0s)"
      },
    },
  },
  plugins: [],
};
export default config;