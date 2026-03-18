/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",   // page background
        foreground: "#0B1230",   // main text
        muted: "#4B5563",        // secondary text
        primary: "#0F1C3A",      // button/navbar primary
        accent: "#F3B63A",       // accent / highlights
        accent2: "#E6C96A",      // secondary accent
      },
    },
  },
  plugins: [],
};
