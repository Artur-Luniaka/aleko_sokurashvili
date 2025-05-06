/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "40px",
          lg: "80px",
        },
        screens: {
          DEFAULT: "313px",
          lg: "1120px",
        },
      },
      fontFamily: {
        inter: ["Inter"],
        raleway: ["Raleway"],
        manrope: ["Manrope"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
