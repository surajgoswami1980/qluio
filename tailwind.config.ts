import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary blue (anchored on #2563EB)
        primary: {
          50: "#eff5ff",
          100: "#dbe8fe",
          200: "#bfd7fe",
          300: "#93bbfd",
          400: "#6096fa",
          500: "#3b76f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // Cyan accent (anchored on #06B6D4)
        accent: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
        },
        // Deep navy surfaces
        navy: {
          DEFAULT: "#081426",
          950: "#050d1a",
          900: "#081426",
          800: "#0d1b2a",
          700: "#13263b",
          600: "#1b3a5b",
        },
        ink: "#0f172a",
        body: "#475569",
        line: "#e2e8f0",
        canvas: "#f7f9fc",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        glass:
          "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 24px 48px -24px rgba(0,0,0,0.6)",
        glow: "0 0 0 1px rgba(37,99,235,0.4), 0 8px 32px -8px rgba(37,99,235,0.55)",
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 13s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
