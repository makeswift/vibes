import { Header } from '@/vibes/soul/components/header'

export const headerLinks = [
  {
    id: '1',
    label: 'New',
    href: '#',
  },
  {
    id: '2',
    label: 'Sale',
    href: '#',
  },
  {
    id: '3',
    label: 'Footware',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'By Category',
        href: '#',
        links: [
          { id: '1', label: 'Sandals', href: '#' },
          { id: '2', label: 'Flats', href: '#' },
          { id: '3', label: 'Sneakers', href: '#' },
          { id: '4', label: 'Loafers', href: '#' },
          { id: '5', label: 'Heels', href: '#' },
          { id: '6', label: 'Boots', href: '#' },
          { id: '7', label: 'Sale', href: '#' },
          { id: '8', label: 'View All', href: '#' },
          { id: '9', label: 'Last Chance', href: '#' },
        ],
      },
      {
        id: '2',
        label: 'By Collection',
        href: '#',
        links: [
          { id: '1', label: 'Fall Drop One', href: '#' },
          { id: '2', label: 'Travel Edit', href: '#' },
          { id: '3', label: 'Ballet Everyday', href: '#' },
          { id: '4', label: 'FRĒDA X WOLFSPOUT', href: '#' },
          { id: '5', label: 'Loafer Shop', href: '#' },
          { id: '6', label: 'Best of FRĒDA', href: '#' },
        ],
      },
    ],
  },
  {
    id: '4',
    label: 'Discover',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'Find US',
        href: '#',
        links: [
          { id: '1', label: 'Locations', href: '#' },
          { id: '2', label: 'Events', href: '#' },
          { id: '3', label: 'Press', href: '#' },
          { id: '4', label: 'Contact Us', href: '#' },
        ],
      },
      {
        id: '2',
        label: 'Who is FRĒDA?',
        href: '#',
        links: [
          { id: '1', label: 'Behind the Brand', href: '#' },
          { id: '2', label: 'Our Family-Run Factories', href: '#' },
          { id: '3', label: 'Journal', href: '#' },
          { id: '4', label: 'Careers', href: '#' },
        ],
      },
    ],
  },
]

export const logo = {
  src: 'https://rstr.in/monogram/vibes/DVHsMCuLQID',
  altText: 'Freda Salvador Logo',
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
