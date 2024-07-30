import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Components',

    pages: [
      {
        title: 'Accordions',
        slug: 'accordions',
        file: 'docs/accordions.mdx',
        component: 'accordions',
      },
      { title: 'Badge', slug: 'badge', file: 'docs/badge.mdx', component: 'badge' },
      {
        title: 'Button',
        slug: 'button',
        file: 'docs/button.mdx',
        component: 'button',
      },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },
      { title: 'Swatch', slug: 'swatch', file: 'docs/swatch.mdx', component: 'swatch' },
    ],
  },
] satisfies Navigation
