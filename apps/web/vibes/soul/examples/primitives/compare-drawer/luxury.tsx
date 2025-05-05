'use client';

import { CompareDrawer, CompareDrawerProvider } from '@/vibes/soul/primitives/compare-drawer';

export default function Preview() {
  return (
    <CompareDrawerProvider items={compareProducts}>
      <div className="relative h-screen">
        <CompareDrawer />
      </div>
    </CompareDrawerProvider>
  );
}

const compareProducts = [
  {
    id: '1',
    title: 'JADA SQUARE TOE BALLET FLAT',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTUwMzNmMy0zYzRlLTQzOTUtYTc3MC1jYWM0OWE1YWMyY2E=/jada-square-toe.webp',
      alt: 'JADA SQUARE TOE BALLET FLAT',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Jayla Woven Ballet Heel',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZTE5YTQ1Mi1lZDU3LTQ2NDYtODgxMC0yYzU2NjI0NGM3ODk=/jayla-woven.webp',
      alt: 'Jayla Woven Ballet Heel',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Jessie Ballet Flat',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowZWIzNWY2My0yM2Y3LTRmNDAtYTUzOS0zY2JjNmFhYzJkYWQ=/jessie-ballet.webp',
      alt: 'Jessie Ballet Flat',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Leighton Soft Leather Loafer',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmM2Y1MzJiZi1hYTg0LTQzNzctYTA4NS1hODZkMWI3NGFmOWU=/leighton-soft.jpeg',
      alt: 'Leighton Soft Leather Loafer',
    },
    href: '#',
  },
];
