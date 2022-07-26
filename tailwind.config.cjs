/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "var(--primary)",
      "primary-300": "var(--primary-300)",
      "neutral-50": "var(--neutral-50)",
      "neutral-100": "var(--neutral-100)",
      "neutral-500": "var(--neutral-500)",
      "neutral-800": "var(--neutral-800)",
      "transparent": "transparent",
    },

    screens: {
      sm: '22.5rem',
      md: '42.5rem',
      xl: '74rem'
    },

    extend: {},
  },
  plugins: [],
}