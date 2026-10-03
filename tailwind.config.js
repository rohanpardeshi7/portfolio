/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 10px 30px -12px rgba(15,23,42,0.10)",
        lift: "0 2px 4px rgba(15,23,42,0.05), 0 24px 48px -16px rgba(79,70,229,0.22)",
      },
    },
  },
  plugins: [],
}
