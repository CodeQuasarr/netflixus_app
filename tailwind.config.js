/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #131720, transparent 80%), linear-gradient(0deg, #131720, transparent 80%)',
      },
      colors: {
        accent: '#131720',
      },
    },
  },
  plugins: [],
}
