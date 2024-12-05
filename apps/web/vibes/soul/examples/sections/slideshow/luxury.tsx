import { Slideshow } from '@/vibes/soul/sections/slideshow';

export const heroSlides = [
  {
    title: 'NEW IN',
    description:
      'Match the energy of your fall vibe with our latest collection of reimagined classics. This season it’s all about boots, mary janes, ballet flats and more.',

    image: {
      src: 'https://rstr.in/monogram/vibes/2EMiPsA7hB6',
      alt: 'alt',
    },

    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'NEW IN',
    description:
      'Match the energy of your fall vibe with our latest collection of reimagined classics. This season it’s all about boots, mary janes, ballet flats and more.',
    image: {
      src: 'https://rstr.in/monogram/vibes/QmfQfksVmJO',
      alt: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'NEW IN',
    description:
      'Match the energy of your fall vibe with our latest collection of reimagined classics. This season it’s all about boots, mary janes, ballet flats and more.',
    image: {
      src: 'https://rstr.in/monogram/vibes/TiwfRzYo4oG/ZSR8DkwOi8t',
      alt: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
];

export default function Preview() {
  return <Slideshow slides={heroSlides} />;
}
