/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        navMenu: '#282b2d',
        hoverNavMenu: '#ff497c',
        buttonBg: '#ff497c',
        navLinks: '#fff'
      },
      backgroundColor: {
        bgSecondary: '#1f2732'
      },
    },
  },
  plugins: [],
}

