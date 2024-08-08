import { Epilogue } from 'next/font/google'
import localFont from 'next/font/local'

import { Brands } from '@/vibes/schema'

const splineSans = localFont({
  src: 'fonts/SplineSans_VariableFont.woff2',
  display: 'swap',
})
const epilogue = Epilogue({ subsets: ['latin'], display: 'swap' })

export const brands = [
  {
    name: 'Aquamarine',
    logo: '',
    cssVars: {
      '--primary': '176 97% 46%',
      '--accent': '248 90% 62%',
      '--background': '220 30% 4%',
      '--foreground': '0 0% 100%',
      '--success': '142 50% 50%',
      '--error': '357 69% 45%',
      '--warning': '25 73% 45%',
      '--info': '220 70% 45%',

      '--contrast-100': '220 20% 76%',
      '--contrast-200': '220 15% 60%',
      '--contrast-300': '220 12% 50%',
      '--contrast-400': '220 15% 36%',
      '--contrast-500': '220 20% 25%',

      '--font-family-heading': splineSans.style.fontFamily,
      '--font-family-body': splineSans.style.fontFamily,
      '--font-family-mono': splineSans.style.fontFamily,

      '--font-size-xs': '0.75rem',
      '--font-size-sm': '0.875rem',
      '--font-size-base': '1rem',
      '--font-size-lg': '1.125rem',
      '--font-size-xl': '1.25rem',
      '--font-size-2xl': '1.5rem',
      '--font-size-3xl': '2.5rem',

      '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  {
    name: 'Magenta',
    logo: '',
    cssVars: {
      '--primary': '301, 100%, 50%',
      '--accent': '248 90% 62%',
      '--background': '220 30% 4%',
      '--foreground': '0 0% 100%',
      '--success': '142 50% 50%',
      '--error': '357 69% 45%',
      '--warning': '25 73% 45%',
      '--info': '220 70% 45%',

      '--contrast-100': '220 20% 76%',
      '--contrast-200': '220 15% 60%',
      '--contrast-300': '220 12% 50%',
      '--contrast-400': '220 15% 36%',
      '--contrast-500': '220 20% 25%',

      '--font-family-heading': epilogue.style.fontFamily,
      '--font-family-body': epilogue.style.fontFamily,
      '--font-family-mono': epilogue.style.fontFamily,

      '--font-size-xs': '0.75rem',
      '--font-size-sm': '0.875rem',
      '--font-size-base': '1rem',
      '--font-size-lg': '1.125rem',
      '--font-size-xl': '1.25rem',
      '--font-size-2xl': '1.5rem',
      '--font-size-3xl': '2.5rem',

      '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
] satisfies Brands
