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
        goldmuted: "#BEA67A"
      },
      fontFamily: {
        display: ["var(--font-cormorant)"],
        body: ["var(--font-inter)"]
      },
      letterSpacing: {
        extra: ".35em"
      }
    },
  },
  plugins: [],
};
export default config;
