module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#c87c8a",
        "brand-blue": "#6bc4c7",
      },
      fontFamily: {
        fredoka: ["\"Fredoka\"", "sans-serif"],
        nunito: ["\"Nunito\"", "sans-serif"],
      },
    },
  },
  plugins: [],
}; 