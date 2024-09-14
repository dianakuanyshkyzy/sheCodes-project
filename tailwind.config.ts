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
        foreground: "var(--foreground)",
        text: '#0f0c19',
        background: '#fbfafe',
        primary: '#6158e9',
        secondary: '#f4dede',
        accent: '#f68142',
      },
    },
  },
  plugins: [],
};
export default config;
