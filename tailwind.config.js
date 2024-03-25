/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverGray: "#CCCCCC",
        activeNav: "#0052CC",
      },
    },
  },
  plugins: [],
};
