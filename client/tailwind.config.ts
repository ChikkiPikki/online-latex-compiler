import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fffcf2",
      gray: "#ccc5b9",
      darkGray: "#868179",
      lightBlack: "#33312e",
      black: "#252422",
      darkBrown: "#884125",
      orange: "#eb5e28",
      lightOrange: "#ed6d3c",
      ligherOrange: "#ef7a4e",
      lightestOrange: "#f0865e",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
