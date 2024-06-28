import * as Vibes from '@/registry'
import { Brand, Vibe } from '@/registry/schema'

export function getVibe(slug: string): Vibe | undefined {
  return Object.values(Vibes).find(vibe => vibe.slug === slug)
}

export function getCssVars(brand: Brand): React.CSSProperties {
  const { cssVars } = brand

  return {
    '--primary': cssVars['primary'],
    '--accent': cssVars['accent'],
    '--background': cssVars['background'],
    '--foreground': cssVars['foreground'],
    '--contrast-100': cssVars['contrast-100'],
    '--contrast-200': cssVars['contrast-200'],
    '--contrast-300': cssVars['contrast-300'],
    '--contrast-400': cssVars['contrast-400'],
    '--contrast-500': cssVars['contrast-500'],

    '--font-family-heading': cssVars['font-family-heading'],
    '--font-family-body': cssVars['font-family-body'],
    '--font-family-mono': cssVars['font-family-mono'],

    '--font-size-xs': cssVars['font-size-xs'],
    '--font-size-sm': cssVars['font-size-sm'],
    '--font-size-base': cssVars['font-size-base'],
    '--font-size-lg': cssVars['font-size-lg'],
    '--font-size-xl': cssVars['font-size-xl'],
    '--font-size-2xl': cssVars['font-size-2xl'],

    '--line-height-xs': cssVars['line-height-xs'],
    '--line-height-sm': cssVars['line-height-sm'],
    '--line-height-base': cssVars['line-height-base'],
    '--line-height-lg': cssVars['line-height-lg'],
    '--line-height-xl': cssVars['line-height-xl'],
    '--line-height-2xl': cssVars['line-height-2xl'],

    '--letter-spacing-xs': cssVars['letter-spacing-xs'],
    '--letter-spacing-sm': cssVars['letter-spacing-sm'],
    '--letter-spacing-base': cssVars['letter-spacing-base'],
    '--letter-spacing-lg': cssVars['letter-spacing-lg'],
    '--letter-spacing-xl': cssVars['letter-spacing-xl'],
    '--letter-spacing-2xl': cssVars['letter-spacing-2xl'],

    '--shadow-sm': cssVars['shadow-sm'],
    '--shadow-base': cssVars['shadow-base'],
    '--shadow-md': cssVars['shadow-md'],
    '--shadow-lg': cssVars['shadow-lg'],
    '--shadow-xl': cssVars['shadow-xl'],
  } as React.CSSProperties
}
