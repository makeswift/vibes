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
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },
      {
        title: 'Dropdown',
        slug: 'dropdown',
        file: 'docs/dropdown.mdx',
        component: 'dropdown',
      },
    ],
  },
] satisfies Navigation
