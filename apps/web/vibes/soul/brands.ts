import { DM_Serif_Text, Inter, Roboto_Mono } from 'next/font/google';

import { Brands } from '@/vibes/schema';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap' });
const dm_serif_text = DM_Serif_Text({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const brands = [
  {
    name: 'Electric',
    logo: '',
    cssVars: {
      '--primary': 'oklch(90.35% 0.22 136.76)',
      '--primary-highlight': 'color-mix(in oklab, var(--primary), white 75%)',
      '--primary-shadow': 'color-mix(in oklab, var(--primary), black 75%)',

      '--accent': 'oklch(95.86% 0.089 133.33)',
      '--accent-highlight': 'color-mix(in oklab, var(--accent), white 75%)',
      '--accent-shadow': 'color-mix(in oklab, var(--accent), black 75%)',

      '--success': 'oklch(83.77% 0.214 142.31)',
      '--success-highlight': 'color-mix(in oklab, var(--success), white 75%)',
      '--success-shadow': 'color-mix(in oklab, var(--success), black 75%)',

      '--error': 'oklch(64.89% 0.237 26.97)',
      '--error-highlight': 'color-mix(in oklab, var(--error), white 75%)',
      '--error-shadow': 'color-mix(in oklab, var(--error), black 75%)',

      '--warning': 'oklch(83.42% 0.159 79.51)',
      '--warning-highlight': 'color-mix(in oklab, var(--warning), white 75%)',
      '--warning-shadow': 'color-mix(in oklab, var(--warning), black 75%)',

      '--info': 'oklch(49.07% 0.177 262.04)',
      '--info-highlight': 'color-mix(in oklab, var(--info), white 75%)',
      '--info-shadow': 'color-mix(in oklab, var(--info), black 75%)',

      '--background': 'oklch(100% 0 0)',
      '--foreground': 'oklch(18.22% 0 0)',

      '--contrast-100': 'oklch(94.61% 0 0)',
      '--contrast-200': 'oklch(86.07% 0 0)',
      '--contrast-300': 'oklch(76.68% 0 0)',
      '--contrast-400': 'oklch(63.34% 0 0)',
      '--contrast-500': 'oklch(45.68% 0 0)',

      '--font-family-heading': dm_serif_text.style.fontFamily,
      '--font-variation-settings-heading': '"slnt" 0',
      '--font-feature-settings-heading': 'normal',

      '--font-family-body': inter.style.fontFamily,
      '--font-variation-settings-body': '"slnt" 0',
      '--font-feature-settings-body': 'normal',

      '--font-family-mono': roboto_mono.style.fontFamily,
      '--font-variation-settings-mono': '"slnt" 0',
      '--font-feature-settings-mono': 'normal',

      '--font-size-xs': '0.75rem',
      '--font-size-xs-line-height': 'calc(1.25 / 0.75)',
      '--font-size-xs-letter-spacing': '0',

      '--font-size-sm': '0.875rem',
      '--font-size-sm-line-height': 'calc(1.5 / 0.875)',
      '--font-size-sm-letter-spacing': '0',

      '--font-size-base': '1rem',
      '--font-size-base-line-height': 'calc(1.5 / 1)',
      '--font-size-base-letter-spacing': '-0.01em',

      '--font-size-lg': '1.125rem',
      '--font-size-lg-line-height': 'calc(1.75 / 1.125)',
      '--font-size-lg-letter-spacing': '-0.01em',

      '--font-size-xl': '1.25rem',
      '--font-size-xl-line-height': 'calc(1.75 / 1.25)',
      '--font-size-xl-letter-spacing': '-0.01em',

      '--font-size-2xl': '1.5rem',
      '--font-size-2xl-line-height': 'calc(1.75 / 1.5)',
      '--font-size-2xl-letter-spacing': '-0.01em',

      '--font-size-3xl': '1.875rem',
      '--font-size-3xl-line-height': 'calc(2 / 1.875)',
      '--font-size-3xl-letter-spacing': '-0.01em',

      '--font-size-4xl': '2.5rem',
      '--font-size-4xl-line-height': 'calc(2.75 / 2.5)',
      '--font-size-4xl-letter-spacing': '-0.02em',

      '--font-size-5xl': '3rem',
      '--font-size-5xl-line-height': '1',
      '--font-size-5xl-letter-spacing': '-0.02em',

      '--font-size-6xl': '3.75rem',
      '--font-size-6xl-line-height': '1',
      '--font-size-6xl-letter-spacing': '-0.02em',

      '--font-size-7xl': '4.5rem',
      '--font-size-7xl-line-height': '1',
      '--font-size-7xl-letter-spacing': '-0.04em',

      '--font-size-8xl': '6rem',
      '--font-size-8xl-line-height': '1',
      '--font-size-8xl-letter-spacing': '-0.04em',

      '--font-size-9xl': '7rem',
      '--font-size-9xl-line-height': '1',
      '--font-size-9xl-letter-spacing': '-0.04em',

      '--shadow-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  {
    name: 'Warm',
    logo: '',
    cssVars: {
      '--primary': 'oklch(82.53% 0.171 80.01)',
      '--primary-highlight': 'color-mix(in oklab, var(--primary), white 75%)',
      '--primary-shadow': 'color-mix(in oklab, var(--primary), black 75%)',

      '--accent': 'oklch(92.05% 0.097 88.72)',
      '--accent-highlight': 'color-mix(in oklab, var(--accent), white 75%)',
      '--accent-shadow': 'color-mix(in oklab, var(--accent), black 75%)',

      '--success': 'oklch(68.94% 0.183 142.19)',
      '--success-highlight': 'color-mix(in oklab, var(--success), white 75%)',
      '--success-shadow': 'color-mix(in oklab, var(--success), black 75%)',

      '--error': 'oklch(62.80% 0.258 29.23)',
      '--error-highlight': 'color-mix(in oklab, var(--error), white 75%)',
      '--error-shadow': 'color-mix(in oklab, var(--error), black 75%)',

      '--warning': 'oklch(80.16% 0.171 73.27)',
      '--warning-highlight': 'color-mix(in oklab, var(--warning), white 75%)',
      '--warning-shadow': 'color-mix(in oklab, var(--warning), black 75%)',

      '--info': 'oklch(49.07% 0.177 262.04)',
      '--info-highlight': 'color-mix(in oklab, var(--info), white 75%)',
      '--info-shadow': 'color-mix(in oklab, var(--info), black 75%)',

      '--background': 'oklch(100% 0 0)',
      '--foreground': 'oklch(18.22% 0 0)',

      '--contrast-100': 'oklch(94.61% 0 0)',
      '--contrast-200': 'oklch(91.58% 0 0)',
      '--contrast-300': 'oklch(78.26% 0 0)',
      '--contrast-400': 'oklch(68.30% 0 0)',
      '--contrast-500': 'oklch(62.34% 0 0)',

      '--font-family-heading': inter.style.fontFamily,
      '--font-variation-settings-heading': '"slnt" 0',
      '--font-feature-settings-heading': 'normal',

      '--font-family-body': inter.style.fontFamily,
      '--font-variation-settings-body': '"slnt" 0',
      '--font-feature-settings-body': 'normal',

      '--font-family-mono': roboto_mono.style.fontFamily,
      '--font-variation-settings-mono': '"slnt" 0',
      '--font-feature-settings-mono': 'normal',

      '--font-size-xs': '0.75rem',
      '--font-size-xs-line-height': 'calc(1.25 / 0.75)',
      '--font-size-xs-letter-spacing': '0',

      '--font-size-sm': '0.875rem',
      '--font-size-sm-line-height': 'calc(1.5 / 0.875)',
      '--font-size-sm-letter-spacing': '0',

      '--font-size-base': '1rem',
      '--font-size-base-line-height': 'calc(1.5 / 1)',
      '--font-size-base-letter-spacing': '-0.01em',

      '--font-size-lg': '1.125rem',
      '--font-size-lg-line-height': 'calc(1.75 / 1.125)',
      '--font-size-lg-letter-spacing': '-0.01em',

      '--font-size-xl': '1.25rem',
      '--font-size-xl-line-height': 'calc(1.75 / 1.25)',
      '--font-size-xl-letter-spacing': '-0.01em',

      '--font-size-2xl': '1.5rem',
      '--font-size-2xl-line-height': 'calc(1.75 / 1.5)',
      '--font-size-2xl-letter-spacing': '-0.01em',

      '--font-size-3xl': '1.875rem',
      '--font-size-3xl-line-height': 'calc(2 / 1.875)',
      '--font-size-3xl-letter-spacing': '-0.01em',

      '--font-size-4xl': '2.5rem',
      '--font-size-4xl-line-height': 'calc(2.75 / 2.5)',
      '--font-size-4xl-letter-spacing': '-0.02em',

      '--font-size-5xl': '3rem',
      '--font-size-5xl-line-height': '1',
      '--font-size-5xl-letter-spacing': '-0.02em',

      '--font-size-6xl': '3.75rem',
      '--font-size-6xl-line-height': '1',
      '--font-size-6xl-letter-spacing': '-0.02em',

      '--font-size-7xl': '4.5rem',
      '--font-size-7xl-line-height': '1',
      '--font-size-7xl-letter-spacing': '-0.04em',

      '--font-size-8xl': '6rem',
      '--font-size-8xl-line-height': '1',
      '--font-size-8xl-letter-spacing': '-0.04em',

      '--font-size-9xl': '7rem',
      '--font-size-9xl-line-height': '1',
      '--font-size-9xl-letter-spacing': '-0.04em',

      '--shadow-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  {
    name: 'Luxury',
    logo: '',
    cssVars: {
      '--primary': 'oklch(62.85% 0.087 88.95)',
      '--primary-highlight': 'color-mix(in oklab, var(--primary), white 75%)',
      '--primary-shadow': 'color-mix(in oklab, var(--primary), black 75%)',

      '--accent': 'oklch(85.95% 0.042 88.80)',
      '--accent-highlight': 'color-mix(in oklab, var(--accent), white 75%)',
      '--accent-shadow': 'color-mix(in oklab, var(--accent), black 75%)',

      '--success': 'oklch(68.94% 0.183 142.19)',
      '--success-highlight': 'color-mix(in oklab, var(--success), white 75%)',
      '--success-shadow': 'color-mix(in oklab, var(--success), black 75%)',

      '--error': 'oklch(62.80% 0.258 29.23)',
      '--error-highlight': 'color-mix(in oklab, var(--error), white 75%)',
      '--error-shadow': 'color-mix(in oklab, var(--error), black 75%)',

      '--warning': 'oklch(80.16% 0.171 73.27)',
      '--warning-highlight': 'color-mix(in oklab, var(--warning), white 75%)',
      '--warning-shadow': 'color-mix(in oklab, var(--warning), black 75%)',

      '--info': 'oklch(49.07% 0.177 262.04)',
      '--info-highlight': 'color-mix(in oklab, var(--info), white 75%)',
      '--info-shadow': 'color-mix(in oklab, var(--info), black 75%)',

      '--background': 'oklch(100% 0 0)',
      '--foreground': 'oklch(18.22% 0 0)',

      '--contrast-100': 'oklch(94.61% 0 0)',
      '--contrast-200': 'oklch(91.58% 0 0)',
      '--contrast-300': 'oklch(78.26% 0 0)',
      '--contrast-400': 'oklch(68.30% 0 0)',
      '--contrast-500': 'oklch(62.34% 0 0)',

      '--font-family-heading': dm_serif_text.style.fontFamily,
      '--font-variation-settings-heading': '"slnt" 0',
      '--font-feature-settings-heading': 'normal',

      '--font-family-body': inter.style.fontFamily,
      '--font-variation-settings-body': '"slnt" 0',
      '--font-feature-settings-body': 'normal',

      '--font-family-mono': roboto_mono.style.fontFamily,
      '--font-variation-settings-mono': '"slnt" 0',
      '--font-feature-settings-mono': 'normal',

      '--font-size-xs': '0.75rem',
      '--font-size-xs-line-height': 'calc(1.25 / 0.75)',
      '--font-size-xs-letter-spacing': '0',

      '--font-size-sm': '0.875rem',
      '--font-size-sm-line-height': 'calc(1.5 / 0.875)',
      '--font-size-sm-letter-spacing': '0',

      '--font-size-base': '1rem',
      '--font-size-base-line-height': 'calc(1.5 / 1)',
      '--font-size-base-letter-spacing': '-0.01em',

      '--font-size-lg': '1.125rem',
      '--font-size-lg-line-height': 'calc(1.75 / 1.125)',
      '--font-size-lg-letter-spacing': '-0.01em',

      '--font-size-xl': '1.25rem',
      '--font-size-xl-line-height': 'calc(1.75 / 1.25)',
      '--font-size-xl-letter-spacing': '-0.01em',

      '--font-size-2xl': '1.5rem',
      '--font-size-2xl-line-height': 'calc(1.75 / 1.5)',
      '--font-size-2xl-letter-spacing': '-0.01em',

      '--font-size-3xl': '1.875rem',
      '--font-size-3xl-line-height': 'calc(2 / 1.875)',
      '--font-size-3xl-letter-spacing': '-0.01em',

      '--font-size-4xl': '2.5rem',
      '--font-size-4xl-line-height': 'calc(2.75 / 2.5)',
      '--font-size-4xl-letter-spacing': '-0.02em',

      '--font-size-5xl': '3rem',
      '--font-size-5xl-line-height': '1',
      '--font-size-5xl-letter-spacing': '-0.02em',

      '--font-size-6xl': '3.75rem',
      '--font-size-6xl-line-height': '1',
      '--font-size-6xl-letter-spacing': '-0.02em',

      '--font-size-7xl': '4.5rem',
      '--font-size-7xl-line-height': '1',
      '--font-size-7xl-letter-spacing': '-0.04em',

      '--font-size-8xl': '6rem',
      '--font-size-8xl-line-height': '1',
      '--font-size-8xl-letter-spacing': '-0.04em',

      '--font-size-9xl': '7rem',
      '--font-size-9xl-line-height': '1',
      '--font-size-9xl-letter-spacing': '-0.04em',

      '--shadow-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
] as const satisfies Brands;

export type SoulBrandName = (typeof brands)[number]['name'];
