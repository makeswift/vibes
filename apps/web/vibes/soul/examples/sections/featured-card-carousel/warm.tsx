import { type CardContent } from '@/vibes/soul/primitives/card';
import { FeaturedCardCarousel } from '@/vibes/soul/sections/featured-card-carousel';

export default function Preview() {
  const productsPromise = new Promise<CardContent[]>((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });

  return (
    <FeaturedCardCarousel
      cards={productsPromise}
      cta={{ label: 'Shop all', href: '/all' }}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      title="Categories"
    />
  );
}

const products: CardContent[] = [
  {
    title: 'Mini Bar Bag',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1YzIwNTljMi04NzcwLTRiM2ItYmIzMy02ZTk0ODNkY2M5MDk=/mini-bar-bag.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#1',
  },
  {
    title: 'Mini Bar Bag',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphOTFmNjU3Ny0zMDMxLTQzNjYtOWUzNC02MjRkYWQ4OTkzOWI=/mini-bar-bag-2.jpeg',
      alt: 'Mini Bar Bag',
    },
    href: '#2',
  },
  {
    title: 'Stem Caddy',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
      alt: 'Stem Caddy',
    },
    href: '#3',
  },
  {
    title: 'Hip Slinger',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo0MDcxNDBlYy1jYmIzLTRiNjQtOTUxMS1mMTIyMGUyYWY5MjQ=/hip-slinger.jpeg',
      alt: 'Hip Slinger',
    },
    href: '#4',
  },
  {
    title: 'Everyday Tote',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowODYwYTY2NC02NjdjLTRhODYtYTUxYy1jOWExNzI5YTdjMDk=/everyday-tote.jpeg',
      alt: 'Everyday Tote',
    },
    href: '#5',
  },
  {
    title: 'Mini Saddlebag',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4YzEyMjUyOC0zMWU5LTQyYWYtOTFlYi04YjQzNmRiZGVmNDU=/mini-saddlebag.jpeg',
      alt: 'Mini Saddlebag',
    },
    href: '#6',
  },
];
