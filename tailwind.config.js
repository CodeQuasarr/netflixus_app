/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
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
  plugins: [require('flowbite/plugin')],
}
