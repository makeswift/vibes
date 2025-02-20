import { BreadcrumbWithId } from '@/vibes/soul/sections/breadcrumbs';

import { SoulBrandName } from '../brands';

export function getBreadcrumbs(brand: SoulBrandName): BreadcrumbWithId[] {
  return breadcrumbs[brand];
}

const breadcrumbs = {
  Electric: [
    {
      id: '1',
      label: 'Home',
      href: '#',
    },
    {
      id: '2',
      label: 'Plants',
      href: '#',
    },
    {
      id: '3',
      label: 'Indoor',
      href: '#',
    },
  ],
  Luxury: [
    {
      id: '1',
      label: 'Home',
      href: '#',
    },
    {
      id: '2',
      label: 'Shoes',
      href: '#',
    },
    {
      id: '3',
      label: 'Flats',
      href: '#',
    },
  ],
  Warm: [
    {
      id: '1',
      label: 'Home',
      href: '#',
    },
    {
      id: '2',
      label: 'Bags',
      href: '#',
    },
    {
      id: '3',
      label: 'Handle Bags',
      href: '#',
    },
  ],
} as const satisfies Record<SoulBrandName, [BreadcrumbWithId, ...BreadcrumbWithId[]]>;
