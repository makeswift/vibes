import { Slideshow } from '@/vibes/soul/sections/slideshow'

export const heroSlides = [
  {
    title: 'Give',
    image: {
      src: 'https://rstr.in/monogram/vibes/fzVuE9iZ4mI',
      alt: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Grow',
    image: {
      src: 'https://rstr.in/monogram/vibes/-cqnV6UhvCk',
      alt: 'alt',
    },
    // cta: {
    //   href: '#',
    //   label: 'Shop Now',
    // },
  },
  {
    title: 'Thrive',
    image: {
      src: 'https://rstr.in/monogram/vibes/RNZYqBoUs7C/3QYdXXiml_C',
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
