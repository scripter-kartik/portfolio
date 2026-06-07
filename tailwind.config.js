module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        "gray-custom": "#ABB2BF",
        "dark-bg": "#070A11",
      },
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        "intel-mono": ["Intel One Mono", "monospace"],
        lato: ["Lato", "sans-serif"],
        playwrite: ["Playwrite AU QLD", "cursive"],
        "winky-rough": ["Winky Rough", "cursive"],
      },
    },
  },
  plugins: [],
};
