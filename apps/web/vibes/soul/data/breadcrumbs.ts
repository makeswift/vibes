import { Breadcrumb } from '@/vibes/soul/sections/breadcrumbs';

import { SoulBrandName } from '../brands';

export function getBreadcrumbs(brand: SoulBrandName): Breadcrumb[] {
  return breadcrumbs[brand];
}

const breadcrumbs = {
  Electric: [
    {
      label: 'Home',
      href: '#1',
    },
    {
      label: 'Plants',
      href: '#2',
    },
    {
      label: 'Indoor',
      href: '#3',
    },
  ],
  Luxury: [
    {
      label: 'Home',
      href: '#1',
    },
    {
      label: 'Shoes',
      href: '#2',
    },
    {
      label: 'Flats',
      href: '#3',
    },
  ],
  Warm: [
    {
      label: 'Home',
      href: '#1`',
    },
    {
      label: 'Bags',
      href: '#2',
    },
    {
      label: 'Handle Bags',
      href: '#3',
    },
  ],
} as const satisfies Record<SoulBrandName, [Breadcrumb, ...Breadcrumb[]]>;
