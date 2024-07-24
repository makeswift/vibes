import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [{ title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' }],
  },
  {
    title: 'Components',
    pages: [
      { title: 'Button', slug: 'button', file: 'docs/button.mdx' },
      { title: 'Accordions', slug: 'Accordions', file: 'docs/accordions.mdx' },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx' },
      { title: 'Navigation', slug: 'navigation', file: 'docs/navigation.mdx' },
    ],
  },
] satisfies Navigation
