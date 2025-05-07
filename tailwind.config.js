/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1280px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "40px",
          lg: "80px",
        },
        screens: {
          DEFAULT: "393px",
          lg: "1280px",
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
