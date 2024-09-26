/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        xl: "2rem",
        lg: "1.5rem",
        md: "1rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightgrey: "#180C3305",
        black: "#0D0D0D",
        bg: {
          100: "#FFEBCC",
          500: "#FFBE5D",
        },
        text: {
          300: "#6B6B6B",
          500: "#180C33",
        },
      },
    },
  },
  plugins: [],
};
