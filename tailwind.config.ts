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
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 0.10)',
        'md': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'lg': '0 10px 20px rgba(0, 0, 0, 0.25)',
        'xl': '0 20px 40px rgba(0, 0, 0, 0.30)',
      }
    },
  },
  plugins: [
    function({ addUtilities }:any) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.10)',
        },
        '.text-shadow-md': {
          textShadow: '0 3px 6px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          textShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-xl': {
          textShadow: '0 20px 40px rgba(0, 0, 0, 0.30)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      })
    }
  ],
};
export default config;
