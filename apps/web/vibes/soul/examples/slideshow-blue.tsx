import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: 'New Casuals',
    image: {
      src: 'https://rstr.in/monogram/vibes/Nz2yR4EZgvo',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Slide 2',
    image: {
      src: 'https://rstr.in/monogram/vibes/gWgyEhm5W60',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
  {
    title: 'Slide 3',
    image: {
      src: 'https://rstr.in/monogram/vibes/K-F83RXTJsx',
      altText: 'alt',
    },
    cta: {
      href: '#',
      label: 'Shop Now',
    },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
