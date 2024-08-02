import Header from '@/vibes/soul/components/header'

export const headerLinks = [
  {
    item: {
      text: 'Men',
      link: { href: '/men' },
    },
    links: [
      [
        { text: 'View All', link: { href: '/men/view-all' } },
        { text: 'Coats & Jackets', link: { href: '/men/coats-jackets' } },
      ],
      [
        { text: 'T-Shirts', link: { href: '/men/t-shirts' } },
        { text: 'Sweatshirts', link: { href: '/men/sweatshirts' } },
      ],
      [{ text: 'Pants', link: { href: '/men/pants' } }],
    ],
  },
  {
    item: {
      text: 'Women',
      link: { href: '/women' },
    },
    links: [
      [
        { text: 'View All', link: { href: '/women/view-all' } },
        { text: 'Coats & Jackets', link: { href: '/women/coats-jackets' } },
      ],
      [
        { text: 'Pants', link: { href: '/women/pants' } },
        { text: 'Sweatshirts', link: { href: '/women/sweatshirts' } },
      ],
      [{ text: 'Tops', link: { href: '/women/tops' } }],
    ],
  },
  {
    item: {
      text: 'Accessories',
      link: { href: '/accessories' },
    },
    links: [
      [
        { text: 'View All', link: { href: '/accessories/view-all' } },
        { text: 'Hats', link: { href: '/accessories/hats' } },
      ],
      [{ text: 'Jackets', link: { href: '/accessories/jackets' } }],
    ],
  },
  {
    item: {
      text: 'Stories',
      link: { href: '/stories' },
    },
    links: [[{ text: 'View All', link: { href: '/stories/view-all' } }]],
  },
]

export default function Preview() {
  return (
    <div className="flex min-h-48 items-center justify-center p-5 sm:min-h-64 sm:p-8 lg:min-h-80 lg:p-12">
      <Header links={headerLinks} logo={{ alt: 'SOUL' }} />
    </div>
  )
}
