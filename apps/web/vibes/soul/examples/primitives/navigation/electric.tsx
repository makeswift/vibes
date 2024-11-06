import { locales } from '@/vibes/soul/data/locales'
import { Navigation } from '@/vibes/soul/primitives/navigation'

import { localeAction, searchAction } from './actions'

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

export const logo = 'SOUL'

export default function Preview() {
  return (
    <div className="relative min-h-screen bg-contrast-100 p-4">
      <Navigation
        links={navigationLinks}
        logo={logo}
        cartHref="#"
        accountHref="#"
        activeLocaleId="US"
        searchHref="#"
        locales={locales}
        searchAction={searchAction('Electric')}
        localeAction={localeAction}
      />
    </div>
  )
}
