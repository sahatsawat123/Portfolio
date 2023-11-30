/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#5dbf4e",
        primaryContent: "#8f96a6",
        primarySubContent: "#4b4f58",
        primaryBase: "#434343",
        primaryHeader: "#fff",
        primaryBackground: "#10403B",
        primaryBG: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
