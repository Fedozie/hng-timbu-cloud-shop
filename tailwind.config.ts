import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-1": ["3.25rem", { lineHeight: "114.286%", fontWeight: 700 }],
        "heading-2": ["2.5rem", { lineHeight: "128%", fontWeight: 600 }],
        "heading-3": ["1.75rem", { lineHeight: "128.571%", fontWeight: 600 }],
        "heading-4": ["1.5rem", { lineHeight: "150%", fontWeight: 500 }],
        "heading-5": ["1.25rem", { lineHeight: "140%", fontWeight: 500 }],
        "heading-6": ["1rem", { lineHeight: "175%", fontWeight: 500 }],
      }
    },
  },
  plugins: [],
};
export default config;
