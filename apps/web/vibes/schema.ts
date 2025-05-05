import { z } from 'zod';

export type NonEmptyArray<T> = [T, ...T[]];

export interface Component {
  name: string;
  dependencies: string[];
  registryDependencies: string[];
  files: string[];
  component?: React.LazyExoticComponent<
    React.ComponentType<{ searchParams: Promise<Record<string, string | string[]>> }>
  >;
}

export type Components = NonEmptyArray<Component>;

export interface CSSVars {
  '--primary': string;
  '--primary-highlight': string;
  '--primary-shadow': string;

  '--accent': string;
  '--accent-highlight': string;
  '--accent-shadow': string;

  '--success': string;
  '--success-highlight': string;
  '--success-shadow': string;

  '--error': string;
  '--error-highlight': string;
  '--error-shadow': string;

  '--warning': string;
  '--warning-highlight': string;
  '--warning-shadow': string;

  '--info': string;
  '--info-highlight': string;
  '--info-shadow': string;

  '--background': string;
  '--foreground': string;

  '--contrast-100': string;
  '--contrast-200': string;
  '--contrast-300': string;
  '--contrast-400': string;
  '--contrast-500': string;

  '--font-family-heading': string;
  '--font-feature-settings-heading'?: string;
  '--font-variation-settings-heading'?: string;

  '--font-family-body': string;
  '--font-feature-settings-body'?: string;
  '--font-variation-settings-body'?: string;

  '--font-family-mono'?: string;
  '--font-feature-settings-mono'?: string;
  '--font-variation-settings-mono'?: string;

  '--font-size-xs'?: string;
  '--font-size-xs-line-height'?: string;
  '--font-size-xs-letter-spacing'?: string;

  '--font-size-sm'?: string;
  '--font-size-sm-line-height'?: string;
  '--font-size-sm-letter-spacing'?: string;

  '--font-size-base'?: string;
  '--font-size-base-line-height'?: string;
  '--font-size-base-letter-spacing'?: string;

  '--font-size-lg'?: string;
  '--font-size-lg-line-height'?: string;
  '--font-size-lg-letter-spacing'?: string;

  '--font-size-xl'?: string;
  '--font-size-xl-line-height'?: string;
  '--font-size-xl-letter-spacing'?: string;

  '--font-size-2xl'?: string;
  '--font-size-2xl-line-height'?: string;
  '--font-size-2xl-letter-spacing'?: string;

  '--font-size-3xl'?: string;
  '--font-size-3xl-line-height'?: string;
  '--font-size-3xl-letter-spacing'?: string;

  '--font-size-4xl'?: string;
  '--font-size-4xl-line-height'?: string;
  '--font-size-4xl-letter-spacing'?: string;

  '--font-size-5xl'?: string;
  '--font-size-5xl-line-height'?: string;
  '--font-size-5xl-letter-spacing'?: string;

  '--font-size-6xl'?: string;
  '--font-size-6xl-line-height'?: string;
  '--font-size-6xl-letter-spacing'?: string;

  '--font-size-7xl'?: string;
  '--font-size-7xl-line-height'?: string;
  '--font-size-7xl-letter-spacing'?: string;

  '--font-size-8xl'?: string;
  '--font-size-8xl-line-height'?: string;
  '--font-size-8xl-letter-spacing'?: string;

  '--font-size-9xl'?: string;
  '--font-size-9xl-line-height'?: string;
  '--font-size-9xl-letter-spacing'?: string;

  '--shadow-xs'?: string;
  '--shadow-sm'?: string;
  '--shadow-md'?: string;
  '--shadow-lg'?: string;
  '--shadow-xl'?: string;
  '--shadow-2xl'?: string;
}

export interface Brand {
  name: string;
  logo: string;
  cssVars: CSSVars;
}

export type Brands = NonEmptyArray<Brand>;

export interface Page {
  title: string;
  slug: string;
  file: string;
  component?: string;
}

export interface NavigationItem {
  title: string;
  pages: [Page, ...Page[]];
}

export type Navigation = [NavigationItem, ...NavigationItem[]];

export interface Vibe {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  thumbnail: string;
  author: {
    name: string;
    url: string;
  };
  navigation: Navigation;
  components: Components;
  brands: Brands;
}

export const pageMetaSchema = (vibe: Vibe) => {
  const [component, ...rest] = vibe.components;

  return z.object({
    title: z.string(),
    description: z.string().optional(),
    features: z.array(z.string()).optional(),
    preview: z
      .union([
        z.object(
          Object.fromEntries(
            vibe.brands.map((brand) => [
              brand.name,
              z.enum([component.name, ...rest.map((entry) => entry.name)]),
            ]),
          ),
        ),
        z.string(),
      ])
      .optional(),
    previewSize: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  });
};
