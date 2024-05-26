/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#04364A",
        secondary: "#176B87",
        third: "#C4EAE8",
        fourt: "#F9FAF9",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
