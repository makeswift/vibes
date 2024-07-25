import { CSSProperties } from 'react'

import { z } from 'zod'

export type NonEmptyArray<T> = [T, ...T[]]

export type Component = {
  name: string
  dependencies: string[]
  registryDependencies: string[]
  files: string[]
  component: React.LazyExoticComponent<React.ComponentType<any>>
}

export type Components = NonEmptyArray<Component>

export type Font = {
  name: string
  src: string | { path: string; weight?: string; style?: string }[]
}

export type CSSVars = {
  '--primary': string
  '--accent': string
  '--background': string
  '--foreground': string

  '--contrast-100': string
  '--contrast-200': string
  '--contrast-300': string
  '--contrast-400': string
  '--contrast-500': string

  '--font-family-heading': string
  '--font-family-body': string
  '--font-family-mono'?: string

  '--font-feature-settings-heading'?: string
  '--font-feature-settings-body'?: string
  '--font-feature-settings-mono'?: string

  '--font-variation-settings-heading'?: string
  '--font-variation-settings-body'?: string
  '--font-variation-settings-mono'?: string

  '--font-size-xs'?: string
  '--line-height-xs'?: string
  '--letter-spacing-xs'?: string
  '--font-weight-xs'?: string

  '--font-size-sm'?: string
  '--line-height-sm'?: string
  '--letter-spacing-sm'?: string
  '--font-weight-sm'?: string

  '--font-size-base'?: string
  '--line-height-base'?: string
  '--letter-spacing-base'?: string
  '--font-weight-base'?: string

  '--font-size-lg'?: string
  '--line-height-lg'?: string
  '--letter-spacing-lg'?: string
  '--font-weight-lg'?: string

  '--font-size-xl'?: string
  '--line-height-xl'?: string
  '--letter-spacing-xl'?: string
  '--font-weight-xl'?: string

  '--font-size-2xl'?: string
  '--line-height-2xl'?: string
  '--letter-spacing-2xl'?: string
  '--font-weight-2xl'?: string

  '--font-size-3xl'?: string
  '--line-height-3xl'?: string
  '--letter-spacing-3xl'?: string
  '--font-weight-3xl'?: string

  '--font-size-4xl'?: string
  '--line-height-4xl'?: string
  '--letter-spacing-4xl'?: string
  '--font-weight-4xl'?: string

  '--font-size-5xl'?: string
  '--line-height-5xl'?: string
  '--letter-spacing-5xl'?: string
  '--font-weight-5xl'?: string

  '--font-size-6xl'?: string
  '--line-height-6xl'?: string
  '--letter-spacing-6xl'?: string
  '--font-weight-6xl'?: string

  '--font-size-7xl'?: string
  '--line-height-7xl'?: string
  '--letter-spacing-7xl'?: string
  '--font-weight-7xl'?: string

  '--shadow-sm'?: string
  '--shadow-base'?: string
  '--shadow-md'?: string
  '--shadow-lg'?: string
  '--shadow-xl'?: string
  '--shadow-2xl'?: string
}

export type Brand = {
  name: string
  logo: string
  fonts: Font[]
  cssVars: CSSVars
}

export type Brands = NonEmptyArray<Brand>

export type Page = {
  title: string
  slug: string
  file: string
  component?: string
}

export type Navigation = {
  title: string
  pages: Page[]
}[]

export type Vibe = {
  name: string
  slug: string
  navigation: Navigation
  components: Components
  brands: Brands
}

export const pageMetaSchema = (vibe: Vibe) => {
  const [component, ...rest] = vibe.components

  return z.object({
    title: z.string(),
    description: z.string().optional(),
    features: z.array(z.string()).optional(),
    preview: z
      .union([
        z.object(
          Object.fromEntries(
            vibe.brands.map(brand => [
              brand.name,
              z.enum([component.name, ...rest.map(entry => entry.name)]),
            ])
          )
        ),
        z.string(),
      ])
      .optional(),
  })
}
