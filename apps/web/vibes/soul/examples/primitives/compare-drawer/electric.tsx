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
    title: 'Philodendron Imperial Red',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNzAzMzk0Ni01NGNhLTQ3ZDYtODgyYi0wYWI3NTUzNTU4YjQ=/kv08IvX08j.jpeg',
      alt: 'Philodendron Imperial Red',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Monstera',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZToyMTIwYzE1ZC01YzlkLTQ3MDgtOTZhOS1hZDkwYjVmNDAwZWY=/n0P83RMnClS%202930x3663.jpeg',
      alt: 'Monstera',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Pink Caladium',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjJhNTMyOC1hNzMwLTQxYjQtODE5Ny05ZDdlYWViMjJhMDQ=/AaZW4j2VTd4%202489x3111.jpeg',
      alt: 'Pink Caladium',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Hoya Kerrii',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmZmRlZDM2MS0yMWMwLTRiYjktOTU2Ny1mNWM0YjcwMGIwZWQ=/QSaMw6aC_AN%208600x10750.jpeg',
      alt: 'Hoya Kerrii',
    },
    href: '#',
  },
];
