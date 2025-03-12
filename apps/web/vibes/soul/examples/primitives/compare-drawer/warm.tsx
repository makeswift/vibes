'use client';

import { CompareDrawer, CompareDrawerContext } from '@/vibes/soul/primitives/compare-drawer';

export default function Preview() {
  return (
    <CompareDrawerContext value={{ optimisticItems: compareProducts, setOptimisticItems: () => {} }}>
      <div className="relative h-screen">
        <CompareDrawer  />
      </div>
    </CompareDrawerContext>
  );
}

const compareProducts = [
  {
    id: '1',
    title: 'Mini Bar Bag',
    image: {
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      alt: 'Mini Bar Bag',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Stem Caddy',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Hip Slinger',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    href: '#',
  },
];
