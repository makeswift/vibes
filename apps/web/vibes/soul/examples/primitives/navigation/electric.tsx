import { getProducts } from '@/vibes/soul/data'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { SearchResult } from '@/vibes/soul/primitives/navigation/search-results'

export const navigationLinks = [
  {
    label: 'Shop All',
    href: '#',
    groups: [
      {
        label: 'Featured',
        href: '#',
        links: [
          { label: 'New Arrivals', href: '#' },
          { label: 'Best Sellers', href: '#' },
          { label: 'Sale', href: '#' },
        ],
      },
      {
        label: 'Shop By Size',
        href: '#',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ],
      },
      {
        label: 'Light',
        href: '#',
        links: [
          { label: 'Bright Direct', href: '#' },
          { label: 'Bright Indirect', href: '#' },
          { label: 'Low Light', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'New Arrivals',
    href: '#',
    groups: [
      {
        label: 'Featured',
        href: '#',
        links: [
          { label: 'Best Sellers', href: '#' },
          { label: 'Shop All', href: '#' },
        ],
      },
      {
        label: 'Indoor',
        href: '#',
        links: [
          { label: 'Desk Plants', href: '#' },
          { label: 'Low Light Plants', href: '#' },
          { label: 'Pet Friendly', href: '#' },
        ],
      },
      {
        label: 'Outdoor',
        href: '#',
        links: [
          { label: 'Small', href: '#' },
          { label: 'Medium', href: '#' },
          { label: 'Large', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Pet Friendly',
    href: '#',
    groups: [
      {
        label: 'Indoor',
        href: '#',
        links: [
          { label: 'Low Light', href: '#' },
          { label: 'Air Purifying', href: '#' },
          { label: 'Low Maintenance', href: '#' },
        ],
      },
      {
        label: 'Outdoor',
        href: '#',
        links: [
          { label: 'Direct Sun', href: '#' },
          { label: 'Floral', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Blog',
    href: '#',
    groups: [
      {
        label: 'Plant Life',
        href: '#',
        links: [{ label: 'See All Stories', href: '#' }],
      },
    ],
  },
]

export const locales = [
  { id: '1', region: 'US', language: 'EN' },
  { id: '2', region: 'FR', language: 'FR' },
  { id: '3', region: 'DE', language: 'DC' },
  { id: '4', region: 'IT', language: 'IT' },
]

const searchAction = async () => {
  'use server'

  return new Promise<SearchResult[]>(res => {
    setTimeout(() => {
      res([
        {
          title: 'Indoors',
          links: [
            {
              label: 'Desk Plants',
              href: '#',
            },
            {
              label: 'Low Light Plants',
              href: '#',
            },
            {
              label: 'Pet Friendly',
              href: '#',
            },
          ],
        },
        {
          title: 'Outdoors',
          links: [
            {
              label: 'Small',
              href: '#',
            },
            {
              label: 'Medium',
              href: '#',
            },
            {
              label: 'Large',
              href: '#',
            },
          ],
        },
        {
          title: 'Products',
          products: getProducts('Electric'),
        },
      ])
    }, 1000)
  })
}

export const logo = 'SOUL'

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
