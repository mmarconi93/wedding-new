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
          "55%":  { transform: "rotateX(-95deg)" },
          "100%": { transform: "rotateX(-95deg)" }
        },
        cardSlide: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "60%":  { opacity: "1", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(-16px)" }
        },
        overlayOut: {
          "0%": { opacity: "1" },
          "75%": { opacity: "1" },
          "100%": { opacity: "0", visibility: "hidden" }
        }
      },
      animation: {
        "flap-open": "flapOpen 2.6s ease-in-out forwards",
        "card-slide": "cardSlide 1.0s ease-out forwards 1.4s",
        "overlay-out": "overlayOut 7.0s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;