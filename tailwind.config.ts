import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx,mdx}', './mdx-components.tsx'],
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
      sm: '-2px 2px 0 rgba(0,0,0,100)',
      DEFAULT: '-3px 3px 0 rgba(0,0,0,100)',
      md: '-4px 4px 0 rgba(0,0,0,100)',
      lg: '-6px 6px 0 rgba(0,0,0,100)',
      xl: '-8px 8px 0 rgba(0,0,0,100)',
    },
    extend: {
      colors: {
        'docs-border': 'hsl(var(--docs-border))',
        'docs-input': 'hsl(var(--docs-input))',
        'docs-ring': 'hsl(var(--docs-ring))',
        'docs-background': 'hsl(var(--docs-background))',
        'docs-foreground': 'hsl(var(--docs-foreground))',
        'docs-primary': {
          DEFAULT: 'hsl(var(--docs-primary))',
          foreground: 'hsl(var(--docs-primary-foreground))',
        },
        'docs-secondary': {
          DEFAULT: 'hsl(var(--docs-secondary))',
          foreground: 'hsl(var(--docs-secondary-foreground))',
        },
        'docs-muted': {
          DEFAULT: 'hsl(var(--docs-muted))',
          foreground: 'hsl(var(--docs-muted-foreground))',
        },
        'docs-accent': {
          DEFAULT: 'hsl(var(--docs-accent))',
          foreground: 'hsl(var(--docs-accent-foreground))',
        },
        'docs-popover': {
          DEFAULT: 'hsl(var(--docs-popover))',
          foreground: 'hsl(var(--docs-popover-foreground))',
        },
        'docs-card': {
          DEFAULT: 'hsl(var(--docs-card))',
          foreground: 'hsl(var(--docs-card-foreground))',
        },
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        muted: {
          background: 'hsl(var(--color-muted-background))',
          foreground: 'hsl(var(--color-muted-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          highlight: 'hsl(var(--color-primary-highlight))',
        },
        text: {
          DEFAULT: 'hsl(var(--color-text))',
        },
        border: 'hsl(var(--color-border-color))',
      },
      fontFamily: {
        'docs-heading': ['var(--font-docs-heading)'],
        'docs-sans': ['var(--font-docs-sans)'],
        'docs-mono': ['var(--font-docs-mono)'],
      },
      keyframes: {
        expand: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        collapse: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        rotate: {
          '0%': {
            transform: 'rotateZ(0deg) translate3d(-50%,-50%,0)',
          },
          '100%': {
            transform: 'rotateZ(360deg) translate3d(-50%,-50%,0)',
          },
        },
        scroll: {
          to: { backgroundPosition: '5px 0' },
        },
      },
      animation: {
        expand: 'expand 400ms cubic-bezier(1, 0, 0.25, 1)',
        collapse: 'collapse 400ms cubic-bezier(1, 0, 0.25, 1)',
        rotate: 'rotate 2000ms linear infinite',
        scroll: 'scroll 200ms infinite linear both',
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
