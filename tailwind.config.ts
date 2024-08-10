import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        AlbertSans: ["Albert Sans", "sans-serif"],
        TheSignature: ["The Signature", "sans-serif"],
        Unbounded: ["Unbounded", "sans-serif"],
      },
      colors: {
        primary: "#004040",
        secondary: "#D6B66B",
        tertiary: "#0B7373",
      },
    },
  },
  plugins: [],
};
export default config;
