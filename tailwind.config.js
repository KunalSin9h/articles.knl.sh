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
            fontSize: "1.3rem",
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
              lineHeight: "1.5rem",
              marginTop: "0.6rem",
              marginBottom: "0.6rem",
            },
            h1: {
              marginTop: "1rem",
              fontWeight: "400",
              marginBottom: "1rem",
              "& code": {
                color: "#181815",
              },
            },
            h2: {
              lineHeight: "1.6rem",
              marginTop: "0.5rem",
              fontWeight: "400",
              marginBottom: "0.5rem",
              "& code": {
                color: "#181815",
              },
            },
            h3: {
              lineHeight: "1.8rem",
              fontWeight: "400",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              "& code": {
                color: "#181815",
              },
            },
            h4: {
              lineHeight: "1.6rem",
              fontWeight: "400",
              fontWeight: "400",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              "& code": {
                color: "#181815",
              },
            },
            blockquote: {
              marginTop: "1.2rem",
              marginBottom: "1.2rem",
              lineHeight: "1.3rem",
              paddingLeft: "0.8rem",
              borderLeft: "0.2rem solid #B99B6B",
            },
            pre: {
              marginTop: "1rem",
              marginBottom: "1rem",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "10px",
              maxWidth: "90%",
              color: "#E8E8E8",
              backgroundColor: "#272727",
              fontSize: "0.9rem",
            },
            code: {
              marginTop: "0.2rem",
              marginBottom: "0.2rem",
              marginLeft: "0.2rem",
              marginRight: "0.2rem",
              borderRadius: "5px",
              padding: "0.2rem",
              fontWeight: "700",
              fontSize: "0.9rem",
              // backgroundColor: "#D0B8A8",
              // color: "#181815",
              // "&::before": {
              //   display: "none",
              // },
              // "&::after": {
              //   display: "none",
              // },
            },

            ol: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",
              "& li::marker": {
                color: "#B99B6B",
              },
            },
            ul: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              paddingLeft: "1.5rem",

              "& li::marker": {
                color: "#B99B6B",
              },
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
              borderColor: "#B99B6B",
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
