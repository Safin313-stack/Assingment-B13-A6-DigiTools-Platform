/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#4F39F6',
        'primary-dark': '#3B27E8',
        'primary-light': '#EDE9FE',
        dark: '#101727',
        muted: '#627382',
        'light-bg': '#F8F9FF',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      digitools: {
        "primary": "#4F39F6",
        "secondary": "#7C3AED",
        "accent": "#4F39F6",
        "neutral": "#101727",
        "base-100": "#ffffff",
        "base-200": "#F8F9FF",
        "base-300": "#E5E7EB",
      },
    }],
  },
}
