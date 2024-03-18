/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/HeroImg.png')",
      },
      colors: {
        pink: { 500: "#D11242" },
        gray: {
          300: "#848484",
          400: "#555555",
          600: "#19191A",
          700: "#585858",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond"],
      },
      screens: {
        "4xl": "1728px",
      },
    },
  },
  plugins: [],
};
