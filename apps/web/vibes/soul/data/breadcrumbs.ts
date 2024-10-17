import { Brand, Breadcrumb } from '@/vibes/soul/types'

export function getBreadcrumbs(brand: Brand): Breadcrumb[] {
  return breadcrumbs[brand]
}

const breadcrumbs = {
  Electric: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Plants',
      href: '#',
    },
    {
      label: 'Indoor',
      href: '#',
    },
  ],
  Luxury: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Shoes',
      href: '#',
    },
    {
      label: 'Flats',
      href: '#',
    },
  ],
  Warm: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Bags',
      href: '#',
    },
    {
      label: 'Handle Bags',
      href: '#',
    },
  ],
} as const satisfies Record<Brand, [Breadcrumb, ...Breadcrumb[]]>
// as const satisfies { [brand: Brand]: [Breadcrumb, ...Breadcrumb[]] }
