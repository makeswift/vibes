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
    title: 'Mini Bar Bag',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
  },
  {
    id: '2',
    title: 'Mini Bar Bag',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#',
  },
  {
    id: '3',
    title: 'Stem Caddy',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
      alt: 'Stem Caddy',
    },
    href: '#',
  },
  {
    id: '4',
    title: 'Hip Slinger',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
      alt: 'Hip Slinger',
    },
    href: '#',
  },
];
