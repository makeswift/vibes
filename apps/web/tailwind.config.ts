import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,mdx}',
    './registry/**/*.{ts,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    'docs-dropShadow': {
      sm: '-2px 2px 0 #000',
      DEFAULT: '-3px 3px 0 #000',
      md: '-4px 4px 0 #000',
      lg: '-6px 6px 0 #000',
      xl: '-8px 8px 0 #000',
    },
    extend: {
      colors: {
        'docs-ring': 'hsl(var(--docs-ring))',
        'docs-background': 'hsl(var(--docs-background))',
        'docs-foreground': 'hsl(var(--docs-foreground))',
        primary: 'hsl(var(--primary))',
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        contrast: {
          100: 'hsl(var(--contrast-100))',
          200: 'hsl(var(--contrast-200))',
          300: 'hsl(var(--contrast-300))',
          400: 'hsl(var(--contrast-400))',
          500: 'hsl(var(--contrast-500))',
        },
      },
      fontFamily: {
        'docs-heading': ['var(--docs-font-family-heading)'],
        'docs-body': ['var(--docs-font-family-body)'],
        'docs-mono': ['var(--docs-font-family-mono)'],
        heading: ['var(--font-family-heading)'],
        body: ['var(--font-family-body)'],
        mono: ['var(--font-family-mono)'],
      },
      fontSize: {
        xs: [
          'var(--font-size-xs)',
          {
            lineHeight: 'var(--line-height-xs)',
            letterSpacing: 'var(--letter-spacing-xs)',
          },
        ],
        sm: [
          'var(--font-size-sm)',
          {
            lineHeight: 'var(--line-height-sm)',
            letterSpacing: 'var(--letter-spacing-sm)',
          },
        ],
        base: [
          'var(--font-size-base)',
          {
            lineHeight: 'var(--line-height-base)',
            letterSpacing: 'var(--letter-spacing-base)',
          },
        ],
        lg: [
          'var(--font-size-lg)',
          {
            lineHeight: 'var(--line-height-lg)',
            letterSpacing: 'var(--letter-spacing-lg)',
          },
        ],
        xl: [
          'var(--font-size-xl)',
          {
            lineHeight: 'var(--line-height-xl)',
            letterSpacing: 'var(--letter-spacing-xl)',
          },
        ],
        '2xl': [
          'var(--font-size-2xl)',
          {
            lineHeight: 'var(--line-height-2xl)',
            letterSpacing: 'var(--letter-spacing-2xl)',
          },
        ],
      },
      shadows: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(1px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-2px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(2px, 0, 0)' },
        },
        expand: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        collapse: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        rotateFade: {
          from: { opacity: '1', transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)' },
          '35%': { opacity: '0' },
          '70%': { opacity: '0' },
          to: { opacity: '1', transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)' },
        },
        rotate: {
          from: {
            transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)',
          },
          to: {
            transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)',
          },
        },
        scroll: {
          to: { backgroundPosition: '5px 0' },
        },
        dotScrollSmall: {
          to: { backgroundPosition: '-6px -6px, -12px -12px' },
        },
        dotScrollLarge: {
          to: { backgroundPosition: '-8px -8px, -16px -16px' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        shake: 'shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both',
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        rotate: 'rotate 2000ms linear infinite',
        scroll: 'scroll 200ms infinite linear both',
        scrollLeft: 'scrollLeft var(--marquee-duration) linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
} satisfies Config

export default config
