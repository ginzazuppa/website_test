/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangePrima: "#e58203",
      },
      screens: {
        sms: { max: "500px" },
        md: { max: "960px" },
      },
    },
  },
  plugins: [],
};
