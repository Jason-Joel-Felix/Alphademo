/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#083133',    // Dark teal for headers and body text
          DEFAULT: '#46B8B6', // Medium teal for CTAs and primary elements
          light: '#77D5D4',   // Light teal for accents and highlights
        },
        secondary: {
          DEFAULT: '#77D5D4',  // Light teal for secondary elements
        },
        accent: {
          DEFAULT: '#46B8B6',  // Medium teal for accent elements
          glow: '#77D5D4',     // Light teal for glow effects
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(70, 184, 182, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(70, 184, 182, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
};