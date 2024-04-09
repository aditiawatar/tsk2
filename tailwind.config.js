module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue: { 50: "#eaeefe" },
        black: { 900: "#000000", "900_99": "#00000099" },
        white: { A700_01: "#ffffff", A700_99: "#ffffff99", A700_33: "#ffffff33", A700: "#fdfdfd" },
        gray: {
          50: "#fffafa",
          100: "#f6f6f6",
          200: "#f0f0f0",
          400: "#bcbcbc",
          500: "#999999",
          700: "#5a5a5a",
          800: "#3b3b3b",
          900: "#1b1b1b",
          "600_01": "#7b7b7b",
          "900_19": "#22222219",
          "900_14": "#1b1b1b14",
          "900_01": "#010d3e",
          "900_05": "#181818",
          "900_06": "#1e1e1e",
          "900_04": "#1d1d1d",
          "50_01": "#fafafa",
          "900_07": "#1f1f1f",
          "700_02": "#6a6a6a",
        },
        blue_gray: { 50: "#eff0f6", 400: "#8e8e8e", 500: "#6e6b8f" },
        purple: { A100: "#dd7dff" },
        deep_purple: { 50: "#eee4ff", 200: "#ad93df", 600: "#5c27c0" },
        orange: { 300: "#ffb649" },
      },
      boxShadow: {
        xs: "0px 7px 14px 0px #eaeaea",
        sm: "0px 2px 12px 0px #14132a",
        md: "0px 7px 24px 0px #24262b",
        lg: "0px 4px 4px 0px #000000",
        xl: "0px 8px 40px 0px #000000",
        "2xl": "0px 8px 18px 0px #ad5dfe",
        "3xl": "0px 20px 40px 0px #757575",
        "4xl": "0px 20px 40px 0px #5c27c0",
        "5xl": "0px 4px 24px 0px #000000",
        "6xl": "0px 2px 20px 0px #000000",
        "7xl": "0px -4px 14px 0px #000000",
        "8xl": "0px 4px 14px 0px #000000",
      },
      fontFamily: {
        dmsans: "DM Sans",
        poppins: "Poppins",
        garnettsemibold: "Garnett Semibold",
        sfprodisplay: "SF Pro Display",
        librefranklin: "Libre Franklin",
        garnettmedium: "Garnett Medium",
        spacegrotesk: "Space Grotesk",
        montserrat: "Montserrat",
        outfit: "Outfit",
        gilroyregular: "Gilroy-Regular",
        garnettregular: "Garnett Regular",
        garnettlight: "Garnett Light",
        actor: "Actor",
      },
      backgroundImage: {
        gradient: "linear-gradient(186deg, #eaeefe,#183ec2)",
        gradient1: "linear-gradient(180deg, #ffffff,#d2dcff)",
        gradient2: "linear-gradient(90deg, #ffffff,#ffffff00,#ffffff)",
        gradient3: "linear-gradient(180deg, #000000,#001254)",
        gradient4: "linear-gradient(180deg, #ffffff,#ffffff00)",
        gradient5: "linear-gradient(90deg, #dd7dff,#e0cc85,#8bca91,#70c1ef,#3affff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
