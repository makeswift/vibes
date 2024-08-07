import { Navigation } from '@/vibes/schema'

export const navigation = [
  {
    title: 'Getting started',
    pages: [
      { title: 'Introduction', slug: 'introduction', file: 'docs/introduction.mdx' },
      { title: 'Installation', slug: 'installation', file: 'docs/installation.mdx' },
    ],
  },
  {
    title: 'Styles',
    pages: [{ title: 'Magenta', slug: 'magenta', file: 'docs/magenta.mdx' }],
  },
  {
    title: 'Components',
    pages: [
      {
        title: 'Accordions',
        slug: 'accordions',
        file: 'docs/accordions.mdx',
        component: 'accordions',
      },
      {
        title: 'Button',
        slug: 'button',
        file: 'docs/button.mdx',
        component: 'button',
      },
      {
        title: 'Card',
        slug: 'card',
        file: 'docs/card.mdx',
        component: 'card',
      },
      {
        title: 'Code Block',
        slug: 'code-block',
        file: 'docs/code-block.mdx',
        component: 'code-block',
      },
      {
        title: 'Copy Command',
        slug: 'copy-command',
        file: 'docs/copy-command.mdx',
        component: 'copy-command',
      },
      {
        title: 'Feature Grid',
        slug: 'feature-grid',
        file: 'docs/feature-grid.mdx',
        component: 'feature-grid',
      },
      {
        title: 'Feed',
        slug: 'feed',
        file: 'docs/feed.mdx',
        component: 'feed',
      },
      {
        title: 'Footer',
        slug: 'footer',
        file: 'docs/footer.mdx',
        component: 'footer',
      },
      {
        title: 'Glow Container',
        slug: 'glow-container',
        file: 'docs/glow-container.mdx',
        component: 'glow-container',
      },
      {
        title: 'List',
        slug: 'list',
        file: 'docs/list.mdx',
        component: 'list',
      },
      {
        title: 'Marquee',
        slug: 'marquee',
        file: 'docs/marquee.mdx',
        component: 'marquee',
      },
      {
        title: 'Navigation',
        slug: 'navigation',
        file: 'docs/navigation.mdx',
        component: 'navigation',
      },
      {
        title: 'Pricing Cards',
        slug: 'pricing-cards',
        file: 'docs/pricing-cards.mdx',
        component: 'pricing-cards',
      },
      {
        title: 'Table',
        slug: 'table',
        file: 'docs/table.mdx',
        component: 'table',
      },
      {
        title: 'Tabs',
        slug: 'tabs',
        file: 'docs/tabs.mdx',
        component: 'tabs',
      },
    ],
  },
] satisfies Navigation
