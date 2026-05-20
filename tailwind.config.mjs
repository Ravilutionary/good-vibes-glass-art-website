import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', 
        '4xl': '2560px',
      },
      colors: {
        'gv-black': '#0F0F0F',
        'gv-blue': '#0D2C54',
        'gv-green': '#8BC34A',
        'gv-red': '#E53935',
        'gv-yellow': '#FDD835',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Eczar', 'serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 20s linear infinite',
        'fade-cycle': 'fade-cycle 12s ease-in-out infinite',
      },
      keyframes: {
        'fade-cycle': {
          '0%, 20%': { opacity: '1', transform: 'translateY(0)' },
          '25%, 100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }
      }
    }
  },
  plugins: [
    typography,
  ],
}
