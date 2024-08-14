import Header from '@/vibes/soul/components/header'

export const headerLinks = [
  {
    label: 'Men',
    href: '#',
    groups: [
      {
        label: 'Featured',
        href: '#',
        links: [
          { label: 'New Arrivals', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Sale', href: '#' },
          { label: 'Shop All', href: '#' },
        ],
      },
      {
        label: 'Tops',
        href: '#',
        links: [
          { label: 'Short Sleeve Tees', href: '#' },
          { label: 'Button Downs', href: '#' },
          { label: 'Hoodies & Sweatshirts', href: '#' },
          { label: 'Shop All Tops', href: '#' },
        ],
      },
      {
        label: 'Bottoms',
        href: '#',
        links: [
          { label: 'Shorts', href: '#' },
          { label: 'Pants', href: '#' },
          { label: 'Shop All Bottoms', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Women',
    href: '#',
    groups: [
      {
        label: 'Featured',
        href: '#',
        links: [
          { label: 'New Arrivals', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Shop All', href: '#' },
        ],
      },
      {
        label: 'Tops',
        href: '#',
        links: [
          { label: 'Tanks', href: '#' },
          { label: 'Outerwear', href: '#' },
          { label: 'Shop All Tops', href: '#' },
        ],
      },
      {
        label: 'Bottoms',
        href: '#',
        links: [
          { label: 'Leggings', href: '#' },
          { label: 'Pants', href: '#' },
          { label: 'Shorts & Skirts', href: '#' },
          { label: 'Shop All Bottoms', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Accessories',
    href: '#',
    groups: [
      {
        label: 'Headwear',
        href: '#',
        links: [
          { label: 'Hats', href: '#' },
          { label: 'Beanies', href: '#' },
          { label: 'Shop All Headwear', href: '#' },
        ],
      },
      {
        label: 'Travel',
        href: '#',
        links: [
          { label: 'Bags', href: '#' },
          { label: 'Shop All Travel', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Stories',
    href: '#',
    groups: [
      {
        label: 'Stories',
        href: '#',
        links: [{ label: 'See All Stories', href: '#' }],
      },
    ],
  },
]

export default function Preview() {
  return (
    <div className="relative min-h-48">
      <Header links={headerLinks} logo="SOUL" cartHref="#" accountHref="#" />
    </div>
  )
}
