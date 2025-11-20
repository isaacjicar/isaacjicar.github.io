/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseDark: "#0b1020",
        brand: {
          primary:   "#4C6CB3", 
          secondary: "#4C9FB3", 
          accent:    "#4CB393", 
        },
      },
      backgroundImage: {
        vignette:
          "radial-gradient(60% 50% at 60% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        isaacTheme: {
          primary:   "#4C6CB3", 
          secondary: "#4C9FB3", 
          accent:    "#4CB393", 
          neutral:   "#151923",
          "base-100":"#0b1020",
          info:      "#4C9FB3",
          success:   "#4CB393",
          warning:   "#fbbd23",
          error:     "#f87272",
        },
      },
    ],
    darkTheme: "isaacTheme",
  },
};
