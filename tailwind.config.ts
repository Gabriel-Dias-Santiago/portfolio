import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#020617",
        card: "#0F172A",
        muted: "#94A3B8",
        brand: "#2563EB",
        violet: "#7C3AED",
      },
      boxShadow: {
        glow: "0 0 60px rgba(37, 99, 235, 0.28)",
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(148,163,184,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
