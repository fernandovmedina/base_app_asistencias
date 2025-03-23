/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "adl-regular": ["ADLaMDisplay","sans-serif"],
        "chelsea-regular": ["ChelseaMarket","sans-serif"],
        "klee-regular": ["KleeOneRegular","sans-serif"],
        "klee-semibold": ["KleeOneSemiBold","sans-serif"],
        "inter-extra-thin": ["InterExtraThin","sans-serif"],
        "inter-thin": ["InterThin","sans-serif"],
        "inter-regular": ["InterRegular","sans-serif"],
        "inter-semibold": ["InterSemiBold","sans-serif"],
        "inter-bold": ["InterBold","sans-serif"],
        "inter-extrabold": ["InterExtraBold","sans-serif"],
      },
      colors: {
        primary: {
          brown: "#f7cb60",
          red: "#fb0c06",
          green: "#d5e825",
          yellow: "#fcf071",
          orange: "#f78720",
        },
        secondary: {
          brown: "#da9c3c",
          red: "#ab121b",
          green: "#acc30c",
          yellow: "#f6d339",
          orange: "#f46e05",
        },
      },
    },
  },
  plugins: [],
}