import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          "50": "#e7ffe5",
          "100": "#c8ffc7",
          "200": "#96ff95",
          "300": "#58fe5c",
          "400": "#26f52c",
          "500": "#06dc11",
          "600": "#00b30c",
          "700": "#068511",
          "800": "#0b6913",
          "900": "#0f5818",
          "950": "#013208",
        },
        mucky: {
          "50": "#f7f6ef",
          "100": "#ece8d5",
          "200": "#dcd2ac",
          "300": "#c7b67d",
          "400": "#b69c59",
          "500": "#a78a4b",
          "600": "#8f6f3f",
          "700": "#735535",
          "800": "#624731",
          "900": "#423024",
          "950": "#302018",
        },
      },
    },
  },
  plugins: [],
};
export default config;
