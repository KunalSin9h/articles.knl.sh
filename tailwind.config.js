/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js, ts, jsx, tsx}",
    "./src/app/**",
    "./src/components/**/*.{js, jsx, ts, tsx}",
    "./src/components/**",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1.4rem",
            lineHeight: "1.6rem",
            a: {
              textDecoration: "none",
              color: "#996070",
              textUnderlineOffset: "4px",
              fontWeight: "700",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            p: {
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
            },
            h1: {
              marginTop: "1rem",
              fontWeight: "400",
              marginBottom: "1rem",
            },
            h2: {
              marginTop: "0.5rem",
              fontWeight: "400",
              marginBottom: "0.5rem",
            },
            h3: {
              fontWeight: "400",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            h4: {
              fontWeight: "400",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
            blockquote: {
              marginTop: "1.2rem",
              marginBottom: "1.2rem",
              lineHeight: "1.2rem",
              paddingLeft: "0.8rem",
            },
            ol: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
            },
            ul: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
            },
            li: {
              marginTop: "0.1rem",
              marginBottom: "0.1rem",
            },
            "ol > li": {
              paddingLeft: "0.2rem",
            },
            "ul > li": {
              paddingLeft: "0.2rem",
            },
            "> ul > li p": {
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
            },
            "> ul > li > *:first-child": {
              marginTop: "0.2rem",
            },
            "> ul > li > *:last-child": {
              marginBottom: "0.2rem",
            },
            "> ol > li > *:first-child": {
              marginTop: "0.2rem",
            },
            "> ol > li > *:last-child": {
              marginBottom: "0.2rem",
            },
            "ul ul, ul ol, ol ul, ol ol": {
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
            },
            hr: {
              marginTop: "0.7rem",
              marginBottom: "0.7rem",
              color: "#171717",
            },
            img: {
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              maxWidth: "90%",
            },
            video: {
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
            },
            figure: {
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
            },
          },
        },
      },
    },
    colors: {
      blackBg: "#171717",
      whiteBg: "#EEEED0",
      blackText: "#181815",
      whiteText: "#E8E8E8",
      cream: "#B9BA87",
      dullPurple: "#996070",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
