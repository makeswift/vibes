import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Components',
    pages: [
      { title: 'Breadcrumbs', slug: 'breadcrumbs', file: 'docs/breadcrumbs.mdx' },
      {
        title: 'Button',
        slug: 'button',
        file: 'docs/button.mdx',
        component: 'button',
      },
    ],
  },
] satisfies Navigation
