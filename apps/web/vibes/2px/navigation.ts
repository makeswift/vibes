import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Components',

    pages: [
      {
        title: 'Button',
        slug: 'button',
        file: 'docs/button.mdx',
        component: 'button',
      },
      { title: 'Calendar', slug: 'calendar', file: 'docs/calendar.mdx' },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx' },
    ],
  },
] satisfies Navigation
