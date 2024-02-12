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
        Product_Sans: "SF Pro Display",
        SF_Pro_Display: "SF Pro Display",
      },
      colors: {
        "gray_c-500": "#6A6A6A",
        /* black */
        "black_c-500": "#353535",
        "black_c-400": "#0C0D11",
        "black_c-200": "#0C0D11",
      },
    },
  },
  plugins: [],
};
export default config;
