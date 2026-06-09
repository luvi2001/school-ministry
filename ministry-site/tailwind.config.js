/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        primary: '#ffffff',
        secondary: '#121358',
        accent: '#FF653F',
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f2d88a',
          300: '#ebc04a',
          400: '#e4a820',
          500: '#d08d12',
          600: '#a96c0e',
          700: '#864f10',
          800: '#6e3f14',
          900: '#5d3514',
        },
        earth: {
          50: '#f7f3ef',
          100: '#ede4d8',
          200: '#dbc9b1',
          300: '#c6a882',
          400: '#b4895b',
          500: '#a47245',
          600: '#8f5d3a',
          700: '#764930',
          800: '#623c2a',
          900: '#523226',
        },
        forest: {
          500: '#2d6a4f',
          600: '#1b4332',
          700: '#14362a',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
