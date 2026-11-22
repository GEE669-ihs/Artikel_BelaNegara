/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bottle: {
          50: '#f2f8f5',
          100: '#e1efe8',
          200: '#c3dfd2',
          300: '#98c7b3',
          400: '#67a88f',
          500: '#438b72',
          600: '#2e705b',
          700: '#255949',
          800: '#1f483c',
          900: '#153a30', // Hijau Botol Klasik
          950: '#0a231d', // Hijau Botol Pekat
        },
        paper: '#fbfaf8',
        ink: {
          900: '#181b1a',
          800: '#2a2f2d',
          700: '#3e4542',
          600: '#5a635f',
          500: '#757e7a',
          400: '#9ca3af',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
