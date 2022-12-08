/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js, ts, jsx, tsx}",
    "./src/app/**",
    "./src/components/**/*.{js, jsx, ts, tsx}",
    "./src/components/**",
  ],
  theme: {
    colors: {
      blackBg: "#171717",
      whiteBg: "#EEEED0",
      blackText: "#181815",
      whiteText: "#E8E8E8",
      testRed: "red",
    },
  },
  plugins: [],
  // darkMode: "class",
};
