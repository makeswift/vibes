import { Breadcrumb } from '@/vibes/soul/primitives/breadcrumbs'

import { SoulBrandName } from '../brands'

export function getBreadcrumbs(brand: SoulBrandName): Breadcrumb[] {
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
} as const satisfies Record<SoulBrandName, [Breadcrumb, ...Breadcrumb[]]>
