/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 20px 0px rgb(69 67 96 / 10%)",
      },
    },
  },
  plugins: [],
};
