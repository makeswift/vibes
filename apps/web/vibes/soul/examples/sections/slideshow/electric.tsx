import { Slideshow } from '@/vibes/soul/sections/slideshow';

export const heroSlides = [
  {
    title: 'Plants delivered to your door',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTphMTY1ZmQ1Yi01M2UyLTRhYWMtODZiZC1jZmJiY2E3YzRhOWY=/plants-delivered.jpeg',
      alt: 'alt',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cta: {
      href: '/shop-all',
      label: 'Shop Now',
    },
  },
  {
    title: 'Grow',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpmYjk3NzU2NS00YmZmLTRkYjEtODhkMy1kZGUzY2I5YmRhODQ=/small-plant-growth.jpeg',
      alt: 'alt',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cta: {
      href: '/shop-all',
      label: 'Shop Now',
    },
  },
  {
    title: 'Thrive',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1NGFjNmRiYi0xZDE2LTRiOTEtOWUyZS0zMjY1ZjBmZTk0ZjU=/plant-blog-1.jpeg/3QYdXXiml_C',
      alt: 'alt',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    cta: {
      href: '/shop-all',
      label: 'Shop Now',
    },
  },
];

export default function Preview() {
  return <Slideshow slides={heroSlides} />;
}
