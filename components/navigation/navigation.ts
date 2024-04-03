const navigation = {
  links: [],
  chapters: [
    {
      name: 'Eclipse',
      slug: 'eclipse',
      groups: [
        {
          name: 'Getting started',
          icon: 'Play',
          pages: [
            'eclipse/introduction',
            'eclipse/installation',
            'eclipse/usage',
            'eclipse/contributing',
          ],
        },
        {
          name: 'Components',
          icon: 'Cube',
          pages: [
            'eclipse/accordions',
            'eclipse/button',
            'eclipse/card',
            'eclipse/code-block',
            'eclipse/copy-command',
            'eclipse/feature-grid',
            'eclipse/feed',
            'eclipse/footer',
            'eclipse/form',
            'eclipse/glow-container',
            'eclipse/list',
            'eclipse/marquee',
            'eclipse/navigation',
            'eclipse/pricing-cards',
            'eclipse/table',
            'eclipse/tabs',
            'eclipse/video',
          ],
        },
      ],
    },
    {
      name: 'Vinyl',
      slug: 'vinyl',
      groups: [
        {
          name: 'Getting started',
          icon: 'Cube',
          pages: [
            'brutalist/introduction',
            'brutalist/installation',
            'brutalist/usage',
            'brutalist/contributing',
          ],
        },
        {
          name: 'Components',
          icon: 'Cube',
          pages: ['brutalist/button', 'brutalist/carousel'],
        },
      ],
    },
  ],
} as const

export default navigation
