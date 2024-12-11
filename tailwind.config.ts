import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "4xl": [
        "175px",
        {
          lineHeight: "210px",
          letterSpacing: "0px",
        },
      ],
      "3.5xl": [
        "clamp(50px, 5.208vw, 100px)",
        {
          lineHeight: "clamp(65px, 6.51vw, 125px)",
          letterSpacing: "0px",
        },
      ],
      "3xl": [
        "80px",
        {
          lineHeight: "88px",
        },
      ],
      "2xl": [
        "60px",
        {
          lineHeight: "71,8px",
        },
      ],
      xl: [
        "40px",
        {
          lineHeight: "44px",
        },
      ],
      md: [
        "30px",
        {
          lineHeight: "36px",
        },
      ],
      tag: [
        "24px",
        {
          lineHeight: "30px",
        },
      ],
      link: [
        "20px",
        {
          lineHeight: "30px",
        },
      ],
      base: [
        "18px",
        {
          lineHeight: "22px",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "17px",
        },
      ],
    },
    extend: {
      colors: {
        primary: "#1C1B29",
        secondary: "#FBFBEB",
        tercery: "#F2FF50",
      },
      fontFamily: {
        'calfine': ['"calfine"'],
        'druk': ['"druk"'],
      },
    },
  },
  plugins: [],
} satisfies Config;
