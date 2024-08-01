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
  '--success': string
  '--error': string
  '--warning': string
  '--info': string

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
  '--font-size-sm'?: string
  '--font-size-base'?: string
  '--font-size-lg'?: string
  '--font-size-xl'?: string
  '--font-size-2xl'?: string
  '--font-size-3xl'?: string
  '--font-size-4xl'?: string
  '--font-size-5xl'?: string
  '--font-size-6xl'?: string
  '--font-size-7xl'?: string

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
  description: string
  tags: string[]
  thumbnail: string
  author: {
    name: string
    url: string
  }
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
