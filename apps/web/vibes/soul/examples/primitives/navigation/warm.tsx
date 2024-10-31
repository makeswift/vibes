import { getProducts } from '@/vibes/soul/data'
import { Navigation } from '@/vibes/soul/primitives/navigation'
import { SearchResult } from '@/vibes/soul/primitives/navigation/search-results'

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
          type: 'links',
          title: 'Bags You Wear',
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
          type: 'links',
          title: 'Camera Straps',
          links: [
            {
              label: 'Wrist Straps',
              href: '#',
            },
            {
              label: 'Body Straps',
              href: '#',
            },
          ],
        },
        {
          type: 'products',
          title: 'Products',
          products: getProducts('Warm'),
        },
      ])
    }, 1000)
  })
}

export const logo = {
  src: 'https://rstr.in/monogram/vibes/JzEctN2uDqL',
  alt: 'Outer Shell Logo',
}

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
        searchCtaLabel="View all items"
      />
    </div>
  )
}
