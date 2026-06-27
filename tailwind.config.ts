import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#000000",
          900: "#0A0A0A",
          800: "#141414",
          700: "#1F1F1F",
          600: "#2A2A2A",
        },
        bone: {
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F4F4F5",
          300: "#E4E4E7",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
        },
        signal: {
          DEFAULT: "#FACC15",
          400: "#FDE047",
          500: "#FACC15",
          600: "#EAB308",
          700: "#CA8A04",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-xl": "clamp(3rem, 10vw, 9rem)",
        "hero-lg": "clamp(2.5rem, 7vw, 6rem)",
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      maxWidth: {
        container: "1280px",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
