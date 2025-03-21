/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
        nunito: ["Nunito", "serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

