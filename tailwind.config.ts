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
        paper: "#F8FBFC",
        ink: "#102A36",
        pine: "#1F6F8B",
        "pine-dark": "#15566D",
        rust: "#D65B48",
        "rust-dark": "#A83F31",
        card: "#E8F3F6",
        sage: "#587783",
        line: "#C9DDE3",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "tear-edge":
          "repeating-linear-gradient(90deg, transparent, transparent 6px, #D9D3C3 6px, #D9D3C3 8px)",
      },
    },
  },
  plugins: [],
};
export default config;
