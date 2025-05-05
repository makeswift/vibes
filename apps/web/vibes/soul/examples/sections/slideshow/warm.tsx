import { Slideshow } from '@/vibes/soul/sections/slideshow';

export const heroSlides = [
  {
    title: 'Aero Dynamic',
    description: 'Designed for speed and comfort',
    image: {
      alt: 'alt',
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo1MjA2ODIyNC1kZmNjLTRlNDgtODUwMi1lNGQyOTUwOWQzMzk=/aero-dynamic.jpeg',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Accessible',
    description: 'Easy access to your gear',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpjMzU2N2ExNy1kOGM2LTQzNzAtOWRkMC02YjEyNzZmNjA2MTg=/mini-bar-bag-7.jpeg',
      alt: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Customizable',
    description: 'Create your own style',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo5NTIxMmU4MC0xY2EwLTQxZjktOTBiYS0yOWFhYmU3ZTNkMzA=/stem-caddy.jpeg',
      alt: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
];

export default function Preview() {
  return <Slideshow slides={heroSlides} />;
}
