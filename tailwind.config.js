import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ensure `font-sans` and anything inheriting it uses Inter first
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm-600': '600px',
      },
    },
  },
  plugins: [],
}

