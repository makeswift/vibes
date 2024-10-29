import { Navigation } from '@/vibes/soul/primitives/navigation'

export const navigationLinks = [
  {
    label: 'Shop',
    href: '#',
    groups: [
      {
        label: 'Bike Bags',
        href: '#',
        links: [
          { label: 'New Arrivals', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Sale', href: '#' },
        ],
      },
      {
        label: 'Bags You Wear',
        href: '#',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ],
      },
      {
        label: 'Camera Straps',
        href: '#',
        links: [
          { label: 'Wrist Straps', href: '#' },
          { label: 'Body Straps', href: '#' },
          { label: 'Camera Padding Inserts', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Journal',
    href: '#',
    groups: [
      {
        links: [
          { label: 'Adventures', href: '#' },
          { label: 'Bike Check', href: '#' },
          { label: 'How Tos', href: '#' },
          { label: 'Interviews', href: '#' },
        ],
      },
      {
        links: [
          { label: 'News', href: '#' },
          { label: 'Videos', href: '#' },
          { label: 'All', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '#',
    groups: [
      {
        href: '#',
        links: [
          { label: 'Our Story', href: '#' },
          { label: 'Policies', href: '#' },
          { label: 'Retailers', href: '#' },
          { label: 'Press', href: '#' },
        ],
      },
    ],
  },
]

export const logo = {
  src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
  alt: 'Outer Shell Logo',
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
      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />
    </div>
  )
}
