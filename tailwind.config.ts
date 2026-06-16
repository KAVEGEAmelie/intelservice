import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (aligned with the In-Tel Services logo)
        brand: {
          DEFAULT: "#0A2540", // primaire — bleu profond
          50: "#eef4fb",
          100: "#d6e4f3",
          200: "#aecbe8",
          300: "#7ba9d8",
          400: "#4683c4",
          500: "#2c64a8",
          600: "#1f4d86",
          700: "#163a66",
          800: "#0f2a4b",
          900: "#0A2540",
          950: "#06192e",
        },
        lime: {
          // secondaire — vert lime du logo
          DEFAULT: "#9BE600",
          400: "#b6f43a",
          500: "#9BE600",
          600: "#7bc400",
        },
        accent: {
          DEFAULT: "#06B6D4", // accent cyan — innovation
          500: "#06B6D4",
          600: "#0891b2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(at 20% 20%, rgba(6,182,212,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(155,230,0,0.12) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(44,100,168,0.20) 0px, transparent 50%)",
        "mesh-light":
          "radial-gradient(at 20% 20%, rgba(6,182,212,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(155,230,0,0.10) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(44,100,168,0.12) 0px, transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-down": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "spin-slower": "spin-slow 48s linear infinite reverse",
        "pulse-down": "pulse-down 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
