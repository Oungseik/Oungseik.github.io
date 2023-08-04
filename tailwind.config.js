const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        svelte: "#ff531a",
        vue: "#32a875",
        react: "#149eca",
      },
      fontFamily: {
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
      },
      animation: {
        fadein: "fadein 1s .5s linear 1 forwards",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      gridTemplateColumns: {
        map: "1fr max-content 1fr",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
