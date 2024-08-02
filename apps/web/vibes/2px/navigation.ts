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
      {
        title: 'File Uploader',
        slug: 'file-uploader',
        file: 'docs/file-uploader.mdx',
        component: 'file-uploader',
      },
      { title: 'Input', slug: 'input', file: 'docs/input.mdx', component: 'input' },
      { title: 'Text Area', slug: 'text-area', file: 'docs/text-area.mdx', component: 'text-area' },
      { title: 'Skeleton', slug: 'skeleton', file: 'docs/skeleton.mdx', component: 'skeleton' },
      {
        title: 'Dropdown',
        slug: 'dropdown',
        file: 'docs/dropdown.mdx',
        component: 'dropdown',
      },
      {
        title: 'Radio Button',
        slug: 'radio-button',
        file: 'docs/radio-button.mdx',
        component: 'radio-button',
      },

      {
        title: 'Option selector',
        slug: 'option-selector',
        file: 'docs/option-selector.mdx',
        component: 'option-selector',
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
      { title: 'Swatch', slug: 'swatch', file: 'docs/swatch.mdx', component: 'swatch' },
      { title: 'Badge', slug: 'badge', file: 'docs/badge.mdx', component: 'badge' },
      {
        title: 'Accordions',
        slug: 'accordions',
        file: 'docs/accordions.mdx',
        component: 'accordions',
      },
      { title: 'Tabs', slug: 'tabs', file: 'docs/tabs.mdx', component: 'tabs' },
    ],
  },
] satisfies Navigation
