import { Navigation } from '@/vibes/soul/primitives/navigation'

export const navigationLinks = [
  {
    label: 'New',
    href: '#',
  },
  {
    label: 'Sale',
    href: '#',
  },
  {
    label: 'Footware',
    href: '#',
    groups: [
      {
        label: 'By Category',
        href: '#',
        links: [
          { label: 'Sandals', href: '#' },
          { label: 'Flats', href: '#' },
          { label: 'Sneakers', href: '#' },
          { label: 'Loafers', href: '#' },
          { label: 'Heels', href: '#' },
          { label: 'Boots', href: '#' },
          { label: 'Sale', href: '#' },
          { label: 'View All', href: '#' },
          { label: 'Last Chance', href: '#' },
        ],
      },
      {
        label: 'By Collection',
        href: '#',
        links: [
          { label: 'Fall Drop One', href: '#' },
          { label: 'Travel Edit', href: '#' },
          { label: 'Ballet Everyday', href: '#' },
          { label: 'FRĒDA X WOLFSPOUT', href: '#' },
          { label: 'Loafer Shop', href: '#' },
          { label: 'Best of FRĒDA', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Discover',
    href: '#',
    groups: [
      {
        label: 'Find US',
        href: '#',
        links: [
          { label: 'Locations', href: '#' },
          { label: 'Events', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
      {
        label: 'Who is FRĒDA?',
        href: '#',
        links: [
          { label: 'Behind the Brand', href: '#' },
          { label: 'Our Family-Run Factories', href: '#' },
          { label: 'Journal', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
  },
]

export const logo = {
  src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID',
  alt: 'Freda Salvador Logo',
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
        searchHref="#"
      />
    </div>
  )
}
