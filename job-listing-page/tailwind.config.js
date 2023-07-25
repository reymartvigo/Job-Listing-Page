/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
      LightGrayishCyanBG: "hsl(180, 52%, 96%)",
      LightGrayishCyanFT: "hsl(180, 31%, 95%)",
      DarkGrayishCyan: "hsl(180, 8%, 52%)",
      VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      white: "hsl(0, 0%, 100%)",
    },
    screens: {
      sm: "100px",
      sm2: "375px",
      sm3: "640px",
      md: "768px",
      lg: "1024px",
      lg2: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
