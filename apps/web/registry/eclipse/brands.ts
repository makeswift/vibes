import { Brands } from '@/registry/schema'

export const brands = [
  {
    name: 'Aquamarine',
    logo: '',
    fonts: [
      {
        name: 'Inter',
        src: '/fonts/Inter-VariableFont_slnt,wght.woff2',
      },
    ],
    cssVars: {
      primary: '176 97% 46%',
      accent: '248 90% 62%',
      background: '220 30% 4%',
      foreground: '0 0% 100%',

      'contrast-100': '220 20% 76%',
      'contrast-200': '220 15% 60%',
      'contrast-300': '220 12% 50%',
      'contrast-400': '220 15% 36%',
      'contrast-500': '220 20% 25%',

      'font-family-heading': "'Inter', system-ui, sans-serif",
      'font-family-body': "'Inter', system-ui, sans-serif",
      'font-family-mono': "'Inter', system-ui, sans-serif",

      'font-variation-settings-body': '"slnt" -10',
      'font-variation-settings-heading': '"slnt" 0',

      'font-size-xs': '0.75rem',
      'font-size-sm': '0.875rem',
      'font-size-base': '1rem',
      'font-size-lg': '1.125rem',
      'font-size-xl': '1.25rem',
      'font-size-2xl': '1.5rem',

      'line-height-xs': '1rem',
      'line-height-sm': '1.25rem',
      'line-height-base': '1.5rem',
      'line-height-lg': '1.75rem',
      'line-height-xl': '2rem',
      'line-height-2xl': '2.25rem',

      'letter-spacing-xs': '0em',
      'letter-spacing-sm': '0em',
      'letter-spacing-base': '0em',
      'letter-spacing-lg': '0em',
      'letter-spacing-xl': '-0.01em',
      'letter-spacing-2xl': '-0.02em',

      'font-weight-xs': '400',
      'font-weight-sm': '400',
      'font-weight-base': '400',
      'font-weight-lg': '500',
      'font-weight-xl': '500',
      'font-weight-2xl': '500',

      'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
  {
    name: 'Magenta',
    logo: '',
    fonts: [
      {
        name: 'Epilogue',
        src: [
          {
            path: '/fonts/Epilogue[wght].woff2',
            style: 'normal',
          },
          {
            path: '/fonts/Epilogue-Italic[wght].woff2',
            style: 'italic',
          },
        ],
      },
    ],
    cssVars: {
      primary: '301, 100%, 50%',
      accent: '248 90% 62%',
      background: '220 30% 4%',
      foreground: '0 0% 100%',

      'contrast-100': '220 20% 76%',
      'contrast-200': '220 15% 60%',
      'contrast-300': '220 12% 50%',
      'contrast-400': '220 15% 36%',
      'contrast-500': '220 20% 25%',

      'font-family-heading': "'Epilogue', system-ui, sans-serif",
      'font-family-body': "'Epilogue', system-ui, sans-serif",
      'font-family-mono': "'Epilogue', system-ui, sans-serif",

      'font-size-xs': '0.75rem',
      'font-size-sm': '0.875rem',
      'font-size-base': '1rem',
      'font-size-lg': '1.125rem',
      'font-size-xl': '1.25rem',
      'font-size-2xl': '1.5rem',

      'line-height-xs': '1rem',
      'line-height-sm': '1.25rem',
      'line-height-base': '1.5rem',
      'line-height-lg': '1.75rem',
      'line-height-xl': '2rem',
      'line-height-2xl': '2.25rem',

      'letter-spacing-xs': '0em',
      'letter-spacing-sm': '0em',
      'letter-spacing-base': '0em',
      'letter-spacing-lg': '0em',
      'letter-spacing-xl': '-0.01em',
      'letter-spacing-2xl': '-0.02em',

      'font-weight-xs': '400',
      'font-weight-sm': '400',
      'font-weight-base': '400',
      'font-weight-lg': '500',
      'font-weight-xl': '500',
      'font-weight-2xl': '500',

      'shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      'shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  },
] satisfies Brands
