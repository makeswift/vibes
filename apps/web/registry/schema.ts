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

export type Brand = {
  name: string
  cssVars: {
    primary: string
    accent: string
    background: string
    foreground: string

    'contrast-100': string
    'contrast-200': string
    'contrast-300': string
    'contrast-400': string
    'contrast-500': string

    'font-family-heading': string
    'font-family-body': string
    'font-family-mono': string

    'font-size-xs': string
    'font-size-sm': string
    'font-size-base': string
    'font-size-lg': string
    'font-size-xl': string
    'font-size-2xl': string

    'line-height-xs': string
    'line-height-sm': string
    'line-height-base': string
    'line-height-lg': string
    'line-height-xl': string
    'line-height-2xl': string

    'letter-spacing-xs': string
    'letter-spacing-sm': string
    'letter-spacing-base': string
    'letter-spacing-lg': string
    'letter-spacing-xl': string
    'letter-spacing-2xl': string

    'shadow-sm': string
    'shadow-base': string
    'shadow-md': string
    'shadow-lg': string
    'shadow-xl': string
  }
}

export type Brands = NonEmptyArray<Brand>

export type Page = {
  title: string
  slug: string
  file: string
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
