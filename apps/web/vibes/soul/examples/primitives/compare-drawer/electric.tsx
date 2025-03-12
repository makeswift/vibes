'use client';

import { CompareDrawer, CompareDrawerContext, useCompareDrawer } from '@/vibes/soul/primitives/compare-drawer';

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
    title: 'Philodendron Imperial Red',
    image: {
      src: 'https://rstr.in/monogram/vibes/-kv08IvX08j',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Monstera',
    image: {
      src: 'https://rstr.in/monogram/vibes/n0P83RMnClS',
      alt: 'Monstera',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Pink Caladium',
    image: {
      src: 'https://rstr.in/monogram/vibes/AaZW4j2VTd4',
      alt: 'Pink Caladium',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    image: {
      src: 'https://rstr.in/monogram/vibes/QSaMw6aC_AN',
      alt: 'Hoya Kerrii',
    },
    href: '#',
  },
];
