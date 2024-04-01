/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      backgroundImage: {
        background: "url('https://i.ibb.co/Fxtttd9/background.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
