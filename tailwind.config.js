/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      'black': '#0b0b0f',
    },
    minHeight: {
      'sm': '33vh',
      'md': '66vh',
      'lg': 'calc(95vh - 80px)',
      'elg': '100vh',
    },
    borderRadius: {
      'btn': '10px',
      'card': '25px',
    },
    extend: {},
  },
  plugins: [],
}
