import typography from '@tailwindcss/typography';

function withOpacity(variableName, fallback) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `color-mix(in srgb, var(${variableName}, ${fallback}) calc(${opacityValue} * 100%), transparent)`;
    }
    return `var(${variableName}, ${fallback})`;
  };
}

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
        // Theme variables
        'brand-primary': withOpacity('--color-primary', '#00f0ff'),
        'brand-secondary': withOpacity('--color-secondary', '#06b6d4'),
        'brand-accent': withOpacity('--color-accent', '#8a2be2'),
        'surface-bg': withOpacity('--color-bg', '#0a0a0a'),
        'surface-card': withOpacity('--color-card', '#141414'),
        'surface-border': withOpacity('--color-border', 'rgba(255,255,255,0.08)'),
        'text-muted': withOpacity('--color-text-muted', '#9ca3af'),

        // Backwards compatible brand aliases mapping to CSS variables
        'gv-black': withOpacity('--color-bg', '#0F0F0F'),
        'gv-blue': '#0D2C54',
        'gv-green': withOpacity('--color-accent-green', '#8BC34A'),
        'gv-red': '#E53935',
        'gv-yellow': '#FDD835',
        'deep-black': withOpacity('--color-bg', '#0a0a0a'),
        'charcoal': withOpacity('--color-card', '#141414'),
        'teal-glow': withOpacity('--color-primary', '#00f0ff'),
        'bright-cyan': withOpacity('--color-secondary', '#06b6d4'),
        'electric-blue': withOpacity('--color-primary', '#3b82f6'),
        'green-glow': withOpacity('--color-accent-green', '#10b981'),
        'purple-vibe': withOpacity('--color-accent', '#8a2be2'),
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
