import Slideshow from '@/vibes/soul/components/slideshow'

export const heroSlides = [
  {
    heading: 'Slide 1',
    image: {
      url: 'https://rstr.in/monogram/vibes/vgdjHDINE6V',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 2',
    image: {
      url: 'https://rstr.in/monogram/vibes/YOD5DuBfoFM',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
  {
    heading: 'Slide 3',
    image: {
      url: 'https://rstr.in/monogram/vibes/6GmqnHGoquY',
      alt: 'alt',
    },
    link: {
      href: '/',
      target: '_self',
    },
  },
]

export default function Preview() {
  return <Slideshow slides={heroSlides} />
}
