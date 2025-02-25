'use client';

import { CompareDrawer } from '@/vibes/soul/primitives/compare-drawer';

export default function Preview() {
  return (
    <div className="relative h-screen">
      <CompareDrawer items={compareProducts} />
    </div>
  );
}

const compareProducts = [
  {
    id: '1',
    title: 'Jada Square Toe Ballet Flat',
    image: {
      src: 'https://rstr.in/monogram/vibes/9vu9tSw1WdA',
      alt: 'Jada Square Toe Ballet Flat',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    image: {
      src: 'https://rstr.in/monogram/vibes/jD25Jjm0zbT',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    image: {
      src: 'https://rstr.in/monogram/vibes/1ipihAyvRQj',
      alt: 'Jessie Ballet Flat',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    image: {
      src: 'https://rstr.in/monogram/vibes/YfQW8M1Gv2H/zTWKcqJrdIu',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#',
  },
];
