/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverGray: "#CCCCCC",
        activeNav: "#0052CC",
        textMainColor: "#344563",
        textSecondColor: "#6B778C"
      },
    },
  },
  plugins: [],
};
