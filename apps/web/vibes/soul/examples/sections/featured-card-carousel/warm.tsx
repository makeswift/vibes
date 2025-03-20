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
      src: 'https://rstr.in/monogram/vibes/mrlTNE1TJfB',
      alt: 'Mini Bar Bag',
    },
    href: '#1',
  },
  {
    title: 'Mini Bar Bag',
    image: {
      src: 'https://rstr.in/monogram/vibes/LznMEk1GSB1',
      alt: 'Mini Bar Bag',
    },
    href: '#2',
  },
  {
    title: 'Stem Caddy',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'Stem Caddy',
    },
    href: '#3',
  },
  {
    title: 'Hip Slinger',
    image: {
      src: 'https://rstr.in/monogram/vibes/z6b0vDjJv6x',
      alt: 'Hip Slinger',
    },
    href: '#4',
  },
  {
    title: 'Everyday Tote',
    image: {
      src: 'https://rstr.in/monogram/vibes/1tVm6tBbJq9',
      alt: 'Everyday Tote',
    },
    href: '#5',
  },
  {
    title: 'Mini Saddlebag',
    image: {
      src: 'https://rstr.in/monogram/vibes/MZX8-yya26e',
      alt: 'Mini Saddlebag',
    },
    href: '#6',
  },
];
