import { Slideshow } from '@/vibes/soul/sections/slideshow';

export const heroSlides = [
  {
    title: 'Plants delivered to your door',
    image: {
      src: 'https://rstr.in/monogram/vibes/fzVuE9iZ4mI',
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
      src: 'https://rstr.in/monogram/vibes/-cqnV6UhvCk',
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
      src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C/3QYdXXiml_C',
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
