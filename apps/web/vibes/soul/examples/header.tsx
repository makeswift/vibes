import Header from '@/vibes/soul/components/header'

export const headerLinks = [
  {
    item: {
      text: 'Men',
      link: { href: '#' },
    },
    links: [
      [
        { text: 'View All', link: { href: '#' } },
        { text: 'Coats & Jackets', link: { href: '#' } },
      ],
      [
        { text: 'T-Shirts', link: { href: '#' } },
        { text: 'Sweatshirts', link: { href: '#' } },
      ],
      [{ text: 'Pants', link: { href: '#' } }],
    ],
  },
  {
    item: {
      text: 'Women',
      link: { href: '#' },
    },
    links: [
      [
        { text: 'View All', link: { href: '#' } },
        { text: 'Coats & Jackets', link: { href: '#' } },
      ],
      [
        { text: 'Pants', link: { href: '#' } },
        { text: 'Sweatshirts', link: { href: '#' } },
      ],
      [{ text: 'Tops', link: { href: '#' } }],
    ],
  },
  {
    item: {
      text: 'Accessories',
      link: { href: '#' },
    },
    links: [
      [
        { text: 'View All', link: { href: '#' } },
        { text: 'Hats', link: { href: '#' } },
      ],
      [{ text: 'Jackets', link: { href: '#' } }],
    ],
  },
  {
    item: {
      text: 'Stories',
      link: { href: '#' },
    },
    links: [[{ text: 'View All', link: { href: '#' } }]],
  },
]

export default function Preview() {
  return (
    <div className="relative min-h-48">
      <Header links={headerLinks} logo={{ alt: 'SOUL' }} />
    </div>
  )
}
