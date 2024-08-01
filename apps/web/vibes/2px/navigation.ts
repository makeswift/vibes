import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Components',

    pages: [
      {
        title: 'Breadcrumbs',
        slug: 'breadcrumbs',
        file: 'docs/breadcrumbs.mdx',
        component: 'breadcrumbs',
      },
      {
        title: 'Button',
        slug: 'button',
        file: 'docs/button.mdx',
        component: 'button',
      },
      { title: 'Checkbox', slug: 'checkbox', file: 'docs/checkbox.mdx', component: 'checkbox' },
      {
        title: 'Alert Box',
        slug: 'alert-box',
        file: 'docs/alert-box.mdx',
        component: 'alert-box',
      },
      {
        title: 'Counter',
        slug: 'counter',
        file: 'docs/counter.mdx',
        component: 'counter',
      },
      { title: 'Calendar', slug: 'calendar', file: 'docs/calendar.mdx', component: 'calendar' },
      { title: 'Rating', slug: 'rating', file: 'docs/rating.mdx', component: 'rating' },
      { title: 'Badge', slug: 'badge', file: 'docs/badge.mdx', component: 'badge' },
      {
        title: 'Accordions',
        slug: 'accordions',
        file: 'docs/accordions.mdx',
        component: 'accordions',
      },

      {
        title: 'Section Header',
        slug: 'section-header',
        file: 'docs/section-header.mdx',
        component: 'section-header',
      },
      {
        title: 'Hero Header',
        slug: 'hero-header',
        file: 'docs/hero-header.mdx',
        component: 'hero-header',
      },
      { title: 'Tabs', slug: 'tabs', file: 'docs/tabs.mdx', component: 'tabs' },
    ],
  },
] satisfies Navigation
