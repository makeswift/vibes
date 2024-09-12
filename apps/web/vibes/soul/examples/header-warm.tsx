import { Header } from '@/vibes/soul/components/header'

export const headerLinks = [
  {
    id: '1',
    label: 'Shop',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'Bike Bags',
        href: '#',
        links: [
          { id: '1', label: 'New Arrivals', href: '#' },
          { id: '2', label: 'Best Sellers', href: '#' },
          { id: '3', label: 'Sale', href: '#' },
        ],
      },
      {
        id: '2',
        label: 'Bags You Wear',
        href: '#',
        links: [
          { id: '1', label: 'Small', href: '#' },
          { id: '2', label: 'Medium', href: '#' },
          { id: '3', label: 'Large', href: '#' },
        ],
      },
      {
        id: '3',
        label: 'Camera Straps',
        href: '#',
        links: [
          { id: '1', label: 'Bright Direct', href: '#' },
          { id: '2', label: 'Bright Indirect', href: '#' },
          { id: '3', label: 'Low Light', href: '#' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Journal',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'Featured',
        href: '#',
        links: [
          { id: '1', label: 'Best Sellers', href: '#' },
          { id: '2', label: 'Shop All', href: '#' },
        ],
      },
      {
        id: '2',
        label: 'Clear',
        href: '#',
        links: [
          { id: '1', label: 'Desk Plants', href: '#' },
          { id: '2', label: 'Low Light Plants', href: '#' },
          { id: '3', label: 'Pet Friendly', href: '#' },
        ],
      },
      {
        id: '3',
        label: 'Outdoor',
        href: '#',
        links: [
          { id: '1', label: 'Small', href: '#' },
          { id: '2', label: 'Medium', href: '#' },
          { id: '3', label: 'Large', href: '#' },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'About',
    href: '#',
    groups: [
      {
        id: '1',
        href: '#',
        links: [
          { id: '1', label: 'Our Story', href: '#' },
          { id: '2', label: 'Policies', href: '#' },
          { id: '3', label: 'Retailers', href: '#' },
          { id: '4', label: 'Press', href: '#' },
        ],
      },
    ],
  },
]

export const logo = {
  src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
  altText: 'Outer Shell Logo',
}

export const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

export default function Preview() {
  return (
    <div className="relative min-h-48">
      <Header
        links={headerLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />
    </div>
  )
}
