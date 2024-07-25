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
        title: 'Radio Button',
        slug: 'radio-button',
        file: 'docs/radio-button.mdx',
        component: 'radio-button',
      },
    ],
  },
] satisfies Navigation
