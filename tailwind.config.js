/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      select:{
        color:'red',
      },
      keyframes: {
        bar: {
          from: { width: 0 },
        },
        beam: {
          to: { opacity: 0 },
          via:{opacity:0.5},
          from: { opacity: 0 },
        },
      },

      animation: {
        barrun: "bar 600ms ease-in-out",
        barrun2: "bar 2s ease-in-out",
        beamer: "beam 8s ease-in-out infinite",
      },
      colors: {
        bglight: "white",
        bgdark: "#222222",
        primary: "#4682b4",
        secondary: "#27272a",
        third: "#27272a",
      },
    },
  },
  plugins: [],
};
