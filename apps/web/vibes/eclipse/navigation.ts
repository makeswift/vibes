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
    title: 'Components',
    pages: [
      { title: 'Accordions', slug: 'accordions', file: 'docs/accordions.mdx' },
      { title: 'Button', slug: 'button', file: 'docs/button.mdx' },
      { title: 'Card', slug: 'card', file: 'docs/card.mdx' },
      { title: 'Code Block', slug: 'code-block', file: 'docs/code-block.mdx' },
      { title: 'Copy Command', slug: 'copy-command', file: 'docs/copy-command.mdx' },
      { title: 'Feature Grid', slug: 'feature-grid', file: 'docs/feature-grid.mdx' },
      { title: 'Feed', slug: 'feed', file: 'docs/feed.mdx' },
      { title: 'Footer', slug: 'footer', file: 'docs/footer.mdx' },
      { title: 'Glow Container', slug: 'glow-container', file: 'docs/glow-container.mdx' },
      { title: 'List', slug: 'list', file: 'docs/list.mdx' },
      { title: 'Marquee', slug: 'marquee', file: 'docs/marquee.mdx' },
      { title: 'Navigation', slug: 'navigation', file: 'docs/navigation.mdx' },
      { title: 'Pricing Cards', slug: 'pricing-cards', file: 'docs/pricing-cards.mdx' },
      { title: 'Table', slug: 'table', file: 'docs/table.mdx' },
      { title: 'Tabs', slug: 'tabs', file: 'docs/tabs.mdx' },
    ],
  },
] satisfies Navigation
