import { Header } from '@/vibes/soul/components/header'

export const headerLinks = [
  {
    id: '1',
    label: 'Shop All',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'Featured',
        href: '#',
        links: [
          { id: '1', label: 'New Arrivals', href: '#' },
          { id: '2', label: 'Best Sellers', href: '#' },
          { id: '3', label: 'Sale', href: '#' },
        ],
      },
      {
        id: '2',
        label: 'Shop By Size',
        href: '#',
        links: [
          { id: '1', label: 'Small', href: '#' },
          { id: '2', label: 'Medium', href: '#' },
          { id: '3', label: 'Large', href: '#' },
        ],
      },
      {
        id: '3',
        label: 'Light',
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
    label: 'New Arrivals',
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
        label: 'Indoor',
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
    label: 'Pet Friendly',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'Indoor',
        href: '#',
        links: [
          { id: '1', label: 'Low Light', href: '#' },
          { id: '2', label: 'Air Purifying', href: '#' },
          { id: '3', label: 'Low Maintenance', href: '#' },
        ],
      },
      {
        id: '2',
        label: 'Outdoor',
        href: '#',
        links: [
          { id: '1', label: 'Direct Sun', href: '#' },
          { id: '2', label: 'Floral', href: '#' },
        ],
      },
    ],
  },
  {
    id: '4',
    label: 'Blog',
    href: '#',
    groups: [
      {
        id: '1',
        label: 'Plant Life',
        href: '#',
        links: [{ id: '1', label: 'See All Stories', href: '#' }],
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

export default function Preview() {
  return (
    <div className="relative min-h-48">
      <Header
        links={headerLinks}
        logo="SOUL"
        cartHref="#"
        accountHref="#"
        locales={locales}
        activeLocale="EN"
      />
    </div>
  )
}
