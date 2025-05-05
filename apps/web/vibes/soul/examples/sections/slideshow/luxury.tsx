import { Slideshow } from '@/vibes/soul/sections/slideshow';

export const heroSlides = [
  {
    title: 'NEW IN',
    description:
      'Match the energy of your fall vibe with our latest collection of reimagined classics. This season it’s all about boots, mary janes, ballet flats and more.',

    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTpkZDM5YWZlOS00ODhlLTRlNDktODUyNS04MmJjYjI0NTgwM2M=/croc-shoes.webp',
      alt: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'NEW IN',
    description:
      'Match the energy of your fall vibe with our latest collection of reimagined classics. This season it’s all about boots, mary janes, ballet flats and more.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTowNjhhNmYxOS0wOGY4LTQwNDYtYmNlYi1mNzliNWZiZTlhNGQ=/cow-hide-shoe.webp',
      alt: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'NEW IN',
    description:
      'Match the energy of your fall vibe with our latest collection of reimagined classics. This season it’s all about boots, mary janes, ballet flats and more.',
    image: {
      src: 'https://storage.googleapis.com/s.mkswft.com/RmlsZTo4NWU1YmUzMy1kMWI1LTQ5MzMtYjg3MS00NGZhOWFhY2Y0NDQ=/cross-stitch-shoe.webp',
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
