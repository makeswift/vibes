import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    title: 'Slide 1',
    description: 'Description',
    image: {
      src: 'https://rstr.in/monogram/vibes/fzVuE9iZ4mI',
      altText: 'alt',
    },
    cta: {
      label: 'Shop Now',
      href: '#',
    },
  },
  {
    title: 'Slide 2',
    description: 'Description',
    image: {
      src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
      altText: 'alt',
    },
    cta: {
      label: 'Shop Now',
      href: '#',
    },
  },
  {
    title: 'Slide 3',
    description: 'Description',
    image: {
      src: 'https://rstr.in/monogram/vibes/Ip8DYxJT8_b',
      altText: 'alt',
    },
    cta: {
      label: 'Shop Now',
      href: '#',
    },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
