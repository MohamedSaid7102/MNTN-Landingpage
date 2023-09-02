/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1.5s linear infinite', // Customize animation here
      },
      dropShadow: {
        'custom': '1px 1px 2px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'hero-bg-img': "url('/src/assets/hero.png')",
      },
      colors: {
        'accent': '#FBD784',
      }
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
}
