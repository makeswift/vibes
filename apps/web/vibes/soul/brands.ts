import { DM_Serif_Text, Inter, Roboto_Mono } from 'next/font/google'

import { Brands } from '@/vibes/schema'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap' })
const dm_serif_text = DM_Serif_Text({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const brands = [
  {
    name: 'Electric',
    logo: '',
    cssVars: {
      '--primary': '96 100% 68%',
      '--accent': '96 100% 88%',
      '--background': '0 0% 100%',
      '--foreground': '0 0% 7%',
      '--success': '116 78% 65%',
      '--error': '0 100% 60%',
      '--warning': '40 100% 60%',
      '--info': '220 70% 45%',

      '--contrast-100': '0 0% 93%',
      '--contrast-200': '0 0% 82%',
      '--contrast-300': '0 0% 70%',
      '--contrast-400': '0 0% 54%',
      '--contrast-500': '0 0% 34%',

      '--font-family-heading': dm_serif_text.style.fontFamily,
      '--font-family-body': inter.style.fontFamily,
      '--font-family-mono': roboto_mono.style.fontFamily,
      '--font-variation-settings-body': '"slnt" 0',
      '--font-variation-settings-heading': '"slnt" 0',

      '--font-size-xs': '0.75rem',
      '--font-size-sm': '0.875rem',
      '--font-size-base': '1rem',
      '--font-size-lg': '1.125rem',
      '--font-size-xl': '1.25rem',
      '--font-size-2xl': '1.5rem',

      '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  {
    name: 'Warm',
    logo: '',
    cssVars: {
      '--primary': '43 100% 50%',
      '--accent': '43 100% 80%',
      '--background': '0 0% 100%',
      '--foreground': '0 0% 7%',
      '--success': '116, 46%, 49%',
      '--error': '0, 100%, 50%',
      '--warning': '40, 100%, 50%',
      '--info': '220 70% 45%',

      '--contrast-100': '0 0% 93%',
      '--contrast-200': '0 0% 89%',
      '--contrast-300': '0 0% 72%',
      '--contrast-400': '0 0% 60%',
      '--contrast-500': '0 0% 53%',

      '--font-family-heading': inter.style.fontFamily,
      '--font-family-body': inter.style.fontFamily,
      '--font-family-mono': roboto_mono.style.fontFamily,
      '--font-variation-settings-body': '"slnt" 0',
      '--font-variation-settings-heading': '"slnt" 0',

      '--font-size-xs': '0.75rem',
      '--font-size-sm': '0.875rem',
      '--font-size-base': '1rem',
      '--font-size-lg': '1.125rem',
      '--font-size-xl': '1.25rem',
      '--font-size-2xl': '1.5rem',

      '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  {
    name: 'Luxury',
    logo: '',
    cssVars: {
      '--primary': '43 38% 45%',
      '--accent': '43 38% 78%',
      '--background': '0 0% 100%',
      '--foreground': '0 0% 7%',
      '--success': '116, 46%, 49%',
      '--error': '0, 100%, 50%',
      '--warning': '40, 100%, 50%',
      '--info': '220 70% 45%',

      '--contrast-100': '0 0% 93%',
      '--contrast-200': '0 0% 89%',
      '--contrast-300': '0 0% 72%',
      '--contrast-400': '0 0% 60%',
      '--contrast-500': '0 0% 53%',

      '--font-family-heading': inter.style.fontFamily,
      '--font-family-body': inter.style.fontFamily,
      '--font-family-mono': roboto_mono.style.fontFamily,
      '--font-variation-settings-body': '"slnt" 0',
      '--font-variation-settings-heading': '"slnt" 0',

      '--font-size-xs': '0.75rem',
      '--font-size-sm': '0.875rem',
      '--font-size-base': '1rem',
      '--font-size-lg': '1.125rem',
      '--font-size-xl': '1.25rem',
      '--font-size-2xl': '1.5rem',

      '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      '--shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
] as const satisfies Brands

export type SoulBrandName = (typeof brands)[number]['name']
