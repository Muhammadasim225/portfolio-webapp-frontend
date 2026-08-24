/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b0f14',
          soft: '#12171f',
          border: '#232a35',
        },
        paper: {
          DEFAULT: '#faf9f7',
          soft: '#f2f1ee',
        },
        accent: {
          DEFAULT: '#f97316',
          soft: '#fdba74',
        },
        accent2: {
          DEFAULT: '#3C9189',
          soft: '#6cb3ab',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(249, 115, 22, 0.35)',
      },
    },
  },
  plugins: [],
}
