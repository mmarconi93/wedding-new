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
          "55%":  { transform: "rotateX(-100deg)" },
          "100%": { transform: "rotateX(-100deg)" }
        },
        cardRise: {
          "0%":   { opacity: "0", transform: "translateY(8%)" },
          "25%":  { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(-115%)" } // fully out
        },
        overlayOut: {
          "0%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" }
        },
        petalFall: {
          "0%": {
            transform:
              "translate3d(var(--xStart,0), -18vh, 0) rotate(var(--rotStart, 0deg))",
            opacity: "0"
          },
          "10%": { opacity: "0.95" },
          "70%": {
            transform:
              "translate3d(calc(var(--xStart,0) + var(--xDrift, 0)), 70vh, 0) rotate(var(--rotMid, 120deg))",
            opacity: "0.95"
          },
          "100%": {
            transform:
              "translate3d(calc(var(--xStart,0) + var(--xEnd, 0)), 110vh, 0) rotate(var(--rotEnd, 260deg))",
            opacity: "0"
          }
        }
      },
      animation: {
        "flap-open": "flapOpen 2.6s ease-in-out forwards",
        "card-rise": "cardRise 3.0s ease-in-out forwards 1.0s", 
        "overlay-out": "overlayOut 7.0s ease forwards",
        petal: "petalFall var(--dur,3.6s) ease-in forwards var(--delay,0s)"
      },
    },
  },
  plugins: [],
};
export default config;