import { ComponentPropsWithoutRef } from 'react';

import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';

import { SoulBrandName } from '../brands';

export function getBreadcrumbs(
  brand: SoulBrandName,
): Array<ComponentPropsWithoutRef<typeof AnimatedLink> & { id: string }> {
  return breadcrumbs[brand];
}

const breadcrumbs = {
  Electric: [
    {
      id: '1',
      text: 'Home',
      href: '#',
    },
    {
      id: '2',
      text: 'Plants',
      href: '#',
    },
    {
      id: '3',
      text: 'Indoor',
      href: '#',
    },
  ],
  Luxury: [
    {
      id: '1',
      text: 'Home',
      href: '#',
    },
    {
      id: '2',
      text: 'Shoes',
      href: '#',
    },
    {
      id: '3',
      text: 'Flats',
      href: '#',
    },
  ],
  Warm: [
    {
      id: '1',
      text: 'Home',
      href: '#',
    },
    {
      id: '2',
      text: 'Bags',
      href: '#',
    },
    {
      id: '3',
      text: 'Handle Bags',
      href: '#',
    },
  ],
};
