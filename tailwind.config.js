/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        night: "var(--night)",
        "night-2": "var(--night-2)",
        parchment: "var(--parchment)",
        "parchment-2": "var(--parchment-2)",
        marigold: "var(--marigold)",
        "marigold-deep": "var(--marigold-deep)",
        teal: "var(--teal)",
        "teal-deep": "var(--teal-deep)",
        coral: "var(--coral)",
        muted: "var(--muted)",
        indigo: "var(--indigo)",
        steel: "var(--steel)",
        clay: "var(--clay)",
      },
      fontFamily: {
        display: ['"Baloo 2"', '"Noto Sans Telugu"', 'sans-serif'],
        te: ['"Noto Sans Telugu"', '"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
