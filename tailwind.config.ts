import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      bebas: ["'Bebas Neue'", "sans-serif"],
      satisfy: ["Satisfy", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        navbar: "url('/images/beata-ratuszniak-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
