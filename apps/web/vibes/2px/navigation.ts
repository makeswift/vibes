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
      {
        title: 'Counter',
        slug: 'counter',
        file: 'docs/counter.mdx',
        component: 'counter',
      },
    ],
  },
] satisfies Navigation
