import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
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
        "paragraph": ["1rem", { lineHeight: "100%", fontWeight: 400 }]
      },
      colors: {
        primary: {
          
          50: "#EAF1FF",
          100: "#BDD3FF",
          200: "#9DBEFF",
          300: "#70A1FF",
          400: "#548EFF",
          500: "#2972FF",
          600: "#2568E8",
          700: "#1D51B5",
          800: "#173F8C",
          900: "#11306B",
          950: "#1E293B"
        },
        black: '#000000',
        white: "#FAFAFA"
      },
      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
export default config;
