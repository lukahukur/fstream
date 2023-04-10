/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          default: '#6A4EE1'
        },
        fontMain: '#232530',
        yellow: {
          default: '#E0AB5E'
        },
        gray: {
          default: '#666666',
          medium: '#ABABAB',
          light: '#F5F5F5'
        },
        green: {
          default: '#0CCE6B'
        },
        red: {
          default: '#FF4E42'
        }
      },
      fontFamily: {
        Roboto: "'Roboto', sans-serif"
      }
    }
  },
  plugins: []
};
