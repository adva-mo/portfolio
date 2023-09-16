/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "rgb(39, 34, 38)",
        grey: "rgb(96,100,101)",
      },
      backgroundColor: {
        sand: "rgba(245,201,167,0.5)",
        orange: "rgb(205,101,70,0.5)",
      },
    },
  },
  plugins: [],
};
