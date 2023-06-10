/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "secondary-black": "#1C1718",
      "primary-red": "#E44320",
      "secondary-white": "#D9D9D9",
      "input-background": "#1E1E1E",
      "bg-overlay": "#00000080",
      "primary-white": "#FFFFFF",
    },
    extend: {
      spacing: {
        620: "620px",
        540: "554px",
        520: "520px",
        420: "420px",
        320: "320px",
      },
    },
  },
  plugins: [],
};
