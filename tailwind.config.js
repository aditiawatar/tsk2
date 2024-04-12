/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-100": "#fff",
        black: "#000",
        gray: {
          "100": "#7b7b7b",
          "200": "rgba(255, 255, 255, 0.01)",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(27, 27, 27, 0.08)",
          "500": "rgba(255, 255, 255, 0.6)",
          "600": "rgba(255, 255, 255, 0.2)",
          "700": "rgba(34, 34, 34, 0.1)",
        },
        silver: "#bcbcbc",
        midnightblue: "#010d3e",
        whitesmoke: "#f1f1f1",
        darkgray: "#999",
        "neutral-300": "#eff0f7",
        "neutral-600": "#6f6c90",
        lavender: "#eaeefe",
      },
      spacing: {},
      fontFamily: {
        "body-s-bold": "Inter",
        h2: "'DM Sans'",
        satoshi: "Satoshi",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "35xl": "54px",
      smi: "13px",
      lg: "18px",
      "3xl": "22px",
      "7xl": "26px",
      "71xl": "90px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
