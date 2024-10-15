import { Slideshow } from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: 'Aero Dynamic',
    description: 'Designed for speed and comfort',
    image: {
      alt: 'alt',
      src: 'https://rstr.in/monogram/vibes/2UhnmMan5ct',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Accessible',
    description: 'Easy access to your gear',
    image: {
      src: 'https://rstr.in/monogram/vibes/Nsj4qcMks2D',
      alt: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Customizable',
    description: 'Create your own style',
    image: {
      src: 'https://rstr.in/monogram/vibes/EpL5yspw4Pc',
      alt: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
