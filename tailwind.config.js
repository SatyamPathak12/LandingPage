/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007A7C', // Updated to match logo background
          dark: '#005f61',
          light: '#339596',
        },
        secondary: {
          DEFAULT: '#53C22B', // Green for Academy
        },
        accent: {
          purple: '#662D91', // Purple for Guide
          blue: '#5B7F95', // Blue/Gray for Experts
        },
        dark: '#1A1A1A',
        light: '#F5F9F9', // Light background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
