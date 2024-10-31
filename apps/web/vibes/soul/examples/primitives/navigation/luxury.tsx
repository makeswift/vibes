import { getProducts } from '@/vibes/soul/data'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { SearchResult } from '@/vibes/soul/primitives/navigation/search-results'

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

const searchAction = async () => {
  'use server'

  return new Promise<SearchResult[]>(res => {
    setTimeout(() => {
      res([
        {
          title: 'Categories',
          links: [
            {
              label: 'Sandals',
              href: '#',
            },
            {
              label: 'Flats',
              href: '#',
            },
            {
              label: 'Sneakers',
              href: '#',
            },
            {
              label: 'Loafers',
              href: '#',
            },
          ],
        },
        {
          title: 'Collection',
          links: [
            {
              label: 'Fall Drop One',
              href: '#',
            },
            {
              label: 'Travel Edit',
              href: '#',
            },
            {
              label: 'Ballet Everyday',
              href: '#',
            },
            {
              label: 'FRĒDA X WOLFSPOUT',
              href: '#',
            },
            {
              label: 'Loafer Shop',
              href: '#',
            },
          ],
        },
        {
          title: 'Products',
          products: getProducts('Warm'),
        },
      ])
    }, 1000)
  })
}

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
        activeLocale="EN"
        searchHref="#"
        locales={locales}
        searchAction={searchAction}
        searchCta={{ label: 'View all items', href: '#' }}
      />
    </div>
  )
}
